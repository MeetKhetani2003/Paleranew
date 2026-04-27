'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ShieldCheck, Zap, Lock, Phone, Clock } from 'lucide-react';

export default function Pricing() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const trialBenefits = [
    "30 Professional Image Creatives — custom-designed for your clinic",
    "3 High-Performance Reels — built for reach and engagement",
    "Full Customization — your logo, branding, colors, contact details",
    "Festival & Awareness Posts Included",
    "Dedicated Support Team",
    "7-Day Money-Back Guarantee — not happy? Full refund. No questions asked."
  ];

  const packages = [
    {
      name: "TRIAL PACK",
      tagline: "Most Popular Starter",
      price: "799",
      period: "month",
      description: "30 days, then upgrade to yearly",
      features: ["30 Image Creatives", "3 Reels", "7-Day Money-Back Guarantee", "Full Customization", "Dedicated Support"],
      cta: "START TRIAL",
      highlight: true
    },
    {
      name: "IMAGE PACK",
      tagline: "Yearly",
      price: "4,999",
      period: "year",
      description: "Just ₹416 / month • 365 creatives",
      features: ["365 Image Creatives (1 per day)", "All festivals & awareness days", "Full clinic customization", "Dedicated support team"],
      cta: "CHOOSE IMAGE PACK",
      highlight: false
    },
    {
      name: "REEL PACK 6",
      tagline: "Yearly",
      price: "15,000",
      period: "year",
      description: "6 reels per month • 72 reels per year",
      features: ["6 High-Performance Reels per month", "Trend-based formats", "Custom branded reels", "Dedicated support team"],
      cta: "CHOOSE REEL PACK 6",
      highlight: false
    },
    {
      name: "REEL PACK 12",
      tagline: "BEST VALUE + Image Package free worth 4999",
      price: "25,000",
      period: "year",
      description: "12 reels per month • 144 reels per year",
      features: ["12 Premium Reels per month", "Priority delivery", "Trend-based + promotional formats", "Dedicated support team", "Best price-per-reel"],
      cta: "CHOOSE REEL PACK 12",
      highlight: true,
      bestValue: true
    }
  ];

  return (
    <div className="bg-[#f8fafc]">
      {/* SECTION 8 — THE TRIAL OFFER */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] shadow-[0_40px_100px_rgba(239,68,68,0.1)] border-2 border-red-100 overflow-hidden"
          >
            <div className="bg-red-600 py-4 text-center">
               <p className="text-white font-bold tracking-widest text-sm uppercase">🔥 Limited Time Launch Offer</p>
            </div>
            
            <div className="p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Try Palera Design Risk-Free — Just <span className="text-red-600">₹799</span>
              </h2>
              <p className="text-slate-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                Don't take our word for it. Experience the quality yourself with our 30-day Trial Pack.
              </p>

              <div className="bg-red-50 rounded-3xl p-8 md:p-12 text-left border border-red-100 mb-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-red-200 pb-8">
                   <div>
                     <div className="text-red-600 font-black text-2xl mb-2 tracking-tight flex items-center gap-2">
                       <Zap size={24} className="fill-red-600" />
                       🎁 PALERA DESIGN — TRIAL PACK
                     </div>
                     <p className="text-slate-500 font-semibold">Originally ₹1,999 • <span className="text-green-600">60% OFF — Launch Offer</span></p>
                   </div>
                   <div className="text-left md:text-right">
                     <span className="text-4xl md:text-6xl font-black text-slate-900 leading-none">₹799</span>
                     <span className="text-slate-500 font-bold ml-2">/ month</span>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {trialBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full mt-1">
                        <Check className="text-green-600" size={14} strokeWidth={4} />
                      </div>
                      <p className="text-slate-700 font-medium text-sm md:text-base leading-snug">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-red-600 text-white py-6 rounded-2xl text-xl md:text-2xl font-black shadow-2xl shadow-red-200 hover:bg-red-700 transition-all flex items-center justify-center gap-4 mb-8"
              >
                🟢 GET MY TRIAL PACK FOR ₹799  →
              </motion.button>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-400 font-bold text-xs uppercase tracking-widest">
                 <div className="flex items-center gap-2">
                   <Lock size={14} /> 🔒 Secure payment
                 </div>
                 <div className="hidden md:block w-1 h-1 rounded-full bg-slate-300" />
                 <div className="flex items-center gap-2">
                   <Phone size={14} /> 📞 Our team will contact you within 10 Mins
                 </div>
                 <div className="hidden md:block w-1 h-1 rounded-full bg-slate-300" />
                 <div className="flex items-center gap-2 text-red-500">
                   <Clock size={14} /> ⏱️ Offer expires in [{formatTime(timeLeft)}]
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9 — FULL PACKAGES (UPSELL) */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-4">
               Or Go Big — <span className="text-red-600">Choose Your Yearly Plan</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto">
              For doctors ready to commit to long-term growth. All yearly plans include the same dedicated team and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col p-8 rounded-[40px] border ${
                  pkg.bestValue 
                  ? 'border-red-600 ring-4 ring-red-50 shadow-2xl' 
                  : 'border-slate-100 bg-white hover:border-slate-200 transition-colors'
                }`}
              >
                {pkg.bestValue && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg flex items-center gap-2">
                    <Star size={14} fill="currentColor" /> Best Value
                  </div>
                )}
                
                <div className="mb-8">
                  <p className="text-red-600 font-black text-xs uppercase tracking-widest mb-4">{pkg.tagline}</p>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-black text-slate-900">₹{pkg.price}</span>
                    <span className="text-slate-400 font-bold text-sm">/{pkg.period}</span>
                  </div>
                  <p className="text-slate-500 text-sm font-medium">{pkg.description}</p>
                </div>

                <div className="flex-grow flex flex-col gap-4 mb-10">
                  {pkg.features.map((feat, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className="text-red-600 mt-1 flex-shrink-0" size={16} strokeWidth={3} />
                      <p className="text-slate-700 text-sm font-medium leading-snug">{feat}</p>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                  pkg.highlight 
                  ? 'bg-red-600 text-white shadow-xl shadow-red-100 hover:bg-red-700' 
                  : 'bg-slate-900 text-white hover:bg-black shadow-xl shadow-slate-100'
                }`}>
                  {pkg.cta}  →
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
             <div className="inline-flex items-center gap-6 px-10 py-6 bg-[#f8fafc] rounded-full border border-slate-100">
               <div className="flex items-center gap-2 text-slate-800 font-bold">
                 <ShieldCheck className="text-green-600" size={24} />
                 100% SECURE CHECKOUT
               </div>
               <div className="w-px h-6 bg-slate-200" />
               <div className="flex items-center gap-2 text-slate-800 font-bold">
                 <Star className="text-yellow-400 fill-yellow-400" size={24} />
                 4.9/5 RATING
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
