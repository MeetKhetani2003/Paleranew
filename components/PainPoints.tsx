'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { XCircle, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const painPoints = [
  "Your Instagram & Facebook are inactive or inconsistent",
  "You don't have time to post daily content",
  "Your clinic looks unprofessional online compared to competitors",
  "Other doctors in your area are getting more visibility",
  "You're not attracting new patients from social media",
  "You have no proper reels or engaging content",
  "You miss important festivals & medical awareness days",
  "Your posts get low engagement and almost zero reach",
  "Tried freelancers — but quality and consistency isn't there",
];

export default function PainPoints() {
  const [ticked, setTicked] = useState<number[]>([]);

  const toggleTick = (index: number) => {
    if (ticked.includes(index)) {
      setTicked(ticked.filter(i => i !== index));
    } else {
      setTicked([...ticked, index]);
    }
  };

  return (
    <section className="bg-[#f8fafc] py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
            Does This Sound Familiar?
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-full mb-6" />
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            You're brilliant at treating patients — we're brilliant at designing the content that brings them in..
          </p>
        </motion.div>

        {/* Grid of Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-10">
          {painPoints.map((point, index) => {
            const isTicked = ticked.includes(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => toggleTick(index)}
                className={cn(
                  "flex items-center gap-3 p-3.5 md:p-4 rounded-xl shadow-sm border transition-all cursor-pointer select-none",
                  isTicked 
                    ? "bg-red-50 border-red-200 shadow-md" 
                    : "bg-white border-slate-100 hover:border-slate-200"
                )}
              >
                <div className="relative flex-shrink-0">
                  <div className={cn(
                    "w-5 h-5 border-2 rounded-md flex items-center justify-center transition-all",
                    isTicked ? "bg-red-600 border-red-600" : "bg-white border-slate-200"
                  )}>
                    {isTicked && <Check className="text-white" size={14} strokeWidth={4} />}
                  </div>
                </div>
                <p className={cn(
                  "text-left text-sm md:text-[15px] font-semibold leading-tight transition-colors",
                  isTicked ? "text-red-900" : "text-slate-700"
                )}>
                  {point}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 max-w-3xl mx-auto"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2 leading-tight">
            If you ticked even <span className="text-red-600">ONE</span> of these — you're not alone.
          </h3>
          <p className="text-slate-500 text-sm md:text-base font-medium">
            Over <span className="text-slate-900 font-semibold underline decoration-red-200">2000+ doctors</span> faced the same problem before joining us.
          </p>
        </motion.div>

        {/* Mini CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-red-100 hover:shadow-red-200 transition-all flex items-center gap-3 mx-auto active:scale-95 group">
            👉 SEE HOW WE FIX THIS IN 30 DAYS
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
