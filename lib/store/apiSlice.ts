import { createApi } from '@reduxjs/toolkit/query/react';
import { request, gql } from 'graphql-request';

// URL du backend Symfony / API Platform (GraphQL).
const GRAPHQL_URL =
  process.env.NEXT_PUBLIC_GRAPHQL_API_URL || 'http://bythiah.local/api/graphql';

// GraphQL base query
const graphqlBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ document, variables }: { document: string; variables?: any }) => {
    try {
      const result = await request(baseUrl, document, variables);
      return { data: result };
    } catch (error) {
      return { error };
    }
  };

// Create the API slice
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: graphqlBaseQuery({ baseUrl: GRAPHQL_URL }),
  tagTypes: ['Settings', 'Page', 'Block', 'Translation'],
  endpoints: (builder) => ({
    // État du site (mode maintenance). Le backend expose "siteStatuses"
    // (liste à un seul élément) ; on remappe vers la forme attendue par l'UI.
    getSettings: builder.query<
      {
        settings: {
          isUnderConstruction: boolean;
          constructionMessageFr: string | null;
          constructionMessageEn: string | null;
        };
      },
      void
    >({
      query: () => ({
        document: gql`
          query GetSettings {
            siteStatuses {
              maintenanceEnabled
              maintenanceTitle
              maintenanceMessage
            }
          }
        `,
      }),
      transformResponse: (response: any) => {
        const status = response?.siteStatuses?.[0] ?? {};
        const message = status.maintenanceMessage || status.maintenanceTitle || null;
        return {
          settings: {
            isUnderConstruction: Boolean(status.maintenanceEnabled),
            constructionMessageFr: message,
            constructionMessageEn: message,
          },
        };
      },
      providesTags: ['Settings'],
    }),

    // Liste des pages publiées (localisées).
    getPages: builder.query<{ pages: any[] }, string | void>({
      query: (locale: string = 'fr') => ({
        document: gql`
          query GetPages($locale: String) {
            pages(locale: $locale) {
              slug
              title
              isHome
            }
          }
        `,
        variables: { locale },
      }),
      transformResponse: (response: any) => ({ pages: response?.pages ?? [] }),
      providesTags: ['Page'],
    }),

    // Une page par slug (localisée), avec ses blocs et images.
    getPageBySlug: builder.query<{ page: any }, { slug: string; locale?: string }>({
      query: ({ slug, locale = 'fr' }: { slug: string; locale?: string }) => ({
        document: gql`
          query GetPageBySlug($slug: String!, $locale: String) {
            pages(slug: $slug, locale: $locale) {
              slug
              title
              metaTitle
              metaDescription
              status
              blocks {
                type
                anchorKey
                position
                heading
                subheading
                body
                ctaLabel
                ctaUrl
                images {
                  url
                  role
                  alt
                  caption
                }
              }
            }
          }
        `,
        variables: { slug, locale },
      }),
      // "pages(slug:)" renvoie une liste ; on expose la première page.
      transformResponse: (response: any) => ({ page: response?.pages?.[0] ?? null }),
      providesTags: (result: any, error: any, arg: any) => [
        { type: 'Page', id: typeof arg === 'string' ? arg : arg?.slug },
      ],
    }),
  }),
});

// Export hooks for usage in components
export const {
  useGetSettingsQuery,
  useGetPagesQuery,
  useGetPageBySlugQuery,
} = apiSlice;
