'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials } from '@/lib/data';

export default function MemorialMoments() {
  const [active, setActive] = useState(0);

  const testimonial = testimonials[active];

  return (
    <section className="py-24 md:py-36 bg-ivory-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-candlelight-300/10 to-transparent" />

      <div className="container-wide relative">
        <SectionHeading
          eyebrow="Memorial Moments"
          title="Voices of Remembrance"
          subtitle="Stories from those who have entrusted us with their most precious memories."
        />

        <div className="mt-16 max-w-3xl mx-auto">
          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative bg-ivory-50 rounded-3xl p-10 md:p-14 shadow-elegant border border-ivory-200"
            >
              {/* Quote mark */}
              <svg
                className="text-walnut-300 mb-8 opacity-30"
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="currentColor"
              >
                <path d="M0 32V20C0 14 2 9 6 5S15 0 20 0v6c-3 0-6 1-8 3s-4 4-4 7h8v16H0zm20 0V20c0-6 2-11 6-15s9-5 14-5v6c-3 0-6 1-8 3s-4 4-4 7h8v16H20z" />
              </svg>

              <p className="font-serif text-lg md:text-xl leading-relaxed text-charcoal-600 mb-10 text-balance italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-ivory-200">
                <div>
                  <p className="font-sans font-medium text-charcoal-700">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-sm text-charcoal-400">
                    In memory of {testimonial.petName}, {testimonial.petType} &middot; {testimonial.location}
                  </p>
                </div>
              </div>

              <span className="absolute top-10 right-10 font-sans text-xs tracking-wider uppercase text-walnut-300">
                {testimonial.productName}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                  active === index
                    ? 'bg-walnut-500 w-8'
                    : 'bg-walnut-200 hover:bg-walnut-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
