'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    specialty: "Cardiologist",
    city: "Mumbai",
    clinic: "City Hospital",
    image: "/doc1.png",
    quote: "Palera Design transformed our clinic's digital presence. Our patient inquiries increased by 40% within just two months of launching our new content strategy.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Priya Patel",
    specialty: "Dermatologist",
    city: "Ahmedabad",
    clinic: "Patel Skin Clinic",
    image: "/doc2.png",
    quote: "The reels they created for my practice are incredibly professional. My patients often mention seeing them on Instagram before their first appointment.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Amit Verma",
    specialty: "Orthopedic Surgeon",
    city: "Delhi",
    clinic: "Orthocare India",
    image: "/doc3.png",
    quote: "Highly impressed with their attention to detail. They understand the medical field and the nuances of healthcare marketing better than anyone else.",
    rating: 5,
  },
  {
    id: 4,
    name: "Dr. Sneha Reddy",
    specialty: "Pediatrician",
    city: "Hyderabad",
    clinic: "KidsFirst Clinic",
    image: "/doc4.png",
    quote: "Finally, an agency that doesn't require me to spend hours explaining my work. They get it right the first time. Exceptional service!",
    rating: 5,
  },
  {
    id: 5,
    name: "Dr. Vikram Mehra",
    specialty: "Dentist",
    city: "Bangalore",
    clinic: "Smile Design",
    image: "/doc1.png",
    quote: "The patient onboarding process has become much smoother. Their design work truly reflects the high standards of our dental clinic.",
    rating: 5,
  },
  {
    id: 6,
    name: "Dr. Anjali Gupta",
    specialty: "Gynecologist",
    city: "Pune",
    clinic: "WomanCare Centre",
    image: "/doc2.png",
    quote: "Their team is professional, creative, and very responsive. They've helped me build a personal brand that I'm truly proud of.",
    rating: 5,
  },
  {
    id: 7,
    name: "Dr. Sandeep Singh",
    specialty: "Neurologist",
    city: "Chandigarh",
    clinic: "NeuroSpine Inst.",
    image: "/doc3.png",
    quote: "Working with Palera was the best decision for our hospital's outreach program. Their data-driven approach to design is exactly what we needed.",
    rating: 5,
  },
  {
    id: 8,
    name: "Dr. Meera Iyer",
    specialty: "Ophthalmologist",
    city: "Chennai",
    clinic: "Vision Eye Care",
    image: "/doc4.png",
    quote: "Consistent, high-quality content that actually resonates with patients. We've seen a significant boost in our online reputation.",
    rating: 5,
  }
];

const logos = [
  "City Hospital", "Apollo Clinic", "Fortis Health", "Max Healthcare", 
  "Cloudnine", "Manipal Hospitals", "Aster DM", "Narayana Health"
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(400);

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 768) setCardWidth(window.innerWidth - 48 + 24);
      else setCardWidth(400 + 24);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const next = () => {
    if (index < testimonials.length - 1) setIndex(index + 1);
    else setIndex(0);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
    else setIndex(testimonials.length - 1);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-sm font-bold tracking-widest uppercase rounded-full mb-6"
          >
            Section 07 — Testimonials & Trust
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight mb-4"
          >
            What 2000+ Doctors Are Saying
          </motion.h3>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative mb-24">
          <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full z-10 pointer-events-none px-2 hidden md:flex">
             <button onClick={prev} className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-all pointer-events-auto">
                <ChevronLeft size={24} />
             </button>
             <button onClick={next} className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-all pointer-events-auto">
                <ChevronRight size={24} />
             </button>
          </div>

          <motion.div 
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -(testimonials.length - 1) * cardWidth, right: 0 }}
            animate={{ x: -index * cardWidth }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -50) next();
              else if (offset.x > 50) prev();
            }}
          >
            {testimonials.map((item) => (
              <div 
                key={item.id}
                className="w-[calc(100vw-48px)] md:w-[400px] bg-[#f8fafc] rounded-[32px] p-8 md:p-10 flex-shrink-0 border border-slate-100 relative group"
              >
                <div className="absolute top-8 right-8 text-red-100 group-hover:text-red-200 transition-colors">
                  <Quote size={60} fill="currentColor" />
                </div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm">
                    <div className="w-5 h-5 rounded bg-red-600 flex items-center justify-center text-white text-[8px] font-black italic">
                      {item.clinic[0]}
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.clinic}</span>
                  </div>
                </div>

                <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8 relative z-10 italic">
                  "{item.quote}"
                </p>

                <div className="flex items-center gap-4 border-t border-slate-200 pt-8">
                  <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-lg leading-tight">{item.name}</h4>
                    <p className="text-slate-500 text-sm font-medium">{item.specialty} • {item.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Logo Strip */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em] mb-10">
            Trusted by leading clinics & hospitals across India
          </p>
          
          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
            
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 whitespace-nowrap items-center w-max"
            >
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-black text-xl italic">
                    {logo[0]}
                  </div>
                  <span className="text-2xl md:text-3xl font-bold text-slate-300 hover:text-slate-900 transition-colors cursor-default">
                    {logo}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
