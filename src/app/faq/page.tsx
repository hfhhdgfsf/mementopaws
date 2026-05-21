'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { faqs } from '@/lib/data';

const categoryLabels: Record<string, string> = {
  products: 'Products & Craft',
  ordering: 'Ordering',
  shipping: 'Shipping & Delivery',
  custom: 'Custom Orders',
  general: 'General',
};

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  const categories = ['all', ...Array.from(new Set(faqs.map((f) => f.category)))];

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-36">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our process, products, and how we honor the memory of your companion."
        />

        {/* Category filter */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-sans text-sm tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-walnut-500 text-ivory-50 shadow-soft'
                    : 'bg-ivory-200 text-charcoal-500 hover:bg-ivory-300'
                }`}
              >
                {cat === 'all' ? 'All' : categoryLabels[cat] || cat}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* FAQ List */}
        <div className="mt-16 space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                id={faq.category}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full text-left group"
                >
                  <div className="flex items-start justify-between gap-4 py-5 border-b border-ivory-200 hover:border-walnut-300/30 transition-colors">
                    <div>
                      <span className="block font-sans text-[10px] tracking-wider uppercase text-walnut-400 mb-1.5">
                        {categoryLabels[faq.category]}
                      </span>
                      <h3 className="font-sans font-medium text-charcoal-600 group-hover:text-walnut-600 transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.span
                      animate={{ rotate: openId === faq.id ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-1 flex-shrink-0 text-walnut-400"
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
          </AnimatePresence>
        </div>

        {/* Empty state when filtering */}
        {filteredFaqs.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 font-serif text-lg text-walnut-400"
          >
            No questions in this category.
          </motion.p>
        )}

        {/* Still have questions */}
        <ScrollReveal delay={0.6}>
          <div className="mt-24 text-center py-12 px-8 rounded-3xl bg-ivory-50 border border-ivory-200">
            <h3 className="font-serif text-2xl text-walnut-600 mb-4">Still have questions?</h3>
            <p className="font-sans text-sm text-charcoal-400 mb-8 max-w-md mx-auto">
              We would love to hear from you. Reach out and we will respond within 24 hours.
            </p>
            <motion.a
              href="/contact/"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-walnut-500 text-ivory-50 font-sans text-sm font-medium tracking-wide shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              Contact Us
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
