"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 80 || y < lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.nav
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[rgba(8,9,13,0.8)] border-b border-white/[0.05]"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-16 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-sm tracking-widest uppercase text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Mukarram Ali
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <li key={l.label}>
                <button onClick={() => scrollTo(l.href)}
                  className="text-[11px] font-medium tracking-widest uppercase text-[#8b949e] hover:text-white transition-colors relative group">
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-green-400 transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          <a href="https://calendly.com/mir-ali-vizwise/30min" target="_blank" rel="noopener"
            className="hidden md:inline-flex items-center px-5 py-2 bg-green-500 text-black text-xs font-semibold rounded-full hover:bg-green-400 transition-colors">
            Book a Call
          </a>

          <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-40 w-72 bg-[#161b22] border-l border-white/[0.06] flex flex-col pt-20 px-8 gap-6">
            {links.map(l => (
              <button key={l.label} onClick={() => scrollTo(l.href)}
                className="text-left text-sm font-medium tracking-widest uppercase text-[#8b949e] hover:text-white transition-colors">
                {l.label}
              </button>
            ))}
            <a href="https://calendly.com/mir-ali-vizwise/30min" target="_blank" rel="noopener"
              className="mt-4 inline-flex justify-center px-5 py-2.5 bg-green-500 text-black text-sm font-semibold rounded-lg hover:bg-green-400 transition-colors">
              Book a Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
