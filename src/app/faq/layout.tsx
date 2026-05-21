import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — Questions About Our Memorial Pieces | MementoPaws',
  description: 'Answers to common questions about our handcrafted pet memorials — ordering, customization, shipping, returns, materials, and care for your MementoPaws piece.',
  openGraph: {
    title: 'FAQ — Questions About Our Memorial Pieces | MementoPaws',
    description: 'Answers to common questions about our handcrafted pet memorials.',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
