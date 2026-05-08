import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Manas Acharya — Data Science Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0a0e27 0%, #0a0e27 60%, #151935 100%)",
          padding: 80,
          color: "#e4e4e7",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#B8955A",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#B8955A",
              fontWeight: 600,
            }}
          >
            Portfolio
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            Manas Raman Acharya
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#a1a1aa",
              fontWeight: 500,
              lineHeight: 1.2,
              maxWidth: 1000,
            }}
          >
            Data Science Student Building AI-Powered Solutions
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: 22,
              color: "#a1a1aa",
              display: "flex",
              gap: 16,
            }}
          >
            <span>WhaleWatch</span>
            <span style={{ color: "#B8955A" }}>·</span>
            <span>Zenith</span>
            <span style={{ color: "#B8955A" }}>·</span>
            <span>JobFlow</span>
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#B8955A",
              fontFamily: "monospace",
              letterSpacing: 1,
            }}
          >
            manasacharya.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
