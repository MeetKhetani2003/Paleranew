'use client';

import { motion } from 'framer-motion';
import { Palette, Share2, TrendingUp, ArrowRight } from 'lucide-react';

export default function Solution() {
  return (
    <section className="bg-white py-24 px-4 md:px-6 relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-red-600 font-semibold tracking-widest uppercase text-sm mb-4 block">THE SOLUTION</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-8 tracking-tight">
            Introducing Palera Design — <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Doctors' First Choice</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
            A complete, healthcare-focused content system that handles your entire social media presence — so you can focus on what you do best: <span className="text-slate-900 font-semibold">treating patients.</span>
          </p>
        </motion.div>

        {/* Three-Pillar Row - Visual Process */}
        <div className="relative">
          {/* Connecting Arrows (Desktop) */}
          <div className="hidden lg:flex absolute top-1/2 left-0 w-full justify-around -translate-y-1/2 px-32 pointer-events-none opacity-20">
            <ArrowRight size={48} className="text-slate-400" />
            <ArrowRight size={48} className="text-slate-400" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            
            {/* Pillar 1: WE DESIGN */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-red-50 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-red-100/50">
                <Palette size={48} className="text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">WE DESIGN</h3>
              <p className="text-slate-400 text-sm font-semibold tracking-widest uppercase">The Content</p>
              {/* Arrow for mobile */}
              <div className="lg:hidden mt-4 text-slate-200">
                <ArrowRight size={24} className="rotate-90" />
              </div>
            </motion.div>

            {/* Pillar 2: YOU POST */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center group"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-red-50 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:-rotate-6 transition-all duration-500 shadow-xl shadow-red-100/50">
                <Share2 size={48} className="text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">YOU POST</h3>
              <p className="text-slate-400 text-sm font-semibold tracking-widest uppercase">The Media</p>
              {/* Arrow for mobile */}
              <div className="lg:hidden mt-4 text-slate-200">
                <ArrowRight size={24} className="rotate-90" />
              </div>
            </motion.div>

            {/* Pillar 3: YOU GROW */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center group"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-red-50 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-red-100/50">
                <TrendingUp size={48} className="text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">YOU GROW</h3>
              <p className="text-slate-400 text-sm font-semibold tracking-widest uppercase">The Clinic</p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
