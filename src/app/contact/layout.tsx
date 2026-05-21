import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Begin Your Memorial | MementoPaws',
  description: 'Reach out to discuss a custom pet memorial, ask about our handcrafted pieces, or share your companion\'s story. We respond within 24 hours.',
  openGraph: {
    title: 'Contact Us — Begin Your Memorial | MementoPaws',
    description: 'Reach out to discuss a custom pet memorial. We respond within 24 hours.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
