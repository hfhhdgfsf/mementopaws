'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { getCraftingSteps, generateProductJsonLd } from '@/lib/data';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface ProductDetailClientProps {
  product: Product;
}

/* ── Cinematic Hero Image ── */
function HeroGallery({ product }: { product: Product }) {
  return (
    <section className="relative h-[60vh] md:h-[75vh] min-h-[500px] bg-ivory-200 overflow-hidden">
      {/* Image placeholder with warm gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-ivory-300 via-beige-200 to-walnut-200 opacity-40" />
        {/* Soft radial light */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(245,230,211,0.5) 0%, transparent 70%)',
          }}
        />
        {/* Abstract urn shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg viewBox="0 0 200 280" className="w-48 md:w-64 opacity-20" fill="none">
            <path
              d="M100 20C65 20 40 70 40 130C40 180 55 210 80 230C90 240 95 255 95 270L105 270C105 255 110 240 120 230C145 210 160 180 160 130C160 70 135 20 100 20Z"
              fill="#5C4033"
            />
            <path
              d="M100 20C65 20 40 70 40 130C40 180 55 210 80 230"
              stroke="#5C4033"
              strokeWidth="0.5"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(44,44,44,0.06) 85%, rgba(44,44,44,0.12) 100%)',
        }}
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-end">
        <div className="container-wide pb-10 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {product.isNew && (
              <span className="inline-block font-sans text-[10px] font-medium tracking-[0.2em] uppercase bg-walnut-500/10 text-walnut-600 px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm">
                New Arrival
              </span>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory-100 to-transparent" />
    </section>
  );
}

/* ── Introduction ── */
function Introduction({ product }: { product: Product }) {
  return (
    <section className="py-20 md:py-28 bg-ivory-100">
      <div className="container-narrow">
        <div className="max-w-2xl">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/collection/"
              className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase text-walnut-400 hover:text-walnut-600 transition-colors mb-10"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M7 2L3 6L7 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Collection
            </Link>
          </motion.nav>

          {/* Tagline */}
          <ScrollReveal>
            <p className="font-serif text-lg md:text-xl text-walnut-400 italic mb-6">
              {product.tagline}
            </p>
          </ScrollReveal>

          {/* Product Name */}
          <ScrollReveal delay={0.1}>
            <h1 className="font-serif text-display-sm md:text-display-md lg:text-display-lg text-walnut-700 text-balance mb-8">
              {product.name}
            </h1>
          </ScrollReveal>

          {/* Emotional description */}
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-base md:text-lg text-charcoal-500 leading-relaxed mb-10 text-balance">
              {product.longDescription}
            </p>
          </ScrollReveal>

          {/* Price & badges */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-ivory-200">
              <p className="font-sans text-2xl font-light text-charcoal-700">
                ¥{product.price.toLocaleString()}
              </p>
              <span className="font-sans text-xs text-charcoal-400">
                Handcrafted to order
              </span>
              <span className="font-sans text-xs text-charcoal-400">
                {product.craftingTime}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ── Craftsmanship Journey ── */
function Craftsmanship({ product }: { product: Product }) {
  const craft = getCraftingSteps(product.category);

  return (
    <section className="py-24 md:py-36 bg-ivory-50 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-96 bg-candlelight-300/10 rounded-l-full pointer-events-none" />

      <div className="container-narrow relative">
        <ScrollReveal>
          <span className="block font-sans text-xs font-medium tracking-[0.25em] uppercase text-walnut-400 mb-6">
            The Making
          </span>
          <h2 className="font-serif text-display-sm md:text-display-md text-walnut-600 text-balance mb-8">
            {craft.title}
          </h2>
          <p className="font-sans text-base text-charcoal-400 max-w-lg leading-relaxed mb-20">
            {craft.intro}
          </p>
        </ScrollReveal>

        <div className="space-y-1">
          {craft.steps.map((step, index) => (
            <ScrollReveal key={step.num} delay={index * 0.06} direction="up">
              <div className="group flex gap-6 md:gap-10 py-6 border-b border-ivory-200 hover:border-walnut-300/30 transition-colors duration-500">
                <div className="flex-shrink-0 w-10">
                  <span className="font-serif text-sm text-walnut-300 group-hover:text-walnut-400 transition-colors">
                    {step.num}
                  </span>
                </div>
                <div>
                  <h3 className="font-sans font-medium text-charcoal-600 group-hover:text-walnut-600 transition-colors mb-1.5">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-charcoal-400 leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Memorial Meaning ── */
function MemorialMeaning() {
  return (
    <section className="py-24 md:py-36 bg-ivory-100">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="block font-sans text-xs font-medium tracking-[0.25em] uppercase text-walnut-400 mb-8">
              The Meaning
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-display-sm md:text-display-md text-walnut-600 mb-12 text-balance">
              A vessel is just a vessel — until it holds a memory.
            </h2>
          </ScrollReveal>

          <div className="space-y-8 text-left">
            <ScrollReveal delay={0.2}>
              <p className="font-sans text-base md:text-lg text-charcoal-500 leading-relaxed">
                In the Japanese tradition of <span className="text-walnut-600 italic">kintsugi</span>, broken pottery is repaired with lacquer dusted with gold. The cracks — the very places where the piece was shattered — become its most beautiful feature. They are not hidden. They are honored.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="font-sans text-base md:text-lg text-charcoal-500 leading-relaxed">
                This urn carries that philosophy. The hand-painted botanical motifs are not decoration for its own sake — they are a quiet acknowledgment that beauty persists even through loss. The gold leaf accents catch the light in the same way a memory catches you unexpectedly, bringing warmth to an ordinary moment.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="font-sans text-base md:text-lg text-charcoal-500 leading-relaxed">
                When you hold this urn, you are not holding an object. You are holding a promise — that the love you shared with your companion will continue to have a place in your home, your hands, your daily rituals of remembrance.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Personalization ── */
function Personalization({ product }: { product: Product }) {
  return (
    <section className="py-24 md:py-36 bg-ivory-50">
      <div className="container-narrow">
        <ScrollReveal>
          <span className="block font-sans text-xs font-medium tracking-[0.25em] uppercase text-walnut-400 mb-6">
            Make It Yours
          </span>
          <h2 className="font-serif text-display-sm md:text-display-md text-walnut-600 mb-8">
            Personalization
          </h2>
          <p className="font-sans text-base text-charcoal-400 max-w-lg leading-relaxed mb-16">
            Every urn can be engraved with your companion&apos;s name, a meaningful date, or a short sentiment — transforming it from a beautiful object into an irreplaceable piece of your story.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'Name Engraving',
              desc: 'Your companion\'s name, hand-engraved on the base or lid in a classic serif typeface.',
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <rect x="3" y="4" width="18" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 2V6M16 2V6M3 10H21" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'Memorial Date',
              desc: 'Include a significant date — the day you met, or the day you said goodbye.',
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M21 15C21 15 18 18 12 18C6 18 3 15 3 15M12 3V7M12 13V13.01M17 7L15.5 8.5M7 7L8.5 8.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'Short Sentiment',
              desc: 'A phrase of up to 30 characters — "Forever in our hearts," or anything that speaks to you.',
            },
          ].map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 0.12}>
              <div className="p-8 rounded-3xl bg-ivory-100 border border-ivory-200 hover:border-walnut-300/30 transition-all duration-500 h-full">
                <div className="text-walnut-400 mb-5">{item.icon}</div>
                <h3 className="font-sans font-medium text-charcoal-600 mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-charcoal-400 leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Photo Upload ── */
function PhotoUpload({ product }: { product: Product }) {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    const arr = Array.from(fileList);
    if (arr.length > 5) {
      setErrorMsg('Up to 5 photos at a time.');
      return;
    }
    setErrorMsg('');
    setFiles(arr);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0 || !email) return;
    setSending(true);
    setErrorMsg('');

    try {
      const fd = new FormData();
      fd.append('email', email);
      fd.append('_subject', `[MementoPaws] Photo upload for ${product.name}`);
      fd.append('message', `Customer: ${email}\nProduct: ${product.name}\nPhotos: ${files.length} file(s)`);
      fd.append('_captcha', 'false');
      fd.append('_template', 'table');
      files.forEach((f) => fd.append('attachment', f));

      const res = await fetch('https://formsubmit.co/ajax/1010130062@qq.com', {
        method: 'POST',
        body: fd,
      });

      if (!res.ok) throw new Error('Upload failed');
      setSent(true);
    } catch {
      setErrorMsg('Upload failed. Please try again or email photos directly.');
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <section className="py-24 md:py-36 bg-ivory-100">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="w-16 h-16 mx-auto mb-8 rounded-full bg-walnut-100 flex items-center justify-center"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-walnut-500">
              <path d="M7 14L12 19L21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          <h2 className="font-serif text-2xl text-walnut-600 mb-4">Photographs Received</h2>
          <p className="font-sans text-sm text-charcoal-400 max-w-md mx-auto">
            We will study every photograph with care. Progress updates will be sent to {email}.
          </p>
        </div>
      </section>
    );
  }

  const canSubmit = files.length > 0 && email.trim() !== '' && !sending;

  return (
    <section className="py-24 md:py-36 bg-ivory-100 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-candlelight-300/10 pointer-events-none" />

      <div className="container-narrow relative">
        <form onSubmit={handleSubmit}>
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <span className="block font-sans text-xs font-medium tracking-[0.25em] uppercase text-walnut-400 mb-6">
                Share Their Memory
              </span>
              <h2 className="font-serif text-display-sm md:text-3xl text-walnut-600 mb-6">
                Upload a Photograph
              </h2>
              <p className="font-sans text-base text-charcoal-400 leading-relaxed mb-8">
                Send us photographs of your companion. We will study each image — the tilt of their ears, the pattern of their coat, the light in their eyes.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="max-w-sm mx-auto mb-8">
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-0 py-3 font-sans text-charcoal-700 bg-transparent border-b border-ivory-300 focus:border-walnut-400 outline-none transition-colors text-center placeholder:text-charcoal-300"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <input
                type="file"
                name="attachment"
                multiple
                accept="image/jpeg,image/png"
                className="hidden"
                id="photo-file-input"
                onChange={(e) => handleFiles(e.target.files)}
              />
              <label
                htmlFor="photo-file-input"
                className={`block relative rounded-3xl border-2 border-dashed p-10 md:p-14 transition-all duration-500 cursor-pointer ${
                  dragActive
                    ? 'border-walnut-400 bg-walnut-50/50'
                    : 'border-ivory-300 hover:border-walnut-300/50 bg-ivory-50'
                }`}
                onDragEnter={() => setDragActive(true)}
                onDragLeave={() => setDragActive(false)}
                onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                onDrop={(e) => { e.preventDefault(); setDragActive(false); handleFiles(e.dataTransfer.files); }}
              >
                <motion.div animate={{ y: dragActive ? -4 : 0 }}>
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-ivory-200 flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-walnut-400">
                      <path d="M21 15V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15M17 8L12 3M12 3L7 8M12 3V15" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {files.length > 0 ? (
                    <div>
                      <p className="font-sans text-sm text-walnut-600 mb-1">
                        {files.length} photo{files.length > 1 ? 's' : ''} selected
                      </p>
                      <p className="font-sans text-xs text-walnut-400 max-w-sm mx-auto truncate">
                        {files.map((f) => f.name).join(', ')}
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className="font-sans text-sm text-charcoal-500 mb-1">
                        Drag photos here, or click to browse
                      </p>
                      <p className="font-sans text-xs text-charcoal-300">
                        JPG or PNG. Up to 5 photos at a time.
                      </p>
                    </>
                  )}
                </motion.div>
              </label>
            </ScrollReveal>

            {errorMsg && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 font-sans text-sm text-red-400">
                {errorMsg}
              </motion.p>
            )}

            <ScrollReveal delay={0.25}>
              <motion.button
                type="submit"
                disabled={!canSubmit}
                whileHover={canSubmit ? { scale: 1.02 } : {}}
                whileTap={canSubmit ? { scale: 0.98 } : {}}
                className={`mt-8 px-10 py-4 rounded-full font-sans text-sm font-medium tracking-wide transition-all duration-300 ${
                  sending
                    ? 'bg-walnut-300 text-ivory-50 cursor-wait'
                    : canSubmit
                    ? 'bg-walnut-500 text-ivory-50 shadow-soft hover:shadow-medium'
                    : 'bg-ivory-300 text-ivory-50 cursor-not-allowed'
                }`}
              >
                {sending ? 'Sending...' : 'Send Photographs'}
              </motion.button>
            </ScrollReveal>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ── Specifications ── */
function Specifications({ product }: { product: Product }) {
  return (
    <section className="py-24 md:py-36 bg-ivory-50">
      <div className="container-narrow">
        <ScrollReveal>
          <span className="block font-sans text-xs font-medium tracking-[0.25em] uppercase text-walnut-400 mb-8">
            Details
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16">
          {/* Materials */}
          <ScrollReveal delay={0.1}>
            <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-walnut-400 mb-4">
              Materials
            </h3>
            <ul className="space-y-2">
              {product.materials.map((m) => (
                <li key={m} className="font-sans text-sm text-charcoal-500 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-walnut-300 flex-shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Dimensions & Time */}
          <ScrollReveal delay={0.15}>
            <div className="space-y-8">
              <div>
                <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-walnut-400 mb-2">
                  Dimensions
                </h3>
                <p className="font-sans text-sm text-charcoal-600">{product.dimensions}</p>
              </div>
              <div>
                <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-walnut-400 mb-2">
                  Crafting Time
                </h3>
                <p className="font-sans text-sm text-charcoal-600">{product.craftingTime}</p>
              </div>
              <div>
                <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-walnut-400 mb-2">
                  Care
                </h3>
                <p className="font-sans text-sm text-charcoal-600">Clean with a soft, dry cloth. Keep away from direct sunlight. Handle with two hands.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Features */}
        <ScrollReveal delay={0.25}>
          <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-walnut-400 mt-16 mb-6">
            What&apos;s Included
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
            {product.features.map((f) => (
              <div key={f} className="flex items-start gap-3 font-sans text-sm text-charcoal-500">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0 text-walnut-400">
                  <path d="M3 7L6 9.5L11 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {f}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ── Product FAQ ── */
function ProductFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Can I see the urn before it ships?',
      a: 'Yes. We will send you photographs of the finished piece before dispatch. If anything does not meet your expectations, we will work with you to adjust it — though our clients rarely request changes.',
    },
    {
      q: 'Is the urn suitable for burial?',
      a: 'The ceramic urn is designed as a keepsake urn for display in the home. It is not intended for burial. If you need a burial urn, please contact us — we can create a custom piece in suitable materials.',
    },
    {
      q: 'How is the velvet interior attached?',
      a: 'The midnight-blue velvet lining is hand-cut and fitted, then secured with museum-grade adhesive that will not degrade over time. The lining is removable by our studio should you ever need it replaced.',
    },
    {
      q: 'What if the urn arrives damaged?',
      a: 'Each piece is packed in a custom foam nest inside a double-walled box. In the rare event of damage during transit, photograph the damage within 48 hours and we will create a replacement at no cost.',
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-ivory-100">
      <div className="container-narrow">
        <ScrollReveal>
          <span className="block font-sans text-xs font-medium tracking-[0.25em] uppercase text-walnut-400 mb-6">
            Questions
          </span>
          <h2 className="font-serif text-display-sm md:text-display-md text-walnut-600 mb-12">
            About This Piece
          </h2>
        </ScrollReveal>

        <div className="space-y-1">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left group py-5 border-b border-ivory-200 hover:border-walnut-300/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-sans text-sm font-medium text-charcoal-600 group-hover:text-walnut-600 transition-colors">
                    {faq.q}
                  </h3>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 mt-0.5 text-walnut-400"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <line x1="7" y1="2" x2="7" y2="12" />
                      <line x1="2" y1="7" x2="12" y2="7" />
                    </svg>
                  </motion.span>
                </div>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 pb-2 font-sans text-sm text-charcoal-400 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Inquiry CTA ── */
function InquiryCTA() {
  return (
    <section className="py-20 md:py-28 bg-ivory-100">
      <div className="container-narrow text-center">
        <ScrollReveal>
          <div className="max-w-xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-walnut-600 mb-6">
              Begin Your Memorial
            </h2>
            <p className="font-sans text-base text-charcoal-400 leading-relaxed mb-10">
              This urn is not kept in stock — it is made for you and your companion alone. When you are ready, we will begin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact/"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-walnut-500 text-ivory-50 font-sans text-sm font-medium tracking-wide shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                Inquire About This Piece
              </motion.a>
              <motion.a
                href="/collection/"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-walnut-500/30 text-walnut-600 font-sans text-sm font-medium tracking-wide hover:bg-walnut-50 transition-colors duration-300"
              >
                View Collection
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ── Related Products ── */
function RelatedProducts({ current }: { current: Product }) {
  return (
    <section className="py-24 md:py-36 bg-ivory-50">
      <div className="container-wide">
        <ScrollReveal>
          <span className="block font-sans text-xs font-medium tracking-[0.25em] uppercase text-walnut-400 mb-6">
            Complete the Memorial
          </span>
          <h2 className="font-serif text-display-sm md:text-3xl text-walnut-600 mb-12">
            Pair This With
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Memorial Candle',
              desc: 'Soy wax candle with chamomile, cedarwood, and vanilla. A ritual of light.',
              href: '/products/memorial-candle-collection/',
            },
            {
              name: 'Hand-Lettered Card Set',
              desc: 'Five sentiments on cotton paper. Words for when words are difficult.',
              href: '/products/memorial-card-set/',
            },
            {
              name: 'Ritual Gift Box',
              desc: 'A complete ceremony — candle, cards, botanicals, and a remembrance journal.',
              href: '/products/ritual-memorial-gift-box/',
            },
          ].map((item, idx) => (
            <ScrollReveal key={item.name} delay={idx * 0.1}>
              <Link
                href={item.href}
                className="group block p-8 rounded-3xl bg-ivory-100 border border-ivory-200 hover:border-walnut-300/30 transition-all duration-500 hover:shadow-elegant"
              >
                <h3 className="font-serif text-lg text-walnut-600 group-hover:text-walnut-500 transition-colors mb-2">
                  {item.name}
                </h3>
                <p className="font-sans text-sm text-charcoal-400 leading-relaxed mb-4">
                  {item.desc}
                </p>
                <span className="font-sans text-xs tracking-wider uppercase text-walnut-400 group-hover:text-walnut-500 transition-colors">
                  View &rarr;
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Main Export ── */
export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const jsonLd = generateProductJsonLd(product);

  return (
    <div className="bg-ivory-100">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroGallery product={product} />
      <Introduction product={product} />
      <Craftsmanship product={product} />
      <MemorialMeaning />
      <Personalization product={product} />
      <PhotoUpload product={product} />
      <Specifications product={product} />
      <ProductFAQ />
      <InquiryCTA />
      <RelatedProducts current={product} />

      {/* Back to top */}
      <div className="text-center pb-20">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-walnut-400 hover:text-walnut-600 transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2L2 6M6 2L10 6M6 2V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Top
        </button>
      </div>
    </div>
  );
}
