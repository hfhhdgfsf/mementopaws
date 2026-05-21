import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import BrandPhilosophy from '@/components/home/BrandPhilosophy';
import FeaturedCollections from '@/components/home/FeaturedCollections';
import HowItWorks from '@/components/home/HowItWorks';
import EmotionalStory from '@/components/home/EmotionalStory';
import MemorialMoments from '@/components/home/MemorialMoments';
import FAQPreview from '@/components/home/FAQPreview';

export const metadata: Metadata = {
  title: 'MementoPaws — Handcrafted Pet Memorials | Emotional Remembrance',
  description: 'Not just pet products. Emotional remembrance and companionship. Handcrafted urns, wool felt portraits, memorial candles, and curated remembrance kits — each piece created by artisans who understand.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandPhilosophy />
      <FeaturedCollections />
      <HowItWorks />
      <EmotionalStory />
      <MemorialMoments />
      <FAQPreview />
    </>
  );
}
