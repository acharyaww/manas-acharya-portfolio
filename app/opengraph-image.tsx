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
            "linear-gradient(135deg, #FAF7F0 0%, #FAF7F0 60%, #F0EAD9 100%)",
          padding: 80,
          color: "#2A2823",
          fontFamily: "Georgia, serif",
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
            background: "#5F7A52",
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
              color: "#5F7A52",
              fontWeight: 600,
              fontFamily: "system-ui, sans-serif",
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
              fontWeight: 500,
              letterSpacing: -2,
              lineHeight: 1.05,
              fontFamily: "Georgia, serif",
            }}
          >
            Manas Raman Acharya
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#6B6660",
              fontWeight: 500,
              lineHeight: 1.2,
              maxWidth: 1000,
              fontFamily: "system-ui, sans-serif",
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
              color: "#6B6660",
              display: "flex",
              gap: 16,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <span>WhaleWatch</span>
            <span style={{ color: "#5F7A52" }}>·</span>
            <span>Zenith</span>
            <span style={{ color: "#5F7A52" }}>·</span>
            <span>JobFlow</span>
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#5F7A52",
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
