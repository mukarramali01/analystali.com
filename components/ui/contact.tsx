"use client";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function Contact() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 bg-[#0d1117] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-16">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-green-400 uppercase mb-4">Let&apos;s Talk</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Your data has<br />
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">answers.</span>
            {" "}Let&apos;s find them.
          </h2>
          <p className="text-[#8b949e] mb-8 leading-relaxed">
            Whether you need a single dashboard or a full analytics overhaul — book a free 30-minute
            consultation and I&apos;ll show you what&apos;s possible.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a href="https://calendly.com/mir-ali-vizwise/30min" target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors">
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <a href="mailto:mir.ali@vizwise.com"
            className="inline-flex items-center gap-2 font-mono text-sm text-green-400 hover:text-green-300 transition-colors group mb-10">
            mir.ali@vizwise.com
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex gap-6 mt-2">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/analystali" },
              { label: "Upwork", href: "https://www.upwork.com/freelancers/~01bafdc31150747334" },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener"
                className="font-mono text-[11px] tracking-widest uppercase text-[#484f58] hover:text-[#8b949e] border-b border-transparent hover:border-[#484f58] transition-all pb-0.5">
                {l.label}
              </a>
            ))}
          </div>

          <p className="mt-16 font-mono text-[10px] text-[#484f58] tracking-widest">
            © 2026 Mukarram Ali · VizWise Analytics · Chicago, IL
          </p>
        </motion.div>
      </div>
    </section>
  );
}
