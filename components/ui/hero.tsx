"use client";
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 + 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

function useCounter(target: number, duration: number, start: boolean) {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if (!start) return;
    let t0: number | null = null;
    const ease = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
    const tick = (now: number) => {
      if (!t0) t0 = now;
      const p = Math.min((now - t0) / duration, 1);
      setValue(Math.round(ease(p) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [start, target, duration]);
  return value;
}

export default function Hero() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [counted, setCounted] = React.useState(false);
  const c1 = useCounter(500, 1800, counted);
  const c2 = useCounter(100, 1400, counted);
  const c3 = useCounter(3, 900, counted);

  React.useEffect(() => {
    const t = setTimeout(() => setCounted(true), 900);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    const MAX_DIST = 300;
    const PARTICLE_COLOR = "63, 185, 80";   // keep your green

    interface P {
      x: number; y: number;
      dx: number; dy: number;
      size: number;
    }

    let particles: P[] = [];

    function init(w: number, h: number) {
      // ~55 particles across the canvas — same density as AetherFlow
      const count = Math.max(40, Math.floor((w * h) / 14000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        dx: (Math.random() - 0.5) * 0.6,
        dy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 1.5 + 1.2,   // 1.2–2.7 px
      }));
    }

    function draw(w: number, h: number) {
      // Hard clear — no motion-blur trail (AetherFlow style)
      ctx.clearRect(0, 0, w, h);

      // Update + draw dots
      for (const p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${PARTICLE_COLOR}, 0.85)`;
        ctx.fill();
      }

      // Draw connections — all pairs within MAX_DIST
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            // Opacity fades linearly with distance
            const opacity = (1 - dist / MAX_DIST) * 0.55;
            ctx.strokeStyle = `rgba(${PARTICLE_COLOR}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(() => draw(w, h));
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(canvas.width, canvas.height);
    };

    resize();
    draw(canvas.width, canvas.height);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0d1117]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-16 items-center">

          {/* PHOTO — first on mobile (top center), right column on desktop */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="order-1 lg:order-2 flex justify-center items-center pt-4 lg:pt-0">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80">
              <div className="absolute inset-[-16px] rounded-full bg-green-500/10 blur-3xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-green-500/25 shadow-xl shadow-green-500/10">
                <Image
                  src="/profile.jpeg"
                  alt="Mukarram Ali"
                  fill
                  className="object-cover object-top scale-110"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* TEXT — second on mobile (below photo), left column on desktop */}
          <div className="order-2 lg:order-1">
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap gap-2 mb-4 sm:mb-5">
              <a href="https://www.upwork.com/freelancers/~01bafdc31150747334"
                target="_blank" rel="noopener"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-400 text-xs font-medium hover:bg-pink-500/25 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                Top Rated Plus
              </a>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-medium">Expert Vetted</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 text-xs font-medium">100% Job Success</span>
            </motion.div>

            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="font-mono text-[10px] sm:text-xs tracking-widest text-green-400 uppercase mb-3 sm:mb-5">
              Senior Power BI Architect & Analytics Engineer
            </motion.p>

            <motion.h1 custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none mb-4 sm:mb-6">
              <span className="text-white">Mukarram</span><br />
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Ali</span>
            </motion.h1>

            <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible"
              className="text-[#8b949e] text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mb-6 sm:mb-8">
              I architect enterprise-grade Power BI systems that transform raw data into revenue.
              500+ dashboards built. Fortune 500 to high-growth startups. If your data isn&apos;t
              driving decisions, you&apos;re leaving money on the table.
            </motion.p>

            <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10">
              <a href="https://calendly.com/mir-ali-vizwise/30min" target="_blank" rel="noopener"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors text-sm">
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/15 text-white rounded-lg hover:bg-white/5 transition-colors text-sm">
                View Case Studies <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible"
              className="flex gap-6 sm:gap-10 pt-6 border-t border-white/[0.06]">
              {[
                { num: c1, suffix: "+", label: "Dashboards" },
                { num: c2, suffix: "%", label: "Job Success" },
                { num: c3, suffix: "+ yrs", label: "Experience" },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums whitespace-nowrap">{s.num.toLocaleString()}{s.suffix}</div>
                  <div className="text-xs text-[#8b949e] mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

                </div>
      </div>
    </section>
  );
}
