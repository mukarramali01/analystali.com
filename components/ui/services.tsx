"use client";
import { motion, useInView } from "framer-motion";
import React from "react";

const services = [
  { icon: "BI", num: "01", title: "Power BI Architecture", desc: "Production-grade dashboards with row-level security, incremental refresh, and deployment pipelines. Not templates — custom-built systems designed for your org's specific decision flow." },
  { icon: "Fx", num: "02", title: "Advanced DAX Engineering", desc: "Time intelligence, dynamic segmentation, what-if parameters, and complex iterator patterns. The kind of DAX that turns a flat report into a strategic weapon." },
  { icon: "DB", num: "03", title: "Data Warehouse Integration", desc: "Direct Query + Import hybrid architectures across Snowflake, Azure SQL, PostgreSQL, and REST APIs. One unified truth layer, zero data silos." },
  { icon: "KPI", num: "04", title: "Executive Decision Systems", desc: "Board-ready reporting with automated delivery, mobile optimization, and embedded analytics. Metrics frameworks that make leadership meetings 10x faster." },
  { icon: "Tb", num: "05", title: "Tableau & Multi-Platform BI", desc: "Not locked into one tool. Tableau, Looker Studio, Apache Superset — I build on the platform that fits your stack, not the one I prefer." },
  { icon: "PL", num: "06", title: "Automated Data Pipelines", desc: "Power Query M, Python ETL, and Power Automate workflows that eliminate manual reporting. Clients report 95% reduction in time spent on recurring reports." },
];

function ServiceCard({ s, i }: { s: typeof services[0]; i: number }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: "easeOut" }}
      className="group relative p-8 rounded-2xl bg-[#161b22] border border-white/[0.06] hover:border-green-500/25 hover:bg-[#1c2128] transition-all duration-300">
      <div className="absolute top-6 right-6 font-mono text-[11px] text-[#484f58]">{s.num}</div>
      <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5 font-mono text-xs font-bold text-green-400 group-hover:bg-green-500/20 transition-colors">
        {s.icon}
      </div>
      <h3 className="text-base font-semibold text-white mb-3">{s.title}</h3>
      <p className="text-sm text-[#8b949e] leading-relaxed">{s.desc}</p>
    </motion.div>
  );
}

export default function Services() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="services" className="py-32 bg-[#0d1117] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-16">
          <p className="font-mono text-xs tracking-widest text-green-400 uppercase mb-3">Capabilities</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Enterprise Analytics,<br />Engineered Right
          </h2>
          <p className="text-[#8b949e] text-lg max-w-xl leading-relaxed">
            Full-stack BI solutions — from data architecture to the pixel-perfect dashboard your C-suite actually uses.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => <ServiceCard key={s.num} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
