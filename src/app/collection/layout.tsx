import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collection — Handcrafted Pet Memorials | MementoPaws',
  description: 'Browse our handcrafted pet memorial collection — urns, wool felt replicas, candles, cards, photo cards, gift boxes, and bespoke remembrance kits. Each piece made to order by artisans.',
  openGraph: {
    title: 'Collection — Handcrafted Pet Memorials | MementoPaws',
    description: 'Browse our handcrafted pet memorial collection — each piece made to order by artisans.',
  },
};

export default function CollectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
