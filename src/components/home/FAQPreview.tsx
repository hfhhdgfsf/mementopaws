'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { faqs } from '@/lib/data';

export default function FAQPreview() {
  const [openId, setOpenId] = useState<string | null>(null);

  const previewFaqs = faqs.slice(0, 4);

  return (
    <section className="py-24 md:py-36 bg-ivory-50">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions & Answers"
          subtitle="Everything you need to know about our process, products, and how we honor your companion."
        />

        <div className="mt-16 space-y-3">
          {previewFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full text-left group"
              >
                <div className="flex items-start justify-between gap-4 py-5 border-b border-ivory-200 hover:border-walnut-300/30 transition-colors">
                  <h3 className="font-sans font-medium text-charcoal-600 group-hover:text-walnut-600 transition-colors">
                    {faq.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: openId === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-0.5 flex-shrink-0 text-walnut-400"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="8" y1="2" x2="8" y2="14" />
                      <line x1="2" y1="8" x2="14" y2="8" />
                    </svg>
                  </motion.span>
                </div>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="py-5 font-sans text-sm text-charcoal-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button href="/faq/" variant="ghost" size="md">
            View All Questions &rarr;
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
