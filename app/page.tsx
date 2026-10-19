import Image from "next/image";
import Link from "next/link";
import HeroPanel from "@/components/hero-panel";
import Footer from "@/components/footer";
import { Arrow, Bezel, Button, Eyebrow, SectionHead } from "@/components/ui";
import { approach, education, faqs, industries, pains, proof, services, site, testimonials, work } from "@/lib/content";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function Home() {
  return (
    <>
      <main id="main">
        {/* HERO */}
        <section className="relative mx-auto grid min-h-[100dvh] max-w-7xl items-center gap-14 px-4 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pt-28">
          <div>
            <div className="reveal">
              <Eyebrow>Chicago · Analytics, automation & AI</Eyebrow>
            </div>
            <h1 className="reveal mt-8 font-serif text-[clamp(3rem,7.4vw,6.6rem)] leading-[0.92] tracking-[-0.03em] text-balance" style={{ ["--d" as string]: "80ms" }}>
              Data that <em className="text-accent">runs</em> the business, not just reports on it.
            </h1>
            <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-muted text-pretty sm:text-xl" style={{ ["--d" as string]: "160ms" }}>
              I’m Mukarram Ali. I help operations-heavy companies replace spreadsheet reporting with dashboards, pipelines, automations and
              AI assistants their teams actually use, built by someone who asks about margins before measures.
            </p>
            <div className="reveal mt-10 flex flex-wrap items-center gap-3" style={{ ["--d" as string]: "240ms" }}>
              <Button href={site.booking} external>
                Book a free 30-min call
              </Button>
              <Button href="#work" variant="ghost">
                See the work
              </Button>
            </div>
            <dl className="reveal mt-14 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-4" style={{ ["--d" as string]: "320ms" }}>
              {proof.map((p) => (
                <div key={p.label}>
                  <dt className="sr-only">{p.label}</dt>
                  <dd className="font-mono text-2xl tracking-tight">{p.value}</dd>
                  <dd className="mt-1 text-[12.5px] leading-snug text-muted">{p.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="reveal lg:pl-4" style={{ ["--d" as string]: "200ms" }}>
            <HeroPanel />
          </div>
        </section>

        {/* TRUST STRIP */}
        <section aria-label="Credentials" className="border-y border-line">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-10 gap-y-4 px-4 py-6 sm:px-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Trusted on Upwork</p>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <li className="flex items-center gap-2"><Star /> Top Rated</li>
              <li className="flex items-center gap-2"><Star /> Expert Vetted</li>
              <li className="flex items-center gap-2"><Star /> 29 client reviews</li>
              <li className="flex items-center gap-2"><Star /> Identity verified</li>
            </ul>
            <a href={site.upwork} target="_blank" rel="noopener" className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink">
              View profile <Arrow className="transition-transform duration-500 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-px" />
            </a>
          </div>
        </section>

        {/* BUSINESS PROBLEMS */}
        <section className="mx-auto max-w-7xl px-4 py-28 sm:px-8 lg:py-40">
          <SectionHead
            eyebrow="Business first"
            title={<>Dashboards are the easy part. <span className="text-muted">The hard part is knowing which decision they serve.</span></>}
            intro="Most of my clients don’t come asking for Power BI. They come with a business problem that keeps costing them money. These are the ones I hear most."
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line md:grid-cols-2">
            {pains.map((p, i) => (
              <div key={p.q} className="reveal bg-bg p-8 sm:p-10" style={{ ["--d" as string]: `${i * 80}ms` }}>
                <p className="font-serif text-2xl leading-snug tracking-tight sm:text-[1.75rem]">{p.q}</p>
                <p className="mt-5 flex gap-3 text-muted leading-relaxed">
                  <span className="mt-1 font-mono text-[11px] text-accent">FIX</span>
                  {p.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mx-auto max-w-7xl px-4 py-28 sm:px-8 lg:py-36">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead
              eyebrow="Selected work"
              title="Systems that changed how a business runs."
              intro="Eight engagements across logistics, wholesale, retail media, SaaS, legal and retail. Each one shipped a working system, not a file."
            />
          </div>
          <ol className="mt-16 border-t border-line">
            {work.map((w, i) => (
              <li key={w.slug} className="reveal border-b border-line" style={{ ["--d" as string]: `${(i % 4) * 60}ms` }}>
                <Link
                  href={`/work/${w.slug}`}
                  className="group grid gap-6 py-10 transition-colors duration-500 md:grid-cols-[3rem_1fr_15rem_2.5rem] md:items-center md:gap-8"
                >
                  <span className="font-mono text-[12px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                      {w.client} · {w.industry}
                    </p>
                    <h3 className="mt-3 font-serif text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.05] tracking-tight transition-transform duration-700 ease-spring group-hover:translate-x-2">
                      {w.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-muted leading-relaxed">{w.summary}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="font-mono text-3xl tracking-tight text-accent">{w.metric.value}</p>
                    <p className="mt-1 text-[13px] leading-snug text-muted">{w.metric.label}</p>
                  </div>
                  <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-line transition-all duration-500 ease-spring group-hover:border-ink group-hover:bg-ink group-hover:text-bg md:flex">
                    <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-ink text-bg">
          <div className="mx-auto max-w-7xl px-4 py-28 sm:px-8 lg:py-40">
            <div className="reveal max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-bg/15 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-bg/60">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-inv" /> What I build
              </span>
              <h2 className="mt-6 font-serif text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.02em] text-balance">
                One partner from raw data to the decision.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bg/60">
                You shouldn’t need four contractors to get one answer. I cover the full path: strategy, pipelines, models, dashboards,
                automation and the tools around them.
              </p>
            </div>
            <div className="mt-16 grid gap-4 md:grid-cols-6">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className={`reveal rounded-[1.75rem] border border-bg/10 bg-bg/[0.03] p-1.5 ${i === 0 || i === 3 ? "md:col-span-4" : i > 3 ? "md:col-span-3" : "md:col-span-2"}`}
                  style={{ ["--d" as string]: `${(i % 3) * 80}ms` }}
                >
                  <div className="flex h-full flex-col justify-between gap-10 rounded-[calc(1.75rem-0.375rem)] bg-bg/[0.04] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-8">
                    <div>
                      <span className="font-mono text-[11px] text-bg/40">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="mt-4 font-serif text-3xl tracking-tight">{s.title}</h3>
                      <p className="mt-3 max-w-md leading-relaxed text-bg/60">{s.body}</p>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <li key={t} className="rounded-full border border-bg/10 px-3 py-1 font-mono text-[11px] text-bg/60">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES MARQUEE */}
        <section aria-label="Industries served" className="overflow-hidden border-b border-line py-10">
          <div className="animate-marquee flex w-max gap-12 whitespace-nowrap font-serif text-4xl tracking-tight text-muted sm:text-5xl">
            {[...industries, ...industries].map((x, i) => (
              <span key={i} aria-hidden={i >= industries.length} className="flex items-center gap-12">
                {x}
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        </section>

        {/* APPROACH */}
        <section id="approach" className="mx-auto max-w-7xl px-4 py-28 sm:px-8 lg:py-40">
          <SectionHead
            eyebrow="How I work"
            title="A consultant’s questions, an engineer’s delivery."
            intro="Fixed scope, short feedback loops and a clean handover. No black boxes, no lock-in."
          />
          <ol className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <li key={a.title} className="reveal" style={{ ["--d" as string]: `${i * 80}ms` }}>
                <Bezel inner="p-7 flex flex-col h-full">
                  <span className="font-mono text-[11px] text-accent">Step {i + 1}</span>
                  <h3 className="mt-10 font-serif text-2xl tracking-tight">{a.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{a.body}</p>
                </Bezel>
              </li>
            ))}
          </ol>
        </section>

        {/* TESTIMONIALS */}
        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-28 sm:px-8 lg:py-36">
            <SectionHead eyebrow="Client words" title="What people say after delivery." />
            <div className="mt-16 grid gap-10 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <figure key={t.name} className="reveal flex flex-col justify-between gap-8 border-t border-line-strong pt-8" style={{ ["--d" as string]: `${i * 80}ms` }}>
                  <blockquote className="font-serif text-[1.45rem] leading-snug tracking-tight">“{t.quote}”</blockquote>
                  <figcaption>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-[13px] text-muted">{t.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto grid max-w-7xl gap-14 px-4 py-28 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-40">
          <div className="reveal">
            <Bezel inner="overflow-hidden" className="max-w-md">
              <Image src="/profile.jpeg" alt="Portrait of Mukarram Ali" width={800} height={800} className="aspect-[4/5] w-full object-cover" priority={false} />
            </Bezel>
          </div>
          <div>
            <SectionHead
              eyebrow="About"
              title={<>Business degree first. <span className="text-muted">Data science second.</span></>}
            />
            <div className="reveal mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
              <p>
                I started in business administration, which is why my first question on any project is about revenue, cost or risk, not
                which chart to use. A master’s in data science and four years of client work gave me the engineering to back it up.
              </p>
              <p>
                Since then I’ve delivered 61 engagements on Upwork and more than 500 dashboards for 3PLs, wholesalers, brands, agencies, SaaS
                companies and law firms across the US, Europe and Asia-Pacific. Today I lead delivery at {site.company}, a Chicago-based
                analytics studio, and still build every model myself.
              </p>
            </div>
            <ul className="reveal mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {education.map((e) => (
                <li key={e.degree} className="bg-bg p-5">
                  <p className="text-[15px] font-medium">{e.degree}</p>
                  <p className="mt-1 text-[13px] text-muted">{e.school}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-7xl px-4 pb-28 sm:px-8 lg:pb-40">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHead eyebrow="FAQ" title="Before you book." />
            <div className="reveal border-t border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="relative h-4 w-4 shrink-0" aria-hidden>
                      <span className="absolute left-0 top-1/2 h-px w-4 bg-ink" />
                      <span className="absolute left-0 top-1/2 h-px w-4 rotate-90 bg-ink transition-transform duration-500 ease-spring group-open:rotate-0" />
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-7 leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        </section>
      </main>
      <Footer />
    </>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 12 12" className="h-3 w-3 text-accent" aria-hidden>
      <path d="M6 .8l1.5 3.4 3.7.3-2.8 2.4.9 3.6L6 8.6 2.7 10.5l.9-3.6L.8 4.5l3.7-.3z" fill="currentColor" />
    </svg>
  );
}
