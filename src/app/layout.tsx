import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'MementoPaws — Emotional Pet Memorials | Handcrafted Remembrance',
  description: 'Handcrafted pet memorial urns, wool felt replicas, candles, and remembrance kits. Not just pet products — emotional remembrance and companionship.',
  keywords: ['pet memorial', 'pet urn', 'handcrafted urn', 'wool felt pet', 'pet remembrance', 'memorial candle', 'pet loss gift'],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'MementoPaws — Emotional Pet Memorials',
    description: 'Handcrafted memorial pieces that honor the quiet beauty of love that never ends.',
    type: 'website',
    siteName: 'MementoPaws',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MementoPaws — Emotional Pet Memorials',
    description: 'Handcrafted memorial pieces that honor the quiet beauty of love that never ends.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-walnut-500 focus:text-ivory-50 focus:rounded-full focus:font-sans focus:text-sm"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
