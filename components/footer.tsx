import Link from "next/link";
import { site, work } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-bg">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-28 sm:px-8 lg:pt-40">
        <div className="reveal max-w-4xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bg/50">Let’s talk</p>
          <h2 className="mt-6 font-serif text-[clamp(2.8rem,7vw,6rem)] leading-[0.95] tracking-[-0.03em] text-balance">
            Your data already has the answers. <em className="text-accent-inv">Let’s get them out.</em>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-bg/60">
            A free 30-minute call. I’ll look at how you report today, tell you honestly what is worth building, and send a fixed-scope
            proposal within two business days.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={site.booking}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-3 rounded-full bg-bg py-2 pl-6 pr-2 text-sm font-medium text-ink transition-all duration-500 ease-spring hover:bg-accent-inv hover:text-ink active:scale-[0.98]"
            >
              Book a free consultation
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/10 transition-transform duration-500 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden className="h-3.5 w-3.5"><path d="M4.5 11.5l7-7M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </a>
            <a href={`mailto:${site.email}`} className="text-sm text-bg/70 underline decoration-bg/20 underline-offset-4 transition-colors hover:text-bg">
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-28 grid gap-10 border-t border-bg/10 pt-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl">Mukarram Ali</p>
            <p className="mt-2 text-bg/50">{site.role}<br />{site.location} · US Central time</p>
          </div>
          <nav aria-label="Case studies" className="lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-bg/40">Case studies</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {work.map((w) => (
                <li key={w.slug}>
                  <Link href={`/work/${w.slug}`} className="text-bg/60 transition-colors hover:text-bg">{w.industry}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-bg/40">Elsewhere</p>
            <ul className="mt-4 space-y-2">
              <li><a href={site.linkedin} target="_blank" rel="noopener me" className="text-bg/60 transition-colors hover:text-bg">LinkedIn</a></li>
              <li><a href={site.upwork} target="_blank" rel="noopener me" className="text-bg/60 transition-colors hover:text-bg">Upwork</a></li>
              <li><a href={`mailto:${site.email}`} className="text-bg/60 transition-colors hover:text-bg">Email</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-16 text-[12px] text-bg/40">© {new Date().getFullYear()} Mukarram Ali · {site.company}</p>
      </div>
    </footer>
  );
}

