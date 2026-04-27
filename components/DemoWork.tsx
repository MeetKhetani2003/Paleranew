'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const demoItems = [
  { id: 1, type: 'reel', title: 'Dental Procedure Showcase', image: '/demo1.png' },
  { id: 2, type: 'reel', title: 'Skin Treatment Demo', image: '/demo2.png' },
  { id: 3, type: 'image', title: 'Healthcare Expert Tips', image: '/demo3.png' },
  { id: 4, type: 'reel', title: 'Patient Transformation', image: '/demo1.png' },
  { id: 5, type: 'reel', title: 'Modern Clinic Tour', image: '/demo2.png' },
  { id: 6, type: 'image', title: 'Wellness Strategy', image: '/demo3.png' },
];

export default function DemoWork() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(350);
  
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 768) setCardWidth(280 + 24); // Mobile width + gap
      else setCardWidth(350 + 24); // Desktop width + gap
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const next = () => {
    if (index < demoItems.length - 1) setIndex(index + 1);
    else setIndex(0);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
    else setIndex(demoItems.length - 1);
  };

  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-sm font-bold tracking-widest uppercase rounded-full mb-6"
            >
              Section 06 — Demo Work
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight"
            >
              Premium Content That <br/><span className="text-red-600">Converts.</span>
            </motion.h3>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Swipable Slider */}
      <div className="relative px-6 max-w-7xl mx-auto">
        {/* Side Fading Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          ref={containerRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ 
            left: -(demoItems.length - 1) * cardWidth, 
            right: 0 
          }}
          animate={{ x: -index * cardWidth }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = offset.x;
            if (swipe < -50) next();
            else if (swipe > 50) prev();
          }}
        >
          {demoItems.map((item, idx) => (
            <motion.div 
              key={item.id}
              className="relative w-[280px] md:w-[350px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex-shrink-0 group select-none"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover pointer-events-none"
              />
              
              {/* Overlay UI */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end pointer-events-none">
                {item.type === 'reel' && (
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center mb-4">
                    <Play className="text-white fill-white ml-1" size={20} />
                  </div>
                )}
                <h4 className="text-white font-bold text-xl mb-2 whitespace-normal leading-tight">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-white/70 text-xs font-medium uppercase tracking-widest">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-20 flex flex-col items-center">
        <div className="flex -space-x-4 mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-12 h-12 rounded-full border-4 border-[#f8fafc] bg-slate-200 overflow-hidden">
               <div className={`w-full h-full bg-gradient-to-br from-slate-300 to-slate-400`} />
            </div>
          ))}
          <div className="w-12 h-12 rounded-full border-4 border-[#f8fafc] bg-red-600 flex items-center justify-center text-white text-xs font-bold">
            +2k
          </div>
        </div>
        <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">
          Trusted by doctors across 15+ countries
        </p>
      </div>
    </section>
  );
}
