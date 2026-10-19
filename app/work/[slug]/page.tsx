import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/footer";
import { Arrow, Bezel, Button, Eyebrow } from "@/components/ui";
import { site, work } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const w = work.find((x) => x.slug === slug);
  if (!w) return {};
  const title = w.title;
  return {
    title,
    description: w.summary,
    alternates: { canonical: `/work/${w.slug}` },
    openGraph: { type: "article", title, description: w.summary, url: `${site.url}/work/${w.slug}`, images: ["/opengraph-image"] },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = work.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const w = work[i];
  const next = work[(i + 1) % work.length];

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: w.title,
        description: w.summary,
        author: { "@id": `${site.url}/#person` },
        about: w.industry,
        keywords: w.stack.join(", "),
        mainEntityOfPage: `${site.url}/work/${w.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/#work` },
          { "@type": "ListItem", position: 3, name: w.title, item: `${site.url}/work/${w.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <main id="main">
        <article className="mx-auto max-w-7xl px-4 pb-28 pt-36 sm:px-8 lg:pb-36 lg:pt-44">
          <nav aria-label="Breadcrumb" className="reveal font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            <Link href="/#work" className="transition-colors hover:text-ink">← All work</Link>
          </nav>

          <header className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <div className="reveal"><Eyebrow>{w.industry}</Eyebrow></div>
              <h1 className="reveal mt-6 font-serif text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.95] tracking-[-0.03em] text-balance" style={{ ["--d" as string]: "80ms" }}>
                {w.title}
              </h1>
              <p className="reveal mt-8 max-w-2xl text-xl leading-relaxed text-muted text-pretty" style={{ ["--d" as string]: "160ms" }}>{w.summary}</p>
            </div>
            <div className="reveal" style={{ ["--d" as string]: "200ms" }}>
              <Bezel inner="p-7">
                <p className="font-mono text-[clamp(2.4rem,5vw,3.5rem)] leading-none tracking-tight text-accent">{w.metric.value}</p>
                <p className="mt-3 text-muted">{w.metric.label}</p>
                <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6 text-sm">
                  <div><dt className="text-muted">Client</dt><dd className="mt-1 font-medium">{w.client}</dd></div>
                  <div><dt className="text-muted">Location</dt><dd className="mt-1 font-medium">{w.location}</dd></div>
                </dl>
              </Bezel>
            </div>
          </header>

          <div className="mt-24 grid gap-16 lg:grid-cols-[14rem_1fr] lg:gap-20">
            <aside className="reveal lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Stack</p>
              <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:items-start">
                {w.stack.map((s) => (
                  <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[12px]">{s}</li>
                ))}
              </ul>
            </aside>

            <div className="max-w-3xl space-y-20">
              <section className="reveal">
                <h2 className="font-serif text-4xl tracking-tight">The problem</h2>
                <p className="mt-6 text-lg leading-relaxed text-muted">{w.challenge}</p>
              </section>
              <section className="reveal">
                <h2 className="font-serif text-4xl tracking-tight">What I built</h2>
                <ol className="mt-8 space-y-6">
                  {w.approach.map((a, n) => (
                    <li key={a} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line pt-6">
                      <span className="font-mono text-[12px] text-accent">{String(n + 1).padStart(2, "0")}</span>
                      <p className="text-lg leading-relaxed">{a}</p>
                    </li>
                  ))}
                </ol>
              </section>
              <section className="reveal">
                <h2 className="font-serif text-4xl tracking-tight">The result</h2>
                <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                  {w.outcome.map((o) => (
                    <li key={o} className="rounded-2xl bg-accent-soft p-6 leading-relaxed">{o}</li>
                  ))}
                </ul>
                {w.link && (
                  <div className="mt-10">
                    <Button href={w.link.href} external>{w.link.label}</Button>
                  </div>
                )}
              </section>
            </div>
          </div>
        </article>

        <section className="border-t border-line">
          <Link href={`/work/${next.slug}`} className="group mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-16 sm:px-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Next case study · {next.industry}</p>
              <p className="mt-3 font-serif text-[clamp(1.8rem,4vw,3rem)] leading-tight tracking-tight transition-transform duration-700 ease-spring group-hover:translate-x-2">{next.title}</p>
            </div>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-500 ease-spring group-hover:bg-ink group-hover:text-bg">
              <Arrow className="h-4 w-4" />
            </span>
          </Link>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </main>
      <Footer />
    </>
  );
}
