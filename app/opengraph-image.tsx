import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Mukarram Ali — Power BI, data automation and AI analytics consultant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#f4f1ea", color: "#16150f" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#6b675c" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#1e4d3b" }} />
          analystali.com · Chicago
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 1, letterSpacing: -3, fontWeight: 600 }}>Data that runs the business,</div>
          <div style={{ fontSize: 84, lineHeight: 1.05, letterSpacing: -3, fontWeight: 600, color: "#1e4d3b" }}>not just reports on it.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#6b675c" }}>
          <span style={{ color: "#16150f", fontWeight: 600 }}>Mukarram Ali</span>
          <span>Power BI · Pipelines · Automation · AI assistants</span>
        </div>
      </div>
    ),
    size,
  );
}
