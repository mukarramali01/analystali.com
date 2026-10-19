import Link from "next/link";
import type { ReactNode } from "react";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={`h-3.5 w-3.5 ${className}`}>
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}

type ButtonProps = { href: string; children: ReactNode; variant?: "solid" | "ghost"; external?: boolean };

export function Button({ href, children, variant = "solid", external }: ButtonProps) {
  const base =
    "group inline-flex items-center gap-3 rounded-full py-2 pl-5 pr-2 text-sm font-medium transition-all duration-500 ease-spring active:scale-[0.98]";
  const styles =
    variant === "solid"
      ? "bg-ink text-bg hover:bg-accent hover:text-accent-ink"
      : "border border-line-strong text-ink hover:bg-ink/5";
  const dot =
    variant === "solid" ? "bg-bg/15" : "bg-ink/5";
  const inner = (
    <>
      {children}
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full ${dot} transition-transform duration-500 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105`}
      >
        <Arrow />
      </span>
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener" className={`${base} ${styles}`}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={`${base} ${styles}`}>
      {inner}
    </Link>
  );
}

/** Nested "double bezel" card: outer tray + inner plate. */
export function Bezel({ children, className = "", inner = "" }: { children: ReactNode; className?: string; inner?: string }) {
  return (
    <div className={`rounded-[1.75rem] border border-line bg-ink/[0.025] p-1.5 ${className}`}>
      <div className={`h-full rounded-[calc(1.75rem-0.375rem)] bg-surface shadow-[var(--shadow)] ${inner}`}>{children}</div>
    </div>
  );
}

export function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <div className="reveal max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-6 font-serif text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.02em] text-balance">{title}</h2>
      {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{intro}</p>}
    </div>
  );
}
