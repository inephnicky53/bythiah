'use client';

import { useState } from 'react';
import { type Locale } from '@/lib/i18n';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactFormProps {
  lang: Locale;
}

export default function ContactForm({ lang }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = lang === 'fr' ? [
    { icon: Mail, label: 'Email', value: 'contact@bythiah.org', href: 'mailto:contact@bythiah.org' },
    { icon: Phone, label: 'Téléphone', value: '+243 808 511 200', href: 'tel:+243808511200' },
    { icon: MapPin, label: 'Adresse', value: '1022, Avenue des Forces Armées, B-16, Gombe – Kinshasa, RDC', href: '#' },
  ] : [
    { icon: Mail, label: 'Email', value: 'contact@bythiah.org', href: 'mailto:contact@bythiah.org' },
    { icon: Phone, label: 'Phone', value: '+243 808 511 200', href: 'tel:+243808511200' },
    { icon: MapPin, label: 'Address', value: '1022, Avenue des Forces Armées, B-16, Gombe – Kinshasa, DRC', href: '#' },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
      {/* Formulaire */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          {lang === 'fr' ? 'Envoyez-nous un message' : 'Send us a message'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm sm:text-base font-medium text-foreground mb-2">
              {lang === 'fr' ? 'Nom' : 'Name'}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={lang === 'fr' ? 'Votre nom' : 'Your name'}
            />
          </div>
          <div>
            <label className="block text-sm sm:text-base font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="votre@email.com"
            />
          </div>
          <div>
            <label className="block text-sm sm:text-base font-medium text-foreground mb-2">
              {lang === 'fr' ? 'Sujet' : 'Subject'}
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={lang === 'fr' ? 'Sujet du message' : 'Message subject'}
            />
          </div>
          <div>
            <label className="block text-sm sm:text-base font-medium text-foreground mb-2">
              {lang === 'fr' ? 'Message' : 'Message'}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={lang === 'fr' ? 'Votre message...' : 'Your message...'}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 px-4 rounded-lg transition-colors"
          >
            {lang === 'fr' ? 'Envoyer' : 'Send'}
          </button>
          {submitted && (
            <p className="text-green-600 text-sm">
              {lang === 'fr' ? 'Message envoyé avec succès!' : 'Message sent successfully!'}
            </p>
          )}
        </form>
      </div>

      {/* Informations de contact */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          {lang === 'fr' ? 'Nos coordonnées' : 'Contact Information'}
        </h2>
        <div className="space-y-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.href}
                className="flex items-start space-x-4 p-4 sm:p-5 rounded-lg hover:bg-accent/10 transition-colors"
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-foreground">{info.label}</h3>
                  <p className="text-sm sm:text-base text-foreground/70">{info.value}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

