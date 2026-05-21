'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const values = [
  {
    title: 'Kintsugi Philosophy',
    description: 'Inspired by the Japanese art of golden repair, we believe the cracks of loss are not flaws to hide but places where light enters — and beauty grows.',
    number: '01',
  },
  {
    title: 'Artisan Heritage',
    description: 'Each piece is handcrafted by artists trained in traditional techniques — ceramics from Kyoto, woodworking from Tuscany, fiber art from ancient needle-felting traditions.',
    number: '02',
  },
  {
    title: 'Slow Creation',
    description: 'We reject mass production. Every urn, every felt portrait, every card takes the time it needs — because what we are making deserves patience.',
    number: '03',
  },
  {
    title: 'Honest Materials',
    description: 'Ceramic clay, solid walnut, merino wool, cotton paper, soy wax — materials chosen not for convenience but for their integrity, warmth, and ability to age with grace.',
    number: '04',
  },
];

export default function BrandPhilosophy() {
  return (
    <section className="py-24 md:py-36 bg-ivory-50">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our Philosophy"
          title="The Art of Honoring Love"
          subtitle="Rooted in the belief that the objects we create in remembrance should be as beautiful as the love they honor."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group"
            >
              <div className="relative p-8 md:p-10 rounded-3xl bg-ivory-100 border border-ivory-200 hover:border-walnut-300/30 transition-all duration-500 hover:shadow-elegant">
                {/* Number */}
                <span className="font-serif text-4xl text-walnut-200 group-hover:text-walnut-300 transition-colors duration-500">
                  {value.number}
                </span>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-radial-warm pointer-events-none" />

                <h3 className="relative mt-6 font-serif text-xl text-walnut-600 mb-3">
                  {value.title}
                </h3>
                <p className="relative font-sans text-sm text-charcoal-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
