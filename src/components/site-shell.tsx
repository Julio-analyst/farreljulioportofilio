"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

import { SiteHeader } from "@/components/site-header";
import { site } from "@/data/portfolio";
import LocalizedText from "./localized-text";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const reducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function applyCursorPosition() {
    const el = rootRef.current;
    if (!el) return;

    currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.14;
    currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.14;

    el.style.setProperty("--cursor-x", `${currentRef.current.x}px`);
    el.style.setProperty("--cursor-y", `${currentRef.current.y}px`);

    const deltaX = Math.abs(targetRef.current.x - currentRef.current.x);
    const deltaY = Math.abs(targetRef.current.y - currentRef.current.y);
    if (deltaX + deltaY > 0.5) {
      rafRef.current = window.requestAnimationFrame(applyCursorPosition);
    }
  }

  function handlePointerMove(e: React.PointerEvent) {
    const el = rootRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    targetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    if (reducedMotion) {
      el.style.setProperty("--cursor-x", `${targetRef.current.x}px`);
      el.style.setProperty("--cursor-y", `${targetRef.current.y}px`);
      return;
    }

    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = window.requestAnimationFrame(applyCursorPosition);
  }

  function handlePointerLeave() {
    const el = rootRef.current;
    if (!el) return;

    targetRef.current = { x: el.clientWidth / 2, y: el.clientHeight / 2 };
    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = window.requestAnimationFrame(applyCursorPosition);
  }

  return (
    <div ref={rootRef} onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave} className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(219,234,254,0.38),_transparent_42%),linear-gradient(180deg,_#ffffff_0%,_#f8fbff_56%,_#eff6ff_100%)]" style={{ "--cursor-x": "50%", "--cursor-y": "50%" } as React.CSSProperties}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute right-[-6rem] top-32 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

        <div
          className="absolute inset-0 pointer-events-none transition-[background-position,opacity] duration-200"
          style={{
            background:
              "radial-gradient(860px circle at var(--cursor-x) var(--cursor-y), rgba(59,130,246,0.22), rgba(59,130,246,0.10) 18%, transparent 44%), radial-gradient(460px circle at calc(var(--cursor-x) + 140px) calc(var(--cursor-y) - 90px), rgba(14,165,233,0.20), transparent 36%)",
            filter: "blur(3px)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-70"
          style={{
            background:
              "radial-gradient(560px circle at var(--cursor-x) var(--cursor-y), rgba(96,165,250,0.20), transparent 34%)",
          }}
        />
      </div>

      <SiteHeader />

      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-20 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {children}
      </main>

      <footer className="relative border-t border-white/60 bg-white/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-[color:var(--muted)] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-slate-950">{site.name}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.985] hover:border-blue-200 hover:text-[color:var(--accent)]"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.985] hover:border-blue-200 hover:text-[color:var(--accent)]"
            >
              <img src="/linkedin.webp" alt="LinkedIn" width={18} height={18} className="h-4 w-4" />
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
