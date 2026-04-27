import Hero from '@/components/Hero';
import KeyMetrics from '@/components/KeyMetrics';
import PainPoints from '@/components/PainPoints';
import Solution from '@/components/Solution';
import WhatYouGet from '@/components/WhatYouGet';
import DemoWork from '@/components/DemoWork';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FinalSections from '@/components/FinalSections';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <KeyMetrics />
      <PainPoints />
      <Solution />
      <WhatYouGet />
      <DemoWork />
      <Testimonials />
      <Pricing />
      <FinalSections />
    </main>
  );
}
