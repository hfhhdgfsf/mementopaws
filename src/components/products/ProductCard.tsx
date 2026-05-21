'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/products/${product.slug}/`}
        className="group block"
      >
        {/* Image container */}
        <div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-ivory-200 mb-6">
          {/* Gradient placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-ivory-300 via-beige-200 to-walnut-200 opacity-50 group-hover:opacity-40 transition-opacity duration-700" />

          {/* Hover shimmer */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-transparent via-transparent to-walnut-500/5" />

          {/* Badge */}
          {product.isNew && (
            <span className="absolute top-4 left-4 font-sans text-[10px] font-medium tracking-wider uppercase bg-ivory-100 text-walnut-500 px-3 py-1.5 rounded-full shadow-soft">
              New
            </span>
          )}

          {/* Category tag */}
          <span className="absolute bottom-4 left-4 font-sans text-[10px] tracking-wider uppercase text-walnut-400/70 bg-ivory-100/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {product.category.replace('-', ' ')}
          </span>

          {/* Hover overlay border */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-walnut-300/10 group-hover:ring-walnut-300/30 transition-all duration-500" />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="font-serif text-lg text-walnut-600 group-hover:text-walnut-500 transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>
          <p className="font-sans text-sm text-charcoal-400 leading-relaxed line-clamp-2">
            {product.tagline}
          </p>
          <p className="font-sans font-medium text-charcoal-600 pt-1">
            ¥{product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
