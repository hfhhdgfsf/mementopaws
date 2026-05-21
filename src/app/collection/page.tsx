'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/products/ProductCard';
import { products, categories } from '@/lib/data';

const sortedProducts = [...products].sort((a, b) => {
  if (a.featured && !b.featured) return -1;
  if (!a.featured && b.featured) return 1;
  if (a.isNew && !b.isNew) return -1;
  if (!a.isNew && b.isNew) return 1;
  return 0;
});

function CollectionContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // Sync URL with category filter
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (activeCategory === 'all') {
      params.delete('category');
    } else {
      params.set('category', activeCategory);
    }
    const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
    router.replace(newUrl, { scroll: false });
  }, [activeCategory, router, searchParams]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return sortedProducts;
    return sortedProducts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const filterCategories = [
    { id: 'all', name: 'All' },
    ...categories.map((c) => ({ id: c.id, name: c.name })),
  ];

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-36">
      <div className="container-wide">
        {/* Header */}
        <SectionHeading
          eyebrow="Collection"
          title="Handcrafted Memorials"
          subtitle="Each piece is made to order by our artisans — created with intention, patience, and the understanding that what we make carries meaning."
          alignment="left"
        />

        {/* Category Filter */}
        <div className="mt-12 flex flex-wrap gap-3">
          {filterCategories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-sans text-sm tracking-wide transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-walnut-500 text-ivory-50 shadow-soft'
                  : 'bg-ivory-200 text-charcoal-500 hover:bg-ivory-300'
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="font-serif text-xl text-walnut-400">
              No products in this category yet.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function CollectionPage() {
  return (
    <Suspense fallback={
      <div className="pt-40 pb-40 text-center">
        <p className="font-serif text-xl text-walnut-400 animate-pulse-soft">Loading...</p>
      </div>
    }>
      <CollectionContent />
    </Suspense>
  );
}
