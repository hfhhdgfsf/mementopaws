'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const steps = [
  {
    step: '01',
    title: 'Choose Your Memorial',
    description: 'Browse our collection of handcrafted urns, wool felt replicas, candles, and gift boxes. Each piece is designed to honor a different facet of remembrance.',
  },
  {
    step: '02',
    title: 'Share Your Story',
    description: 'Tell us about your companion — their name, their personality, the moments you hold closest. For custom pieces, upload your favorite photographs.',
  },
  {
    step: '03',
    title: 'We Craft with Care',
    description: 'Our artisans begin the slow, intentional process of creation. You will receive progress updates as your piece takes shape in our studio.',
  },
  {
    step: '04',
    title: 'Receive & Remember',
    description: 'Your completed piece arrives in elegant, protective packaging — ready to become part of your quiet ritual of love and remembrance.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-36 bg-ivory-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-candlelight-300/20 -translate-y-1/2 translate-x-1/3" />

      <div className="container-wide relative">
        <SectionHeading
          eyebrow="The Process"
          title="How It Works"
          subtitle="A thoughtful journey from selection to remembrance, guided by care at every step."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative"
            >
              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-16 w-full h-px bg-walnut-300/20">
                  <motion.div
                    className="h-full bg-walnut-400/40"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.15 + 0.3 }}
                  />
                </div>
              )}

              <div className="flex flex-col items-center text-center">
                {/* Step number */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-24 h-24 rounded-full bg-ivory-200 flex items-center justify-center mb-6 shadow-soft relative z-10"
                >
                  <span className="font-serif text-3xl text-walnut-400">{step.step}</span>
                </motion.div>

                <h3 className="font-serif text-xl text-walnut-600 mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-charcoal-400 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button href="/collection/" variant="outline" size="lg">
            Begin Your Memorial
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
