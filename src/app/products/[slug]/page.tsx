import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProductDetailClient from './ProductDetailClient';

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} — Handcrafted Pet Memorial | MementoPaws`,
    description: `${product.tagline}. ${product.description}`,
    openGraph: {
      title: `${product.name} | MementoPaws`,
      description: product.tagline,
      type: 'website',
    },
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
