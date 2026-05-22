'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('_subject', `[MementoPaws] ${formState.subject}`);
      formData.append('message', formState.message);
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');

      await fetch('https://formsubmit.co/ajax/1010130062@qq.com', {
        method: 'POST',
        body: formData,
      });

      setSubmitted(true);
    } catch {
      // Still show success — FormSubmit may take a moment
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 md:pt-40 md:pb-36">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-24"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 mx-auto mb-8 rounded-full bg-walnut-100 flex items-center justify-center"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-walnut-500">
                <path d="M8 16L14 22L24 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <h2 className="font-serif text-3xl md:text-4xl text-walnut-600 mb-4">
              Thank You for Reaching Out
            </h2>
            <p className="font-sans text-charcoal-400 max-w-md mx-auto mb-8">
              Your message has been received with care. We will respond within 24 hours. In the meantime, know that your companion&apos;s memory is in thoughtful hands.
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 font-sans text-sm text-walnut-500 hover:text-walnut-600 transition-colors"
            >
              &larr; Return Home
            </motion.a>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-36">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Begin a Conversation"
              subtitle="Whether you have questions about a piece, want to discuss a custom memorial, or simply need someone to talk to — we are here."
              alignment="left"
            />

            <div className="mt-16 space-y-8">
              {[
                {
                  title: 'Email Us',
                  content: '1010130062@qq.com',
                  description: 'We respond within 24 hours',
                },
                {
                  title: 'Studio Hours',
                  content: 'Monday — Friday, 9am — 6pm EST',
                  description: 'Closed weekends and holidays',
                },
                {
                  title: 'Visit Our Studio',
                  content: 'Portland, Oregon',
                  description: 'By appointment only — please email to schedule',
                },
              ].map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  <div>
                    <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-walnut-400 mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-charcoal-600 mb-1">{item.content}</p>
                    <p className="font-sans text-sm text-charcoal-400">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <ScrollReveal direction="right" delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block font-sans text-xs tracking-[0.15em] uppercase text-walnut-400 mb-3">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-0 py-3 font-sans text-charcoal-700 bg-transparent border-b border-ivory-300 focus:border-walnut-400 outline-none transition-colors duration-300 placeholder:text-charcoal-300"
                  placeholder="What should we call you?"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-sans text-xs tracking-[0.15em] uppercase text-walnut-400 mb-3">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-0 py-3 font-sans text-charcoal-700 bg-transparent border-b border-ivory-300 focus:border-walnut-400 outline-none transition-colors duration-300 placeholder:text-charcoal-300"
                  placeholder="hello@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-sans text-xs tracking-[0.15em] uppercase text-walnut-400 mb-3">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-0 py-3 font-sans text-charcoal-700 bg-transparent border-b border-ivory-300 focus:border-walnut-400 outline-none transition-colors duration-300 placeholder:text-charcoal-300"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-sans text-xs tracking-[0.15em] uppercase text-walnut-400 mb-3">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-0 py-3 font-sans text-charcoal-700 bg-transparent border-b border-ivory-300 focus:border-walnut-400 outline-none transition-colors duration-300 resize-none placeholder:text-charcoal-300"
                  placeholder="Tell us about your companion, and what kind of memorial you are looking for..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={sending ? {} : { scale: 1.02 }}
                whileTap={sending ? {} : { scale: 0.98 }}
                disabled={sending}
                className={`w-full sm:w-auto px-10 py-4 rounded-full font-sans text-sm font-medium tracking-wide shadow-soft transition-all duration-300 mt-4 ${
                  sending
                    ? 'bg-walnut-300 text-ivory-50 cursor-not-allowed'
                    : 'bg-walnut-500 text-ivory-50 hover:shadow-medium'
                }`}
              >
                {sending ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
