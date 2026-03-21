"use client";
import { motion, useInView } from "framer-motion";
import React from "react";

const reviews = [
  {
    initials: "BW",
    name: "Blake Wu",
    role: "Building AI for Data Analytics",
    text: "I worked with Mukarram on exploring how our AI can enhance data analytics, and he was outstanding — sharp, collaborative, and consistently focused on impact. He's excellent at turning complex datasets into actionable insights and building clean, stakeholder-friendly Power BI dashboards. He also brings great curiosity and structured thinking, which made our AI + analytics work both productive and practical. Highly recommend Mukarram to any team that values data-driven decision-making.",
  },
  {
    initials: "SD",
    name: "Sofiane Djellouli",
    role: "Founder, Property Pulse — Dubai Real Estate",
    text: "I worked with Mukarram on a time series project, where he successfully identified outliers in the data. His technical skills were solid, and his ability to communicate findings clearly helped me understand the implications. I recommend Mukarram for his practical approach to data analysis.",
  },
  {
    initials: "C",
    name: "Verified Client",
    role: "Upwork — 5.0 Rating",
    text: "Fantastic work! Despite the time zone differences, Mir managed to deliver the project on time. His expertise in Power BI and DAX formulas made a complex task look easy. Highly recommended.",
  },
];

function ReviewCard({ r, i }: { r: typeof reviews[0]; i: number }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="relative p-8 rounded-2xl bg-[#161b22] border border-white/[0.06] hover:border-green-500/20 transition-colors"
    >
      <span className="absolute top-4 left-6 text-5xl font-serif text-green-500/20 leading-none select-none">&ldquo;</span>
      <blockquote className="text-sm text-[#8b949e] leading-relaxed mt-6 mb-6">{r.text}</blockquote>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-xs font-bold text-green-400">
          {r.initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{r.name}</div>
          <div className="text-xs text-[#484f58]">{r.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="proof" className="py-32 bg-[#0d1117] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-16">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-20">
          <p className="font-mono text-xs tracking-widest text-green-400 uppercase mb-3">Client Reviews</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            What They Say<br />After Delivery
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r, i) => <ReviewCard key={r.name} r={r} i={i} />)}
        </div>
      </div>
    </section>
  );
}
