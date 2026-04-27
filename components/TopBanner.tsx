'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function TopBanner() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const bannerText = "🔥 LIMITED OFFER: Get the ₹799 one month Trial Pack 30 creatives and 3 reels — Offer expires in ";

  return (
    <div className="sticky top-0 z-[60] bg-[#4262f0] h-10 flex items-center overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex gap-12 items-center px-4">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-white text-xs md:text-sm font-bold tracking-wider flex items-center gap-3">
              ✦ {bannerText}
              <span className="font-mono bg-white/20 px-2 py-0.5 rounded text-white min-w-[50px] text-center border border-white/30">
                {formatTime(timeLeft)}
              </span>
              ✦
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-8 items-center px-4" aria-hidden="true">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-zinc-100 text-xs md:text-sm font-medium tracking-wide flex items-center gap-2">
              {bannerText}
              <span className="font-mono bg-zinc-800 px-2 py-0.5 rounded text-zinc-100 min-w-[50px] text-center border border-zinc-700">
                {formatTime(timeLeft)}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
