import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Nav from "@/components/nav";
import Reveal from "@/components/reveal";
import { site } from "@/lib/content";
import "./globals.css";

const sans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif-display", subsets: ["latin"], weight: "400", style: ["normal", "italic"] });

// Runs before hydration so reveal never depends on React; Reveal re-runs it on client navigation.
const revealScript = `(function(){var d=document.documentElement;if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('js');var seen=new WeakSet();function show(el){el.animate([{opacity:0,transform:'translateY(2.5rem)',filter:'blur(6px)'},{opacity:1,transform:'none',filter:'none'}],{duration:900,delay:parseInt(getComputedStyle(el).getPropertyValue('--d'))||0,easing:'cubic-bezier(.16,1,.3,1)',fill:'forwards'})}var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){show(e.target);io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});window.__reveal=function(){document.querySelectorAll('.reveal').forEach(function(el){if(seen.has(el))return;seen.add(el);io.observe(el)})};document.addEventListener('DOMContentLoaded',window.__reveal)})()`;

const title = `${site.name} — Power BI, Data Automation & AI Analytics Consultant`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Power BI consultant",
    "Power BI developer Chicago",
    "analytics engineer",
    "data automation consultant",
    "DAX expert",
    "3PL inventory dashboard",
    "Tableau to Power BI migration",
    "AI data assistant",
    "business intelligence consultant",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title,
    description: site.description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description: site.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e0c" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      alternateName: site.short,
      jobTitle: site.role,
      url: site.url,
      email: `mailto:${site.email}`,
      image: `${site.url}/profile.jpeg`,
      worksFor: { "@type": "Organization", name: site.company },
      address: { "@type": "PostalAddress", addressLocality: "Chicago", addressRegion: "IL", addressCountry: "US" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Liverpool John Moores University" },
        { "@type": "CollegeOrUniversity", name: "International Institute of Information Technology, Bangalore" },
      ],
      knowsAbout: ["Power BI", "DAX", "SQL", "Tableau", "Snowflake", "Data engineering", "Power Automate", "Python", "Model Context Protocol"],
      sameAs: [site.linkedin, site.upwork],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: `${site.name} — Analytics & Automation`,
      url: site.url,
      image: `${site.url}/profile.jpeg`,
      founder: { "@id": `${site.url}/#person` },
      areaServed: "Worldwide",
      address: { "@type": "PostalAddress", addressLocality: "Chicago", addressRegion: "IL", addressCountry: "US" },
      serviceType: ["Power BI consulting", "Data pipeline development", "Workflow automation", "AI data assistants", "Custom internal tools"],
    },
    { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, publisher: { "@id": `${site.url}/#person` } },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg">
          Skip to content
        </a>
        <Nav />
        {children}
        <Reveal />
      </body>
    </html>
  );
}
