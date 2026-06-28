import { useEffect, useRef } from "react";
import { useTheme } from "@/lib/theme-provider";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  baseAlpha: number;
}

export function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Scroll depth tracking
    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Mouse interactive state
    const mouse = { x: -1000, y: -1000, radius: 200 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    // Generate 3D depth particles
    const particleCount = Math.min(Math.floor((width * height) / 12000), 85);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 1000 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: Math.random() * 0.5 + 0.2,
        radius: Math.random() * 1.8 + 1,
        baseAlpha: Math.random() * 0.5 + 0.3,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth scroll interpolation
      const prevScrollY = currentScrollY;
      currentScrollY += (targetScrollY - currentScrollY) * 0.08;
      scrollVelocity = (currentScrollY - prevScrollY) * 0.15;

      const isLight = document.documentElement.classList.contains("light");
      const primaryColor = isLight ? "0, 179, 134" : "0, 255, 194"; // Teal vs Cyan
      const secondaryColor = isLight ? "99, 102, 241" : "129, 140, 248"; // Indigo

      // Dynamic zoom scale based on scroll position & velocity
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const scrollProgress = currentScrollY / maxScroll;
      const baseZoom = 1 + (scrollProgress % 0.4) * 0.35 + Math.abs(scrollVelocity) * 0.02;

      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.scale(baseZoom, baseZoom);
      ctx.translate(-width / 2, -height / 2);

      // Render perspective grid lines that scale with scroll
      const gridSize = 50;
      const gridOffsetY = (currentScrollY * 0.2) % gridSize;
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = isLight ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.03)";

      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = -gridSize; y < height + gridSize; y += gridSize) {
        ctx.moveTo(0, y + gridOffsetY);
        ctx.lineTo(width, y + gridOffsetY);
      }
      ctx.stroke();

      // Project and render 3D particles with zoom depth
      const projectedParticles: { x: number; y: number; alpha: number; radius: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle along Z axis with scroll velocity boost
        p.z -= p.vz + scrollVelocity * 0.8;
        p.x += p.vx;
        p.y += p.vy;

        // Reset particle if it moves behind camera or too far away
        if (p.z <= 1) {
          p.z = 1000;
          p.x = (Math.random() - 0.5) * width * 1.5;
          p.y = (Math.random() - 0.5) * height * 1.5;
        } else if (p.z > 1000) {
          p.z = 1;
        }

        // 3D perspective projection
        const fov = 400;
        const scale = fov / (fov + p.z);
        const projX = p.x * scale + width / 2;
        const projY = p.y * scale + height / 2;

        if (projX < -50 || projX > width + 50 || projY < -50 || projY > height + 50) {
          continue;
        }

        // Distance to mouse
        const dx = mouse.x - projX;
        const dy = mouse.y - projY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let alpha = p.baseAlpha * scale * (1 - p.z / 1000);
        const currentRadius = p.radius * scale * 1.8;

        if (dist < mouse.radius) {
          alpha = Math.min(1, alpha + 0.5);
        }

        projectedParticles.push({ x: projX, y: projY, alpha, radius: currentRadius });

        // Render particle point
        ctx.beginPath();
        ctx.arc(projX, projY, Math.max(0.5, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${primaryColor}, ${alpha})`;
        ctx.shadowBlur = dist < mouse.radius ? 12 : 3;
        ctx.shadowColor = `rgba(${primaryColor}, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Render constellation connections between 3D projected points
      for (let i = 0; i < projectedParticles.length; i++) {
        const p1 = projectedParticles[i];
        for (let j = i + 1; j < projectedParticles.length; j++) {
          const p2 = projectedParticles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 120;
          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.2 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = j % 2 === 0 ? `rgba(${primaryColor}, ${lineAlpha})` : `rgba(${secondaryColor}, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
