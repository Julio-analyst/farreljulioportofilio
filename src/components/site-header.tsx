"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Code2, Mail, Globe, Menu } from "lucide-react";
import { motion } from "framer-motion";

import { navLinks, site } from "@/data/portfolio";
import { useLanguage } from "./language-provider";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileOpen((s) => !s)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link href="/" className="group flex items-center gap-3">
            <img src="/Farrellogo.png" alt="Farrel logo" className="h-8 w-8 rounded-md object-cover" />
            <p className="text-base font-semibold tracking-tight text-slate-950 transition-colors group-hover:text-[color:var(--accent)]">
              {site.name}
            </p>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 rounded-full border border-[color:var(--border)] bg-white/80 p-1 md:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            const label = lang === "en" && (link as any).labelEn ? (link as any).labelEn : link.label;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.985] ${
                  active
                    ? "bg-[color:var(--accent)] text-white shadow-sm"
                    : "text-slate-600 hover:bg-blue-50 hover:text-slate-950"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 pr-2 sm:inline-flex">
            <div className="rounded-full border border-[color:var(--border)] bg-white/80 p-1 shadow-sm">
              <div className="relative flex h-10 w-24 items-center rounded-full bg-slate-100 p-1">
                <motion.span
                  initial={false}
                  animate={{ x: lang === "en" ? 40 : 0 }}
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  className="absolute left-1 top-1 h-8 w-10 rounded-full bg-[color:var(--accent)] shadow-sm"
                />
                <button
                  type="button"
                  onClick={() => setLang("id")}
                  className={`relative z-10 flex h-8 w-10 items-center justify-center text-xs font-semibold transition-colors ${
                    lang === "id" ? "text-white" : "text-slate-600"
                  }`}
                >
                  ID
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`relative z-10 flex h-8 w-10 items-center justify-center text-xs font-semibold transition-colors ${
                    lang === "en" ? "text-white" : "text-slate-600"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            aria-label="Switch language"
            className="sm:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-[color:var(--accent)]"
          >
            <Globe className="h-4 w-4" />
          </button>
          <Link
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.06] active:translate-y-0 active:scale-[0.965] hover:border-blue-200 hover:text-[color:var(--accent)]"
            aria-label="GitHub"
          >
            <Code2 className="h-4 w-4" />
          </Link>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.06] active:translate-y-0 active:scale-[0.965] hover:border-blue-200 hover:text-[color:var(--accent)] sm:inline-flex"
            aria-label="LinkedIn"
          >
            <img src="/linkedin.webp" alt="LinkedIn" width={18} height={18} className="h-4 w-4" />
          </Link>
          <Link
            href={`mailto:${site.email}`}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[color:var(--accent)] px-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.985] hover:bg-blue-700"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Contact</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        {/* Mobile menu panel */}
        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden absolute left-4 right-4 top-full mt-2 z-50 rounded-lg bg-white p-4 shadow-lg">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const label = lang === "en" && (link as any).labelEn ? (link as any).labelEn : link.label;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] active:translate-y-0 active:scale-[0.985] hover:bg-blue-50"
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
