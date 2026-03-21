"use client";
import { motion, useInView } from "framer-motion";
import React from "react";

const stats = [
  { target: 500, suffix: "+", label: "Dashboards Shipped to Production", bar: 100 },
  { target: 10000, suffix: "+", label: "Manual Hours Eliminated", bar: 92 },
  { target: 100, suffix: "%", label: "Upwork Job Success Rate", bar: 100 },
  { target: 95, suffix: "%", label: "Avg. Reporting Time Reduction", bar: 95 },
  { target: 100, suffix: "+", label: "Use Cases Across Industries", bar: 60 },
];

function useCounter(target: number, duration: number, start: boolean) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!start) return;
    let t0: number | null = null;
    const ease = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    const tick = (now: number) => {
      if (!t0) t0 = now;
      const p = Math.min((now - t0) / duration, 1);
      setVal(Math.round(ease(p) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [start, target, duration]);
  return val;
}

function StatItem({ s, i }: { s: typeof stats[0]; i: number }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const val = useCounter(s.target, s.target > 1000 ? 2200 : 1400, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.08 }}
      className="p-8 rounded-2xl bg-[#161b22] border border-white/[0.06] hover:border-green-500/20 transition-colors"
    >
      <div className="font-mono text-4xl font-bold text-white mb-1">
        {val.toLocaleString()}{s.suffix}
      </div>
      <div className="text-xs text-[#8b949e] mb-4">{s.label}</div>
      <div className="h-1 rounded-full bg-white/[0.05] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${s.bar}%` } : {}}
          transition={{ duration: 1.2, delay: i * 0.08 + 0.3, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
        />
      </div>
    </motion.div>
  );
}

export default function Proof() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="proof" className="py-32 bg-[#0d1117] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-16">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-20">
          <p className="font-mono text-xs tracking-widest text-green-400 uppercase mb-3">Track Record</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Numbers Don&apos;t Lie</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((s, i) => <StatItem key={s.label} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
