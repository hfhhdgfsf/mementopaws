'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { teamMembers, brandStory } from '@/lib/data';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-36">
      {/* Hero Section */}
      <section className="container-narrow text-center mb-24">
        <ScrollReveal>
          <span className="block font-sans text-xs font-medium tracking-[0.25em] uppercase text-walnut-400 mb-8">
            {brandStory.title}
          </span>
          <h1 className="font-serif text-display-sm md:text-display-md text-walnut-600 text-balance mb-8">
            {brandStory.subtitle}
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="w-16 h-px bg-walnut-300/50 mx-auto mb-10" />
        </ScrollReveal>
        <div className="space-y-8 max-w-2xl mx-auto">
          {brandStory.paragraphs.map((paragraph, index) => (
            <ScrollReveal key={index} delay={0.2 + index * 0.15}>
              <p className="font-sans text-base md:text-lg leading-relaxed text-charcoal-500 text-balance">
                {paragraph}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section id="craftsmanship" className="py-24 bg-ivory-50">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Our Studio"
            title="The Art of Slow Making"
            subtitle="In a world that moves fast, we choose to move with intention. Each piece is a dialogue between maker and material — a conversation that cannot be rushed."
          />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Ceramics',
                description: 'Our clay is sourced from Kyoto, shaped by hand, and fired three times. Each glaze is mixed from natural mineral pigments — no two pieces emerge the same.',
                number: '01',
              },
              {
                title: 'Woodworking',
                description: 'Solid walnut blocks, selected for grain and warmth, are carved with traditional chisels and finished with organic beeswax applied by hand.',
                number: '02',
              },
              {
                title: 'Fiber Art',
                description: 'Using the ancient technique of needle felting, our fiber artists sculpt merino wool into lifelike portraits — each requiring 40-60 hours of focused work.',
                number: '03',
              },
            ].map((craft, index) => (
              <ScrollReveal key={craft.number} delay={index * 0.12}>
                <div className="p-8 rounded-3xl bg-ivory-100 border border-ivory-200">
                  <span className="font-serif text-3xl text-walnut-200">{craft.number}</span>
                  <h3 className="font-serif text-xl text-walnut-600 mt-4 mb-3">{craft.title}</h3>
                  <p className="font-sans text-sm text-charcoal-400 leading-relaxed">{craft.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 md:py-36">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Artisans"
            title="The Hands Behind the Work"
            subtitle="Each piece bears the invisible signature of the hands that made it — a ceramicist, a woodworker, a fiber artist, each bringing their tradition to your memorial."
          />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center group"
              >
                {/* Avatar Placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-ivory-200 flex items-center justify-center overflow-hidden border border-ivory-300 group-hover:border-walnut-300/40 transition-all duration-500">
                  <span className="font-serif text-3xl text-walnut-300">
                    {member.name.split(' ')[0][0]}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-walnut-600 mb-1">{member.name}</h3>
                <p className="font-sans text-xs tracking-wider uppercase text-walnut-400 mb-4">{member.role}</p>
                <p className="font-sans text-sm text-charcoal-400 leading-relaxed max-w-sm mx-auto">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-ivory-100">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl text-walnut-600 mb-6">
              In every piece, a promise.
            </h2>
            <p className="font-sans text-base text-charcoal-400 max-w-lg mx-auto leading-relaxed">
              We promise that your memorial will be made by hands that understand — that the materials will be honest, the process patient, and the result a worthy vessel for your love.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '100%', label: 'Handcrafted' },
              { value: '12+', label: 'Process Steps' },
              { value: '3', label: 'Artisan Disciplines' },
              { value: '∞', label: 'Made with Love' },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div>
                  <p className="font-serif text-3xl md:text-4xl text-walnut-500 mb-2">{stat.value}</p>
                  <p className="font-sans text-xs tracking-wider uppercase text-walnut-400">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
