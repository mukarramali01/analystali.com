"use client";

const tools = ["Power BI", "DAX", "SQL", "Python", "Tableau", "Snowflake", "Power Query", "PostgreSQL", "Excel", "Azure SQL", "Looker Studio", "Apache Superset"];

export default function Marquee() {
  const doubled = [...tools, ...tools];
  return (
    <div className="py-8 border-y border-white/[0.04] overflow-hidden bg-[#0d1117]">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6 font-mono text-[11px] tracking-widest uppercase text-[#484f58]">
            {t}
            <span className="w-1 h-1 rounded-full bg-green-500 opacity-40" />
          </span>
        ))}
      </div>
    </div>
  );
}
