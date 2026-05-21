'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  alignment = 'center',
  theme = 'light',
  className = '',
}: SectionHeadingProps) {
  const textColor = theme === 'dark' ? 'text-ivory-100' : 'text-charcoal-700';
  const subtitleColor = theme === 'dark' ? 'text-ivory-300' : 'text-charcoal-400';
  const lineColor = theme === 'dark' ? 'bg-ivory-400/30' : 'bg-walnut-300/50';
  const alignmentClass = alignment === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`flex flex-col gap-4 ${alignmentClass} ${className}`}
    >
      {eyebrow && (
        <span className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-walnut-400">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-display-sm md:text-display-md text-balance ${textColor}`}
      >
        {title}
      </h2>
      <div className={`w-16 h-px ${lineColor}`} />
      {subtitle && (
        <p className={`font-sans text-base md:text-lg leading-relaxed max-w-xl ${subtitleColor} ${alignment === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
