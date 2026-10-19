import { Bezel } from "./ui";

const runway = [
  { sku: "SKU-1042 · Lavender 8oz", days: 6, pct: 14 },
  { sku: "SKU-2210 · Mailer box M", days: 11, pct: 26 },
  { sku: "SKU-0877 · Gift set", days: 23, pct: 52 },
  { sku: "SKU-3105 · Refill pack", days: 41, pct: 88 },
];

const spark = [32, 30, 35, 34, 40, 38, 44, 47, 45, 52, 56, 61];

export default function HeroPanel() {
  const max = Math.max(...spark);
  const pts = spark.map((v, i) => `${(i / (spark.length - 1)) * 100},${40 - (v / max) * 34}`).join(" ");
  return (
    <Bezel className="w-full" inner="p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_4px_var(--accent-soft)]" />
          <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">Monday ops brief · auto-refreshed 6:00</span>
        </div>
        <span className="font-mono text-[10px] text-muted">Illustrative</span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-line p-4">
          <p className="text-[12px] text-muted">Revenue, last 7 days</p>
          <p className="mt-1 font-mono text-2xl tracking-tight">$412.8K</p>
          <p className="mt-1 font-mono text-[11px] text-accent">▲ 8.4% vs prior week</p>
          <svg viewBox="0 0 100 40" className="mt-3 h-10 w-full" preserveAspectRatio="none" aria-hidden>
            <polyline points={pts} fill="none" stroke="var(--accent)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
        <div className="rounded-2xl border border-line p-4">
          <p className="text-[12px] text-muted">At-risk accounts</p>
          <p className="mt-1 font-mono text-2xl tracking-tight">14</p>
          <p className="mt-1 font-mono text-[11px] text-signal">$96K revenue exposed</p>
          <div className="mt-3 flex h-10 items-end gap-1" aria-hidden>
            {[6, 9, 7, 12, 10, 14, 11].map((h, i) => (
              <span key={i} className="flex-1 rounded-sm bg-ink/10" style={{ height: `${h * 6}%` }} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-2xl border border-line p-4">
        <div className="flex items-baseline justify-between">
          <p className="text-[12px] text-muted">Inventory runway at current ship rate</p>
          <p className="font-mono text-[10.5px] text-muted">days left</p>
        </div>
        <ul className="mt-4 space-y-3">
          {runway.map((r, i) => (
            <li key={r.sku} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1.5">
              <span className="truncate text-[12.5px]">{r.sku}</span>
              <span className={`font-mono text-[12px] ${r.days < 14 ? "text-signal" : "text-muted"}`}>{r.days}d</span>
              <span className="col-span-2 h-1 overflow-hidden rounded-full bg-ink/[0.07]">
                <span
                  className={`animate-bar block h-full rounded-full ${r.days < 14 ? "bg-signal" : "bg-accent"}`}
                  style={{ width: `${r.pct}%`, ["--d" as string]: `${600 + i * 120}ms` }}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 flex items-start gap-3 rounded-2xl bg-accent-soft p-4">
        <span className="mt-0.5 font-mono text-[11px] text-accent">AI</span>
        <p className="text-[12.5px] leading-relaxed">
          <span className="text-muted">“What should we reorder this week?”</span> Reorder 2 SKUs: 1,800 units of 1042 and 950 of 2210 to cover 30 days.
        </p>
      </div>
    </Bezel>
  );
}
