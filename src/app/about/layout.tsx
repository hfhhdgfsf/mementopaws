import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story — The Art of Remembrance | MementoPaws',
  description: 'MementoPaws was born from a personal loss. Discover our kintsugi-inspired philosophy, our artisans in ceramics, woodworking, and fiber art, and the slow, intentional process behind every memorial piece.',
  openGraph: {
    title: 'Our Story — The Art of Remembrance | MementoPaws',
    description: 'Discover our kintsugi-inspired philosophy and the artisans behind every memorial piece.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
