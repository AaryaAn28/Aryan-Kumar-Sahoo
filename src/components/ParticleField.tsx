"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
  type: "dot" | "plus";
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  opacityDir: number;
};

export default function ParticleField({
  density = 70,
  interactive = true,
  className = "",
}: {
  density?: number;
  interactive?: boolean;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Particle[] = Array.from({ length: density }, () => {
      const z = Math.random();
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -0.15 - Math.random() * 0.35 * z,
        size: 0.6 + z * 2.2,
        type: Math.random() > 0.82 ? "plus" : "dot",
        rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.002,
        opacity: 0.15 + Math.random() * 0.5,
        opacityDir: Math.random() > 0.5 ? 1 : -1,
      };
    });

    const drawPlus = (p: Particle) => {
      const s = p.size * 3.2;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.strokeStyle = `rgba(212, 175, 55, ${p.opacity})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-s, 0);
      ctx.lineTo(s, 0);
      ctx.moveTo(0, -s);
      ctx.lineTo(0, s);
      ctx.stroke();
      ctx.restore();
    };

    const drawDot = (p: Particle) => {
      ctx.beginPath();
      ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    };

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        p.opacity += p.opacityDir * 0.0012;
        if (p.opacity > 0.65 || p.opacity < 0.1) p.opacityDir *= -1;

        if (interactive) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            const force = (90 - dist) / 90;
            p.x += (dx / (dist || 1)) * force * 1.4;
            p.y += (dy / (dist || 1)) * force * 1.4;
            ctx.save();
            ctx.globalAlpha = force;
          }
        }

        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        if (p.type === "plus") {
          drawPlus(p);
        } else {
          drawDot(p);
        }
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    window.addEventListener("resize", handleResize);
    if (interactive) window.addEventListener("mousemove", handleMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      if (interactive) window.removeEventListener("mousemove", handleMove);
    };
  }, [density, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
