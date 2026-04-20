"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const t = useTranslations("hero");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation - wrapped in try/catch for in-app browser compatibility
  useEffect(() => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      if (typeof window.requestAnimationFrame !== "function") return;

      let animationId: number;
      let isActive = true;
      const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; life: number }[] = [];
      const maxParticles = 60;

      const resize = () => {
        if (!isActive) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resize();
      window.addEventListener("resize", resize);

      const createParticle = () => {
        if (particles.length >= maxParticles) return;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.05,
          life: Math.random() * 200 + 100,
        });
      };

      const animate = () => {
        if (!isActive) return;
        try {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          if (Math.random() > 0.92) createParticle();

          for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life--;

            if (p.life <= 0 || p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
              particles.splice(i, 1);
              continue;
            }

            const fadeOut = p.life < 30 ? p.life / 30 : 1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(197, 165, 90, ${p.opacity * fadeOut})`;
            ctx.fill();
          }

          for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 150) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(197, 165, 90, ${0.03 * (1 - dist / 150)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          }

          animationId = requestAnimationFrame(animate);
        } catch {
          // Silently fail - particle animation is decorative
        }
      };

      for (let i = 0; i < 30; i++) createParticle();
      animate();

      return () => {
        isActive = false;
        window.removeEventListener("resize", resize);
        cancelAnimationFrame(animationId);
      };
    } catch {
      // Canvas animation not supported in this browser - graceful degradation
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-[#1a1a1a] to-[#0d0d0d]" />

      {/* Portrait photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="鎌形 諒"
          fill
          priority
          className="object-cover object-top opacity-50"
          sizes="100vw"
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        {/* Decorative line above */}
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold/40 mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }} />

        <h1
          className="text-5xl sm:text-6xl md:text-8xl text-white tracking-[0.15em] leading-tight animate-fade-up"
          style={{ fontFamily: "var(--font-noto-serif-jp)", animationDelay: "0.5s" }}
        >
          {t("name")}
        </h1>

        {/* Decorative separator */}
        <div className="flex items-center justify-center gap-4 mt-6 mb-5 animate-fade-in" style={{ animationDelay: "0.9s" }}>
          <div className="w-8 h-px bg-gold/40" />
          <div className="w-1.5 h-1.5 rotate-45 border border-gold/40" />
          <div className="w-8 h-px bg-gold/40" />
        </div>

        <p
          className="text-[11px] sm:text-sm tracking-[0.3em] uppercase text-white/50 animate-fade-up"
          style={{ fontFamily: "var(--font-dm-sans)", animationDelay: "1.1s" }}
        >
          {t("title")}
        </p>
      </div>

      {/* Scroll Down */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 animate-fade-in"
        style={{ animationDelay: "2s" }}
      >
        <span
          className="text-[9px] tracking-[0.4em] uppercase text-white/25"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {t("scroll")}
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/30 to-transparent animate-bounce-slow" />
      </div>

      {/* Side accent lines */}
      <div className="absolute left-6 sm:left-12 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent z-20" />
      <div className="absolute right-6 sm:right-12 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent z-20" />
    </section>
  );
}
