"use client";

import { useEffect, useRef } from "react";

/** Stripe-inspired animated mesh gradient — lightweight canvas, no WebGL deps. */
export function MeshGradient({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let raf = 0;

    const blobs = [
      { x: 0.72, y: 0.28, r: 0.42, color: [15, 107, 92], speed: 0.0008 },
      { x: 0.18, y: 0.72, r: 0.38, color: [123, 196, 178], speed: 0.0011 },
      { x: 0.55, y: 0.65, r: 0.32, color: [196, 130, 58], speed: 0.0006 },
      { x: 0.35, y: 0.2, r: 0.28, color: [20, 143, 122], speed: 0.0009 },
    ];

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas!.getBoundingClientRect();
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      const { width, height } = canvas!.getBoundingClientRect();
      ctx!.clearRect(0, 0, width, height);

      const bg = ctx!.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0, "#F3F7F6");
      bg.addColorStop(0.5, "#E8F0EE");
      bg.addColorStop(1, "#D5E4E0");
      ctx!.fillStyle = bg;
      ctx!.fillRect(0, 0, width, height);

      for (const blob of blobs) {
        const t = frame * blob.speed;
        const cx = (blob.x + Math.sin(t) * 0.06) * width;
        const cy = (blob.y + Math.cos(t * 1.3) * 0.05) * height;
        const radius = blob.r * Math.min(width, height);

        const grad = ctx!.createRadialGradient(cx, cy, 0, cx, cy, radius);
        const [r, g, b] = blob.color;
        grad.addColorStop(0, `rgba(${r},${g},${b},0.38)`);
        grad.addColorStop(0.55, `rgba(${r},${g},${b},0.12)`);
        grad.addColorStop(1, "rgba(243,247,246,0)");

        ctx!.fillStyle = grad;
        ctx!.fillRect(0, 0, width, height);
      }

      frame++;
      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden
    />
  );
}
