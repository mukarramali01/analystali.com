"use client";
import { motion, useInView } from "framer-motion";
import React from "react";

const steps = [
  { num: "01", title: "Audit & Align", desc: "I reverse-engineer how your team actually makes decisions — not just what metrics they say they want. Stakeholder mapping, data source inventory, KPI framework design." },
  { num: "02", title: "Architect", desc: "Star-schema data models, DAX calculation groups, and security roles — all planned before the first visual. The data model is the product; dashboards are just the interface." },
  { num: "03", title: "Build & Iterate", desc: "Rapid prototyping with 48-hour feedback cycles. You see working dashboards in days, not weeks. Each iteration compounds signal and strips noise." },
  { num: "04", title: "Deploy & Transfer", desc: "Workspace setup, scheduled refresh, RLS configuration, and documentation. Your team owns the system completely — I make myself replaceable by design." },
];

export default function Process() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-32 bg-[#0d1117] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-16">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-20">
          <p className="font-mono text-xs tracking-widest text-green-400 uppercase mb-3">Methodology</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">How I Ship</h2>
          <p className="text-[#8b949e] text-lg leading-relaxed">No guesswork. A battle-tested process refined across 500+ dashboard builds.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/[0.06] rounded-2xl overflow-hidden">
          {steps.map((s, i) => {
            const stepRef = React.useRef(null);
            const stepInView = useInView(stepRef, { once: true, margin: "-40px" });
            return (
              <motion.div
                key={s.num}
                ref={stepRef}
                initial={{ opacity: 0, y: 20 }}
                animate={stepInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="p-8 border-b sm:border-b-0 sm:border-r last:border-b-0 border-white/[0.06] bg-[#161b22] hover:bg-[#1c2128] transition-colors"
              >
                <div className="font-mono text-3xl font-bold text-white/10 mb-6">{s.num}</div>
                <h4 className="text-base font-semibold text-white mb-3">{s.title}</h4>
                <p className="text-sm text-[#8b949e] leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
