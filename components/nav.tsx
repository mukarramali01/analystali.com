"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { Arrow } from "./ui";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#approach", label: "Approach" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className="flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-line bg-bg/75 py-2 pl-5 pr-2 backdrop-blur-xl"
      >
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink font-serif text-[15px] italic text-bg">m</span>
          <span className="text-sm font-medium tracking-tight">Mukarram Ali</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="rounded-full px-3.5 py-2 text-[13px] text-muted transition-colors duration-300 hover:text-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.booking}
            target="_blank"
            rel="noopener"
            className="group hidden items-center gap-2 rounded-full bg-ink py-2 pl-4 pr-2 text-[13px] font-medium text-bg transition-colors duration-500 ease-spring hover:bg-accent hover:text-accent-ink sm:inline-flex"
          >
            Book a call
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-bg/15 transition-transform duration-500 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-px">
              <Arrow className="h-3 w-3" />
            </span>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="relative h-10 w-10 rounded-full border border-line md:hidden"
          >
            <span className={`absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 bg-ink transition-transform duration-500 ease-spring ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
            <span className={`absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 bg-ink transition-transform duration-500 ease-spring ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 -z-10 bg-bg/90 backdrop-blur-2xl transition-opacity duration-500 ease-spring md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <ul className="flex h-full flex-col justify-center gap-2 px-8">
          {[...links, { href: site.booking, label: "Book a call" }].map((l, i) => (
            <li
              key={l.href}
              style={{ transitionDelay: open ? `${100 + i * 50}ms` : "0ms" }}
              className={`transition-all duration-700 ease-spring ${open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <a href={l.href} onClick={() => setOpen(false)} className="font-serif text-5xl tracking-tight">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
