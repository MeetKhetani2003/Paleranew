'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="sticky top-[40px] z-50 w-full bg-[#0a0f1c] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left Side Logo */}
        <Link href="/" className="relative h-8 w-40 hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="Palera Design Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Center Links (Optional, but WebVeda usually has minimal or none in this specific style) */}
        <div className="hidden md:flex items-center gap-8">
          {/* Add links here if needed, but the user asked for "just two side logo" */}
        </div>

        {/* Right Side Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="relative h-8 w-32 hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Palera Design Logo Right"
              fill
              className="object-contain object-right"
              priority
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
