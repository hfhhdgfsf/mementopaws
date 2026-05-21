'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';

/* ── Floating light mote ── */
function LightMotes() {
  const motes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    top: `${10 + Math.random() * 80}%`,
    size: 2 + Math.random() * 4,
    duration: 6 + Math.random() * 10,
    delay: Math.random() * 8,
    opacity: 0.15 + Math.random() * 0.3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {motes.map((m) => (
        <motion.div
          key={m.id}
          className="absolute rounded-full bg-candlelight-300"
          style={{
            width: m.size,
            height: m.size,
            left: m.left,
            top: m.top,
          }}
          animate={{
            y: [0, -20 - Math.random() * 40],
            opacity: [m.opacity, 0, m.opacity],
          }}
          transition={{
            duration: m.duration,
            delay: m.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

/* ── Candle flame SVG ── */
function CandleFlame() {
  return (
    <motion.div
      className="absolute right-[8%] top-[18%] w-20 h-28 md:w-28 md:h-36 opacity-50 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.45 }}
      transition={{ duration: 2, delay: 1.2 }}
    >
      <motion.svg
        viewBox="0 0 60 90"
        fill="none"
        className="w-full h-full"
        animate={{ scaleY: [1, 1.04, 0.98, 1.02, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Outer glow */}
        <motion.ellipse
          cx="30" cy="42" rx="22" ry="38"
          fill="url(#flameGlowOuter)"
          animate={{ rx: [22, 24, 20, 23, 22], ry: [38, 40, 36, 39, 38] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Inner glow */}
        <ellipse cx="30" cy="42" rx="14" ry="28" fill="url(#flameGlowInner)" />
        {/* Core flame */}
        <motion.path
          d="M30 75C18 55 14 38 16 25C18 12 26 6 30 3C34 6 42 12 44 25C46 38 42 55 30 75Z"
          fill="url(#flameCore)"
          animate={{
            d: [
              'M30 75C18 55 14 38 16 25C18 12 26 6 30 3C34 6 42 12 44 25C46 38 42 55 30 75Z',
              'M30 75C19 56 15 39 17 26C19 13 27 7 30 4C33 7 41 13 43 26C45 39 41 56 30 75Z',
              'M30 75C17 54 13 37 15 24C17 11 25 5 30 2C35 5 43 11 45 24C47 37 43 54 30 75Z',
              'M30 75C19 56 15 39 17 26C19 13 27 7 30 4C33 7 41 13 43 26C45 39 41 56 30 75Z',
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Inner bright core */}
        <motion.ellipse
          cx="30" cy="35" rx="6" ry="14"
          fill="url(#flameBright)"
          animate={{ ry: [14, 16, 13, 15, 14], opacity: [0.9, 1, 0.85, 0.95, 0.9] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <defs>
          <radialGradient id="flameGlowOuter" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#F5E6D3" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#ECD5B8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ECD5B8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="flameGlowInner" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#F5E6D3" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D4B896" stopOpacity="0.1" />
          </radialGradient>
          <radialGradient id="flameCore" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#D4B896" />
            <stop offset="50%" stopColor="#E8C4C4" />
            <stop offset="100%" stopColor="#BF9A6A" />
          </radialGradient>
          <radialGradient id="flameBright" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#FFFDF8" />
            <stop offset="100%" stopColor="#F5E6D3" />
          </radialGradient>
        </defs>
      </motion.svg>
    </motion.div>
  );
}

/* ── Product Silhouette (abstract urn shape) ── */
function ProductSilhouette() {
  return (
    <motion.div
      className="absolute right-0 bottom-0 w-[45%] h-[75%] pointer-events-none z-0 hidden lg:block"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.4, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.svg
        viewBox="0 0 400 600"
        fill="none"
        className="w-full h-full"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Abstract urn silhouette */}
        <motion.path
          d="M200 80C130 80 80 160 80 260C80 340 110 400 160 450C180 470 190 500 190 530L210 530C210 500 220 470 240 450C290 400 320 340 320 260C320 160 270 80 200 80Z"
          fill="url(#urnGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        {/* Inner subtle highlight */}
        <motion.path
          d="M200 100C145 100 105 170 105 260C105 330 130 380 170 425"
          stroke="url(#urnHighlight)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 0.8, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="urnGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E8D5C4" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#D4BFA8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#E8D5C4" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="urnHighlight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FDF8F0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FDF8F0" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </motion.div>
  );
}

/* ── Main Hero ── */
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 120]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-ivory-100"
    >
      {/* ── Layer 1: Deep warm background ── */}
      <div className="absolute inset-0 bg-ivory-100" />

      {/* ── Layer 2: Main warm radial glow (candlelight effect) ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse 60% 55% at 50% 45%, rgba(245,230,211,0.7) 0%, rgba(236,213,184,0.3) 35%, rgba(253,248,240,0.05) 65%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* ── Layer 3: Secondary warm pinpoint glow (upper left) ── */}
      <div
        className="absolute top-[10%] left-[15%] w-[500px] h-[400px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,249,230,0.4) 0%, transparent 70%)',
        }}
      />

      {/* ── Layer 4: Ambient shadow vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(44,44,44,0.04) 70%, rgba(44,44,44,0.08) 100%)',
        }}
      />

      {/* ── Layer 5: Noise texture grain ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      {/* ── Floating light motes ── */}
      <LightMotes />

      {/* ── Candle Flame ── */}
      <CandleFlame />

      {/* ── Product Silhouette ── */}
      <ProductSilhouette />

      {/* ── Content ── */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="container-wide relative z-10 w-full"
      >
        <div className="max-w-2xl lg:max-w-[55%]">
          {/* Eyebrow — brand whisper */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="flex items-center gap-6 mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="h-px bg-walnut-300/50"
            />
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-walnut-400/70"
            >
              MementoPaws
            </motion.span>
          </motion.div>

          {/* Headline */}
          <h1 className="mb-10">
            {/* Line 1 */}
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block font-serif text-display-sm md:text-display-lg lg:text-[4.5rem] lg:leading-[1.06] text-charcoal-800 text-balance"
            >
              Memory,
            </motion.span>
            {/* Line 2 */}
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block font-serif text-display-sm md:text-display-lg lg:text-[4.5rem] lg:leading-[1.06] text-charcoal-800 text-balance"
            >
              made tangible<span className="text-walnut-400">.</span>
            </motion.span>
          </h1>

          {/* Body copy */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-sans text-base md:text-lg text-charcoal-400 leading-relaxed max-w-md mb-14 text-balance"
          >
            Handcrafted memorial pieces for the companions who changed us.
            Urns, wool felt portraits, and quiet rituals of remembrance —
            each created by artisans who understand.
          </motion.p>

          {/* CTA — understated, premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.25 }}
          >
            <Link
              href="/collection/"
              className="group inline-flex items-center gap-4 font-sans text-sm font-medium tracking-wide text-walnut-600 hover:text-walnut-500 transition-colors duration-500"
            >
              <span className="relative">
                View the Collection
                <motion.span
                  className="absolute bottom-0 left-0 h-px bg-walnut-400/50"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4 }}
                />
              </span>
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-walnut-400 group-hover:text-walnut-500 transition-colors"
                >
                  <path
                    d="M4 10H16M16 10L11 5M16 10L11 15"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Bottom decorative rule ── */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 1.6, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 right-0"
      >
        <div className="container-wide">
          <div className="h-px bg-gradient-to-r from-transparent via-walnut-300/15 to-transparent" />
        </div>
      </motion.div>

      {/* ── Scroll whisper (ultra-minimal) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            className="text-walnut-300/50"
          >
            <rect
              x="1"
              y="1"
              width="14"
              height="22"
              rx="7"
              stroke="currentColor"
              strokeWidth="1"
            />
            <motion.circle
              cx="8"
              cy="8"
              r="2"
              fill="currentColor"
              animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
