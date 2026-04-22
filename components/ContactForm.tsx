'use client';

import { useState } from 'react';
import { type Locale } from '@/lib/i18n';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormProps {
  lang: Locale;
}

export default function ContactForm({ lang }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulation d'envoi vers contact@bythiah.org
      // Remplacez l'URL par votre endpoint d'API réel
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, to: 'contact@bythiah.org' }),
      });

      // Simulation pour la démo si vous n'avez pas encore d'API :
      await new Promise(resolve => setTimeout(resolve, 1500));

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
      <div className="relative">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
              <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold text-accent">
                  {lang === 'fr' ? 'Message envoyé !' : 'Message Sent!'}
                </h3>
                <p className="text-accent/60 max-w-xs">
                  {lang === 'fr'
                      ? "Merci de nous avoir contactés. Nous reviendrons vers vous très prochainement."
                      : "Thank you for reaching out. We will get back to you shortly."}
                </p>
              </motion.div>
          ) : (
              <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-accent uppercase tracking-wider ml-1">
                      {lang === 'fr' ? 'Nom complet' : 'Full Name'}
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-5 py-4 bg-secondary/20 border-2 border-transparent rounded-2xl focus:border-primary focus:bg-white focus:outline-none transition-all placeholder:text-accent/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-accent uppercase tracking-wider ml-1">
                      Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 bg-secondary/20 border-2 border-transparent rounded-2xl focus:border-primary focus:bg-white focus:outline-none transition-all placeholder:text-accent/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-accent uppercase tracking-wider ml-1">
                    {lang === 'fr' ? 'Sujet' : 'Subject'}
                  </label>
                  <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder={lang === 'fr' ? 'Comment pouvons-nous vous aider ?' : 'How can we help you?'}
                      className="w-full px-5 py-4 bg-secondary/20 border-2 border-transparent rounded-2xl focus:border-primary focus:bg-white focus:outline-none transition-all placeholder:text-accent/30"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-accent uppercase tracking-wider ml-1">
                    Message
                  </label>
                  <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder={lang === 'fr' ? 'Votre message ici...' : 'Your message here...'}
                      className="w-full px-5 py-4 bg-secondary/20 border-2 border-transparent rounded-2xl focus:border-primary focus:bg-white focus:outline-none transition-all resize-none placeholder:text-accent/30"
                  />
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group relative w-full bg-primary hover:bg-accent text-white font-bold py-5 px-8 rounded-2xl transition-all flex items-center justify-center gap-3 overflow-hidden shadow-lg shadow-primary/20 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                      <Loader2 className="animate-spin" size={24} />
                  ) : (
                      <>
                        <span className="relative z-10">{lang === 'fr' ? 'Envoyer le message' : 'Send Message'}</span>
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                      </>
                  )}
                </button>

                {status === 'error' && (
                    <p className="text-red-500 text-center text-sm font-medium">
                      {lang === 'fr' ? 'Une erreur est survenue. Veuillez réessayer.' : 'An error occurred. Please try again.'}
                    </p>
                )}
              </motion.form>
          )}
        </AnimatePresence>
      </div>
  );
}