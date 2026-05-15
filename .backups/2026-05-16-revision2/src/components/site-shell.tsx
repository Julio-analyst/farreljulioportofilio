"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { site } from "@/data/portfolio";
import LocalizedText from "./localized-text";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute right-[-6rem] top-32 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />
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
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 font-medium text-slate-700 transition-colors hover:border-blue-200 hover:text-[color:var(--accent)]"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 font-medium text-slate-700 transition-colors hover:border-blue-200 hover:text-[color:var(--accent)]"
            >
              <Image src="/linkedin.webp" alt="LinkedIn" width={18} height={18} className="h-4 w-4" />
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
