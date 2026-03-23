"use client";
import { motion, useInView } from "framer-motion";
import React from "react";

const cases = [
  {
    industry: "Modernization",
    title: "Enterprise Migration: Tableau → Power BI at Scale",
    rating: "5.0",
    desc1: "Migrated 20+ interconnected Tableau dashboards to Power BI for a distributed e-commerce retail company. Managed complex dependencies and zero-downtime transition without business disruption.",
    desc2: "Executed phased rollout strategy, rebuilt dashboards with optimized data models, improved query performance significantly, and trained teams on new platform. Established foundation for future analytics expansion across the organization.",
    tools: ["Power BI", "Tableau", "Data Modeling", "Migration", "Change Management"],
  },
  {
    industry: "Human Resources",
    title: "Workforce Analytics from Zero: Staffing & Operations Intelligence",
    rating: "5.0",
    desc1: "Built first-ever centralized analytics system for professional services firm. Unified employee data, call center metrics, and marketing performance from scattered HR, operations, and campaign systems.",
    desc2: "Designed and built complete data architecture covering headcount analysis, staffing gap forecasting, call center capacity planning, and marketing ROI. Leadership now answers critical questions: 'How many agents do we need?' Data-driven staffing decisions replaced guesswork.",
    tools: ["Power BI", "SQL", "Data Architecture", "ETL", "DAX"],
  },
  {
    industry: "Logistics & Supply Chain",
    title: "Predictive Inventory Intelligence: 3-Source Integration & Forecasting",
    rating: "5.0",
    desc1: "Connected 3 disparate systems (Katana inventory, ShipHero & ShipStation shipping) for 3PL provider managing multi-location fulfillment. Created unified view answering: 'When do we run out of stock? How many units to reorder?'",
    desc2: "Built 25+ DAX measures including Daily Ship Rate (3/5/7-day moving averages), Inventory Runway, Label Reorder forecasting. Eliminated manual Excel processes, created self-service Appsmith app for non-technical team updates. Automated reorder calculations prevent stockouts and excess inventory.",
    tools: ["Power BI", "DAX", "Power Query", "ETL", "Appsmith", "Forecasting"],
  },
  {
    industry: "SaaS & Sales",
    title: "Sales Intelligence Platform: Spreadsheets → Real-Time Decisions",
    rating: "5.0",
    desc1: "Transformed B2B SaaS company from 3+ day manual Excel reporting to real-time Power BI dashboards. Integrated HubSpot CRM data with daily automated refresh, enabled sales and leadership teams to see pipeline, performance, and upsell opportunities instantly.",
    desc2: "Reduced manual reporting from 10+ hours/week to under 2 hours (80%+ savings). Improved data accuracy 5x through automation. Enabled daily insights instead of weekly. Sales team hitting goals more consistently. Leadership and managers can act on insights immediately. Front-line team adoption high.",
    tools: ["Power BI", "HubSpot", "DAX", "Power Query", "Data Integration"],
  },
  {
    industry: "B2B Wholesale",
    title: "Commercial Intelligence: Churn Prediction & Sales Opportunity Engine",
    rating: "5.0",
    desc1: "Built advanced analytics platform for wholesale company losing revenue visibility. Converted dormant ERP transaction data into commercial intelligence showing: Which customers at risk of churning? Where are untapped sales opportunities?",
    desc2: "Designed star schema data model with 82+ DAX measures. Implemented customer health scoring algorithm (order frequency, revenue trends, product diversity, recency). Created opportunity engine that flags high-priority upsell/cross-sell leads with confidence ranking. Leadership now proactively identifies at-risk customers and quantifies revenue opportunities.",
    tools: ["Power BI", "DAX", "SQL", "Data Modeling", "Star Schema", "Advanced Analytics"],
  },
];

function CaseCard({ c, i }: { c: typeof cases[0]; i: number }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.1 }}
      className="grid md:grid-cols-[1fr_2fr] gap-8 p-8 rounded-2xl bg-[#161b22] border border-white/[0.06] hover:border-green-500/20 transition-colors"
    >
      <div>
        <p className="font-mono text-[10px] tracking-widest uppercase text-green-400 mb-2">{c.industry}</p>
        <h3 className="text-lg font-semibold text-white mb-4 leading-snug">{c.title}</h3>
        <div className="flex items-center gap-1.5">
          <span className="text-yellow-400 text-sm">★★★★★</span>
          <span className="text-[#8b949e] text-xs font-mono">{c.rating}</span>
        </div>
      </div>
      <div>
        <p className="text-[#8b949e] text-sm leading-relaxed mb-3">{c.desc1}</p>
        <p className="text-[#8b949e] text-sm leading-relaxed mb-5">{c.desc2}</p>
        <div className="flex flex-wrap gap-2">
          {c.tools.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-[#8b949e]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="work" className="py-32 bg-[#0d1117] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-16">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-20">
          <p className="font-mono text-xs tracking-widest text-green-400 uppercase mb-3">Case Studies</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Impact at Scale</h2>
          <p className="text-[#8b949e] text-lg leading-relaxed">Every engagement ships a system — not just a .pbix file.</p>
        </motion.div>
        <div className="flex flex-col gap-8">
          {cases.map((c, i) => <CaseCard key={c.title} c={c} i={i} />)}
        </div>
      </div>
    </section>
  );
}
