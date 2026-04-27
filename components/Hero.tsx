'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Users, Star, Clock, ShieldCheck, Languages, MessageSquare, Volume2, Maximize, X } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#f8fafc] py-16 px-4 md:px-6">
      
      {/* The Main Hero "Box" - Clean Editorial Style */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden"
      >
        {/* Clean Static Grid Background */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }} />

        <div className="relative z-10 flex flex-col items-center text-center pt-16 pb-0 px-6 md:px-12">
          
          {/* Pill Badge */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-6 py-1.5 rounded-full border border-red-100 bg-red-50/50 text-red-500 text-sm font-semibold mb-8"
          >
            Palera Design Agency
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.05] max-w-5xl mb-8"
          >
            Your Clinic Deserves a Strong Online Presence — Without You Lifting a Finger.
          </motion.h1>

          {/* Social Proof Row */}
          <div className="flex flex-wrap justify-center gap-10 text-slate-500 font-medium mb-12">
            <div className="flex items-center gap-2.5">
              <Users className="text-red-500" size={22} />
              <span className="text-slate-800 font-semibold text-lg">2000+</span> Doctors Enrolled
            </div>
            <div className="flex items-center gap-2.5">
              <Star className="text-red-500 fill-red-500" size={22} />
              <span className="text-slate-800 font-semibold text-lg">4.95</span> Agency Rating
            </div>
          </div>

          {/* The Video Player Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            onClick={() => setIsOpen(true)}
            className="relative w-full max-w-5xl aspect-video md:aspect-[16/9] bg-slate-900 rounded-t-[32px] md:rounded-t-[48px] overflow-hidden group cursor-pointer"
          >
            {/* Real Thumbnail Background */}
            <Image 
              src="/thumbnail.png" 
              alt="Clinic Video Thumbnail" 
              fill 
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Red Gradient Frame Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 via-transparent to-transparent pointer-events-none" />

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 z-20">
               <div className="flex justify-between items-start">
                  <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-white text-sm font-medium">
                    Why Palera Design?
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/10 text-white">
                      <Volume2 size={18} />
                    </div>
                  </div>
               </div>

               <div className="flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-24 h-24 md:w-40 md:h-40 bg-red-600 rounded-full shadow-[0_0_50px_rgba(239,68,68,0.5)] flex items-center justify-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                    <Play size={48} className="text-white fill-white ml-2 relative z-10" />
                  </motion.div>
               </div>

               <div className="flex flex-col gap-4">
                  <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                    <div className="h-full w-1/3 bg-red-600 rounded-full shadow-[0_0_10px_rgba(239,68,68,1)]" />
                  </div>
                  <div className="flex justify-between items-center text-white/80 text-xs font-semibold tracking-widest uppercase">
                    <div className="flex items-center gap-4">
                      <span>02:14 / 08:30</span>
                      <span className="hidden md:inline px-2 py-0.5 bg-red-600 rounded text-[10px]">LIVE</span>
                    </div>
                    <Maximize size={16} />
                  </div>
               </div>
            </div>

            <div className="absolute top-[20%] right-[15%] hidden lg:flex flex-col items-center animate-bounce z-30 pointer-events-none">
               <span className="text-white text-3xl font-[family-name:var(--font-caveat)] -rotate-12 mb-2">Click to watch video</span>
               <svg className="w-16 h-16 text-white/60 -scale-x-100 rotate-[45deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                 <path d="M17 17L7 7M7 7V17M7 7H17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
          </motion.div>

          {/* Feature Bottom Row */}
          <div className="relative w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white border-x border-b border-slate-100 rounded-b-[32px] md:rounded-b-[48px] divide-x divide-slate-50 overflow-hidden mb-12">
            <div className="p-8 flex items-center gap-4 hover:bg-slate-50 transition-colors">
              <div className="bg-red-50 p-3 rounded-2xl">
                <Clock className="text-red-500" size={26} />
              </div>
              <div className="text-left">
                <p className="text-slate-400 text-[10px] uppercase font-semibold tracking-widest">Duration</p>
                <p className="text-slate-900 font-semibold text-sm md:text-[15px] leading-tight">30 Professional<br/>Creatives</p>
              </div>
            </div>
            <div className="p-8 flex items-center gap-4 hover:bg-slate-50 transition-colors">
              <div className="bg-red-50 p-3 rounded-2xl">
                <ShieldCheck className="text-red-500" size={26} />
              </div>
              <div className="text-left">
                <p className="text-slate-400 text-[10px] uppercase font-semibold tracking-widest">Guarantee</p>
                <p className="text-slate-900 font-semibold text-sm md:text-[15px] leading-tight">100% No Questions<br/>Refund Policy</p>
              </div>
            </div>
            <div className="p-8 flex items-center gap-4 hover:bg-slate-50 transition-colors">
              <div className="bg-red-50 p-3 rounded-2xl">
                <Languages className="text-red-500" size={26} />
              </div>
              <div className="text-left">
                <p className="text-slate-400 text-[10px] uppercase font-semibold tracking-widest">Format</p>
                <p className="text-slate-900 font-semibold text-sm md:text-[15px] leading-tight">High Performance<br/>Reels</p>
              </div>
            </div>
            <div className="p-8 flex items-center gap-4 hover:bg-slate-50 transition-colors">
              <div className="bg-red-50 p-3 rounded-2xl">
                <MessageSquare className="text-red-500" size={26} />
              </div>
              <div className="text-left">
                <p className="text-slate-400 text-[10px] uppercase font-semibold tracking-widest">Support</p>
                <p className="text-slate-900 font-semibold text-sm md:text-[15px] leading-tight">Instant Onboarding<br/>& Chat</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Palera Design Agency Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Button */}
      <div className="mt-6 flex flex-col items-center gap-6">
        <button className="bg-red-600 text-white px-12 py-5 rounded-full font-semibold text-xl shadow-xl shadow-red-100 hover:bg-red-700 transition-all active:scale-95">
           👉 START MY ₹799 TRIAL NOW
        </button>
        <div className="flex gap-8 text-slate-500 font-medium">
           <span className="flex items-center gap-2">✅ 7-Day Money-Back Guarantee</span>
           <span className="flex items-center gap-2">✅ No Long-Term Commitment</span>
        </div>
      </div>
    </section>
  );
}