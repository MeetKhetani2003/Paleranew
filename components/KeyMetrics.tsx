'use client';

import { motion } from 'framer-motion';

const metrics = [
  {
    value: '2000+',
    label: 'HAPPY DOCTORS',
  },
  {
    value: '5,00,000+',
    label: 'CREATIVES DELIVERED',
  },
  {
    value: '25+',
    label: 'SPECIALTIES SERVED',
  },
  {
    value: '4.9★',
    label: 'AVERAGE RATING',
  },
];

export default function KeyMetrics() {
  return (
    <section className="bg-white border-y border-slate-100 py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 divide-x divide-slate-100">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <span className="text-3xl md:text-5xl font-semibold text-[#0a0f1c] mb-2 group-hover:text-red-600 transition-colors duration-300">
                {metric.value}
              </span>
              <span className="text-[10px] md:text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
