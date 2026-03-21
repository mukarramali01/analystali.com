"use client";
import { motion, useInView } from "framer-motion";
import React from "react";

const cases = [
  {
    industry: "E-Commerce",
    title: "Advanced E-Commerce Analytics Platform",
    rating: "5.0",
    desc1: "Architected a multi-page Power BI analytics suite processing 200K+ SKUs, giving the client real-time visibility into sales velocity, inventory aging, and customer lifetime value across all channels.",
    desc2: "Built custom DAX measures for YoY growth decomposition, rolling cohort analysis, and dynamic ABC segmentation. The client's reporting cycle dropped from 3 days to 15 minutes — they called it \"making a complex task look easy.\"",
    tools: ["Power BI", "DAX", "Power Query", "Data Modeling"],
  },
  {
    industry: "Marketing Analytics",
    title: "Marketing Performance Dashboard",
    rating: "5.0",
    desc1: "End-to-end marketing intelligence platform tracking $2M+ monthly ad spend across 6 channels. Real-time ROAS, attribution modeling, and conversion funnel analysis — all in a single Power BI workspace.",
    desc2: "Built with self-service filtering so a 12-person marketing team could drill into any campaign, channel, or audience segment without waiting on analysts. Reduced weekly reporting overhead by 20+ hours.",
    tools: ["Power BI", "DAX", "SQL", "Marketing Analytics"],
  },
];

function CaseCard({ c, i }: { c: typeof cases[0]; i: number }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.1 }}
      className="grid md:grid-cols-[1fr_2fr] gap-8 p-8 rounded-2xl bg-[#161b22] border border-white/[0.06] hover:border-green-500/20 transition-colors"
    >
      <div>
        <p className="font-mono text-[10px] tracking-widest uppercase text-green-400 mb-2">{c.industry}</p>
        <h3 className="text-lg font-semibold text-white mb-4 leading-snug">{c.title}</h3>
        <div className="flex items-center gap-1.5">
          <span className="text-yellow-400 text-sm">★★★★★</span>
          <span className="text-[#8b949e] text-xs font-mono">{c.rating}</span>
        </div>
      </div>
      <div>
        <p className="text-[#8b949e] text-sm leading-relaxed mb-3">{c.desc1}</p>
        <p className="text-[#8b949e] text-sm leading-relaxed mb-5">{c.desc2}</p>
        <div className="flex flex-wrap gap-2">
          {c.tools.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-[#8b949e]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="work" className="py-32 bg-[#0d1117] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-20">
          <p className="font-mono text-xs tracking-widest text-green-400 uppercase mb-3">Case Studies</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Impact at Scale</h2>
          <p className="text-[#8b949e] text-lg leading-relaxed">Every engagement ships a system — not just a .pbix file.</p>
        </motion.div>
        <div className="flex flex-col gap-8">
          {cases.map((c, i) => <CaseCard key={c.title} c={c} i={i} />)}
        </div>
      </div>
    </section>
  );
}
