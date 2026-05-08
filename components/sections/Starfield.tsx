"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  r: number;
  vx: number;
  vy: number;
  twinklePhase: number;
  twinkleSpeed: number;
}

export function Starfield({
  density = 0.00012,
  className,
}: {
  density?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let stars: Star[] = [];
    let rafId = 0;

    const seed = () => {
      const count = Math.floor(width * height * density);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: 0.3 + Math.random() * 0.7,
        r: 0.3 + Math.random() * 1.1,
        vx: (Math.random() - 0.5) * 0.04,
        vy: (Math.random() - 0.5) * 0.04,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.005 + Math.random() * 0.015,
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        if (!reduceMotion) {
          s.x += s.vx;
          s.y += s.vy;
          s.twinklePhase += s.twinkleSpeed;
          if (s.x < -2) s.x = width + 2;
          if (s.x > width + 2) s.x = -2;
          if (s.y < -2) s.y = height + 2;
          if (s.y > height + 2) s.y = -2;
        }
        const twinkle = reduceMotion
          ? 0.6
          : 0.45 + Math.sin(s.twinklePhase) * 0.25;
        const alpha = s.z * twinkle;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(228, 228, 231, ${alpha.toFixed(3)})`;
        ctx.fill();
      }
      rafId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={
        className ??
        "pointer-events-none absolute inset-0 h-full w-full opacity-60"
      }
    />
  );
}
