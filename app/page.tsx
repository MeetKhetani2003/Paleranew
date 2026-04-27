import Hero from '@/components/Hero';
import KeyMetrics from '@/components/KeyMetrics';
import PainPoints from '@/components/PainPoints';
import Solution from '@/components/Solution';
import WhatYouGet from '@/components/WhatYouGet';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <KeyMetrics />
      <PainPoints />
      <Solution />
      <WhatYouGet />
    </main>
  );
}
