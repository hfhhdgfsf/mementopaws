'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { categories } from '@/lib/data';

export default function FeaturedCollections() {
  return (
    <section className="py-24 md:py-36 bg-ivory-100">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our Craft"
          title="Memorial Collections"
          subtitle="Each collection is a different expression of remembrance — find the one that speaks to your heart."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/collection/?category=${category.id}`}
                className="group block relative overflow-hidden rounded-3xl aspect-[4/5] bg-ivory-200"
              >
                {/* Placeholder image */}
                <div className="absolute inset-0 bg-gradient-to-br from-ivory-300 via-beige-200 to-walnut-200 opacity-60 group-hover:opacity-50 transition-opacity duration-700" />

                {/* Decorative circle */}
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-ivory-400/20 group-hover:scale-150 transition-transform duration-1000" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                  <div className="transform group-hover:-translate-y-1 transition-transform duration-500">
                    <h3 className="font-serif text-2xl md:text-3xl text-walnut-700 mb-3">
                      {category.name}
                    </h3>
                    <p className="font-sans text-sm text-charcoal-500 leading-relaxed mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-2 font-sans text-xs font-medium tracking-wider uppercase text-walnut-500 group-hover:gap-3 transition-all duration-300">
                      Explore
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-walnut-300/20 group-hover:ring-walnut-300/40 transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
