'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, AlertCircle, ChevronDown, Camera, Users, Video, MessageCircle, Mail, Phone, Lock } from 'lucide-react';

export default function FinalSections() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const comparisonData = [
    { feature: "Healthcare Specialization", free: "❌", other: "⚠️", palera: "✅" },
    { feature: "Daily Posting Schedule", free: "❌", other: "⚠️", palera: "✅" },
    { feature: "Festival Coverage", free: "❌", other: "⚠️", palera: "✅" },
    { feature: "Custom Clinic Branding", free: "⚠️", other: "✅", palera: "✅" },
    { feature: "Dedicated Team", free: "❌", other: "⚠️", palera: "✅" },
    { feature: "7-Day Money-Back Guarantee", free: "❌", other: "❌", palera: "✅" },
    { feature: "Affordable Pricing", free: "⚠️", other: "❌", palera: "✅" },
    { feature: "2000+ Doctor Network", free: "❌", other: "❌", palera: "✅" },
  ];

  const steps = [
    {
      num: "1",
      title: "Choose Your Plan & Pay",
      desc: "Click the button, pick the trial or yearly plan, and complete secure payment."
    },
    {
      num: "2",
      title: "Quick Onboarding (5 Minutes)",
      desc: "Our team contacts you within 10 mins. Share your clinic details, logo, and preferences."
    },
    {
      num: "3",
      title: "Sit Back & Grow",
      desc: "Your professionally designed content starts arriving on schedule. You post. You grow."
    }
  ];

  const faqs = [
    { q: "What exactly do I get in the ₹799 trial pack?", a: "You get 30 professionally designed image creatives + 3 high-performance reels — all customized with your clinic branding, delivered over 30 days." },
    { q: "Do I need to create any content myself?", a: "No. Our team handles everything — design, branding, festival coverage, awareness days. You just post." },
    { q: "Will the content include my clinic's name and branding?", a: "Yes. Every creative is fully customized with your clinic name, logo, doctor photo, contact details, and brand colors." },
    { q: "Do I need to post the content myself?", a: "Yes. We deliver ready-to-post content via WhatsApp / Google Drive. Posting takes less than 2 minutes a day. (Posting service available as add-on if needed.)" },
    { q: "What if I'm not happy with the designs?", a: "Two safety nets: (1) Revisions are included to match your vision. (2) If you're still not satisfied, we offer a 7-day money-back guarantee — no questions asked." },
    { q: "Will this help me get more patients?", a: "Our content is designed to improve your online visibility, build trust, and increase engagement — which leads to more patient inquiries over time. We've seen this work for 2000+ doctors." },
    { q: "Do you work with my medical specialty?", a: "Yes. We serve all major specialties — dentistry, dermatology, gynecology, cardiology, pediatrics, orthopedics, ENT, and 20+ more. Demos available for every specialty." },
    { q: "How quickly can we start?", a: "Immediately. Once you complete payment, our team contacts you within 2 hours and onboarding takes just 5 minutes." }
  ];

  return (
    <div className="bg-white">
      {/* SECTION 10 — COMPARISON TABLE */}
      <section className="py-24 px-6 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Why Doctors Choose <span className="text-red-600">Palera Design</span>
            </h2>
            <p className="text-slate-500 text-lg">Over Freelancers & General Agencies</p>
          </div>

          <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-slate-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-6 md:p-8 font-bold uppercase tracking-widest text-xs">Feature</th>
                    <th className="p-6 md:p-8 font-bold uppercase tracking-widest text-xs text-center">Freelancers</th>
                    <th className="p-6 md:p-8 font-bold uppercase tracking-widest text-xs text-center">Other Agencies</th>
                    <th className="p-6 md:p-8 font-bold uppercase tracking-widest text-xs text-center bg-red-600">PALERA DESIGN</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-6 md:p-8 text-slate-700 font-semibold">{row.feature}</td>
                      <td className="p-6 md:p-8 text-center text-xl">{row.free}</td>
                      <td className="p-6 md:p-8 text-center text-xl">{row.other}</td>
                      <td className="p-6 md:p-8 text-center text-xl bg-red-50 font-bold">{row.palera}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — HOW IT WORKS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
              Get Started in <span className="text-red-600">3 Simple Steps</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="relative p-10 bg-[#f8fafc] rounded-[40px] border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="absolute -top-6 left-10 w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-red-100">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 mt-2">{step.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — FAQ */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-3xl border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 md:p-8 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-800 md:text-lg">{faq.q}</span>
                  <ChevronDown className={`text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-slate-50"
                    >
                      <div className="p-6 md:p-8 text-slate-500 font-medium leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13 — FINAL CTA BLOCK */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[50px] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-50" />
           
           <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                Your Competitors Are <span className="text-red-500">Posting Today.</span><br/>
                You Could Be Too.
              </h2>
              <p className="text-slate-400 text-lg md:text-2xl mb-12 max-w-3xl mx-auto">
                Stop losing patients to clinics with better online presence. Start your ₹799 trial and see the difference in 30 days — with zero risk.
              </p>
              
              <button className="bg-red-600 text-white px-10 md:px-16 py-6 rounded-2xl text-xl md:text-3xl font-black shadow-2xl shadow-red-900 hover:bg-red-700 transition-all active:scale-95 mb-10">
                🟢 START MY ₹799 TRIAL NOW  →
              </button>

              <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-white/60 font-bold text-sm uppercase tracking-widest">
                 <span>✅ 30 Creatives + 3 Reels</span>
                 <span>✅ 7-Day Money-Back</span>
                 <span>✅ No Contract</span>
              </div>
           </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
               <div className="text-2xl font-black text-slate-900 mb-6 italic">Palera Design</div>
               <p className="text-slate-500 font-medium leading-relaxed">
                 Helping 2000+ doctors across 15+ countries build authority and grow their clinics through high-end digital content.
               </p>
            </div>
            
            <div>
              <h5 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-8">Contact Us</h5>
              <div className="space-y-4 text-slate-500 font-medium">
                <a href="#" className="flex items-center gap-3 hover:text-red-600 transition-colors"><MessageCircle size={18} /> WhatsApp</a>
                <a href="#" className="flex items-center gap-3 hover:text-red-600 transition-colors"><Mail size={18} /> Email Support</a>
                <a href="#" className="flex items-center gap-3 hover:text-red-600 transition-colors"><Phone size={18} /> 1800-PALERA</a>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-8">Legal</h5>
              <div className="space-y-4 text-slate-500 font-medium">
                <a href="#" className="block hover:text-red-600 transition-colors">Privacy Policy</a>
                <a href="#" className="block hover:text-red-600 transition-colors">Terms of Service</a>
                <a href="#" className="block hover:text-red-600 transition-colors">Refund Policy</a>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-8">Follow Us</h5>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-all shadow-sm"><Camera size={20} /></a>
                <a href="#" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-all shadow-sm"><Users size={20} /></a>
                <a href="#" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-all shadow-sm"><Video size={20} /></a>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
             <p className="text-slate-400 text-sm font-medium">© 2026 Palera Design Agency. All Rights Reserved.</p>
             <div className="flex items-center gap-2 text-slate-400 text-sm font-bold italic">
               MADE FOR DOCTORS IN INDIA <span className="text-red-500">❤️</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
