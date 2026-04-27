'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  Video, 
  Stethoscope, 
  Calendar, 
  MessageCircle, 
  Zap, 
  UserCircle2, 
  Clock, 
  ChevronDown 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Palette,
    title: "365 Professional Creatives a Year",
    description: "A full year of daily posts designed by experts who understand healthcare. Festival creatives, awareness day posts, patient education content, and consistent branding — all done for you."
  },
  {
    icon: Video,
    title: "Reels That Actually Get Reach",
    description: "Trend-based, engaging reels built for the algorithm. Informative + promotional formats that grow your followers and convert viewers into patient inquiries."
  },
  {
    icon: Stethoscope,
    title: "A Team That Speaks 'Doctor'",
    description: "We don't design for restaurants and gyms. Our entire team is dedicated to healthcare — across cardiology, dentistry, dermatology, gynecology, pediatrics, and 20+ other specialties."
  },
  {
    icon: Calendar,
    title: "Never Miss an Important Day Again",
    description: "Diwali, Doctors' Day, World Heart Day, Cancer Awareness Month — every major festival and medical awareness day, ready before you even remember it's coming."
  },
  {
    icon: MessageCircle,
    title: "Content That Builds Trust",
    description: "Educational posts that answer real patient questions. Trust-building messaging that turns followers into bookings."
  },
  {
    icon: Zap,
    title: "Zero Effort From Your Side",
    description: "No planning. No designing. No editing. No hiring. You share your details once — we handle everything from there."
  },
  {
    icon: UserCircle2,
    title: "Your Clinic, Your Identity",
    description: "Every creative includes your clinic name, logo, contact details, doctor photo, and brand colors. Your online presence becomes unmistakably yours."
  },
  {
    icon: Clock,
    title: "Quick Turnaround, Smooth Revisions",
    description: "Dedicated support team. Quick response time. Revisions included so every post matches your vision."
  }
];

export default function WhatYouGet() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f8fafc] py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-red-600 font-semibold tracking-widest uppercase text-sm mb-4 block">WHAT YOU GET</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
              Everything Your Clinic Needs to Dominate Social Media
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto font-medium">
              We provide a complete, end-to-end solution so you never have to worry about your online presence again.
            </p>
          </motion.div>
        </div>

        {/* Grid of Accordion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col"
              >
                <div 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={cn(
                    "flex items-center justify-between p-4 md:p-5 rounded-2xl cursor-pointer transition-all duration-300 select-none",
                    isOpen 
                      ? "bg-red-600 text-white shadow-xl shadow-red-200" 
                      : "bg-white text-slate-900 shadow-sm border border-slate-100 hover:border-red-200 hover:bg-red-50"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "p-2 rounded-xl transition-colors",
                      isOpen ? "bg-white/20" : "bg-red-50 text-red-600"
                    )}>
                      <Icon size={20} />
                    </div>
                    <span className="font-semibold text-sm md:text-base leading-tight">
                      {service.title}
                    </span>
                  </div>
                  <ChevronDown 
                    className={cn(
                      "transition-transform duration-300 shrink-0 ml-2",
                      isOpen ? "rotate-180" : ""
                    )} 
                    size={20} 
                  />
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white border-x border-b border-slate-100 rounded-b-2xl shadow-lg text-slate-600 font-medium leading-relaxed -mt-4 pt-8">
                        {service.description}
                        <div className="mt-4 flex items-center gap-2 text-red-600 text-sm font-semibold">
                          <div className="w-1 h-1 bg-red-600 rounded-full" />
                          Premium Quality Guaranteed
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
