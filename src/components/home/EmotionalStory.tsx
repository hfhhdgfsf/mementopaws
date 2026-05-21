'use client';

import { motion } from 'framer-motion';
import { brandStory } from '@/lib/data';

export default function EmotionalStory() {
  return (
    <section className="py-24 md:py-36 bg-ivory-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-candlelight-300/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-walnut-200/10 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container-narrow relative">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="block font-sans text-xs font-medium tracking-[0.25em] uppercase text-walnut-400 mb-6">
            {brandStory.title}
          </span>
          <h2 className="font-serif text-display-sm md:text-display-md text-walnut-600 text-balance leading-snug">
            &ldquo;{brandStory.subtitle}&rdquo;
          </h2>
        </motion.div>

        {/* Story paragraphs */}
        <div className="space-y-12">
          {brandStory.paragraphs.map((paragraph, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
            >
              <p className="font-serif text-lg md:text-xl leading-relaxed text-charcoal-500 text-balance">
                {paragraph}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing sentiment */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center font-sans text-sm text-walnut-400 italic tracking-wide"
        >
          Every piece we create carries a simple truth: love does not end with goodbye.
        </motion.p>
      </div>
    </section>
  );
}
