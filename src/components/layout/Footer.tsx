'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = {
  shop: [
    { href: '/collection/', label: 'All Products' },
    { href: '/collection/?category=urns', label: 'Memorial Urns' },
    { href: '/collection/?category=felt-replicas', label: 'Wool Felt Replicas' },
    { href: '/collection/?category=candles', label: 'Memorial Candles' },
    { href: '/collection/?category=gift-boxes', label: 'Gift Boxes' },
  ],
  about: [
    { href: '/about/', label: 'Our Story' },
    { href: '/about/#craftsmanship', label: 'Craftsmanship' },
    { href: '/about/#team', label: 'Our Artisans' },
  ],
  support: [
    { href: '/faq/', label: 'FAQ' },
    { href: '/contact/', label: 'Contact Us' },
    { href: '/faq/#shipping', label: 'Shipping & Delivery' },
    { href: '/faq/#ordering', label: 'Returns & Care' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-ivory-300">
      {/* Top decorative line */}
      <div className="container-wide">
        <div className="h-px bg-gradient-to-r from-transparent via-ivory-400/20 to-transparent" />
      </div>

      <div className="container-wide py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-block mb-6">
                <span className="font-serif text-2xl tracking-wide text-ivory-100">
                  Memento<span className="text-ivory-400">Paws</span>
                </span>
              </Link>
              <p className="font-sans text-sm leading-relaxed text-ivory-400 max-w-sm">
                Handcrafted memorial pieces that honor the quiet beauty of love that never ends. Each piece is created with intention, by artisans who understand that what we make carries meaning.
              </p>
            </motion.div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([section, links], idx) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h4 className="font-sans text-xs font-medium tracking-[0.15em] uppercase text-ivory-200 mb-6">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-ivory-400 hover:text-ivory-200 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-20 pt-8 border-t border-ivory-400/10"
        >
          <p className="font-sans text-xs text-ivory-500">
            &copy; {new Date().getFullYear()} MementoPaws. All rights reserved. Handcrafted with love and remembrance.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/faq/" className="font-sans text-xs text-ivory-500 hover:text-ivory-300 transition-colors">
              Privacy
            </Link>
            <Link href="/faq/" className="font-sans text-xs text-ivory-500 hover:text-ivory-300 transition-colors">
              Terms
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
