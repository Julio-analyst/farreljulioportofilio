"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Code2, Globe2, Mail } from "lucide-react";

import { navLinks, site } from "@/data/portfolio";
import { useLanguage } from "./language-provider";
import { motion } from "framer-motion";
import LocalizedText from "./localized-text";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            FJ
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-950">{site.name}</p>
            <p className="text-xs text-[color:var(--muted)]">Portfolio</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-[color:var(--border)] bg-white/80 p-1 md:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            const label = lang === "en" && (link as any).labelEn ? (link as any).labelEn : link.label;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
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
            <div className="flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/80 p-1">
              <div className="relative flex h-8 w-20 items-center rounded-full px-1">
                <motion.span
                  layout
                  initial={false}
                  animate={{ x: lang === "en" ? 48 : 0 }}
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  className="absolute left-0 top-0 h-7 w-9 rounded-full bg-[color:var(--accent)]"
                />
                  <motion.button
                    onClick={() => setLang(lang === "id" ? "en" : "id")}
                    aria-label="toggle language"
                    title="Toggle language"
                    className="relative inline-flex h-9 w-16 items-center rounded-full border border-[color:var(--border)] bg-white/80 p-1 shadow-sm"
                  >
                    <motion.span
                      layout
                      transition={{ type: "spring", stiffness: 700, damping: 30 }}
                      className={`inline-block h-7 w-7 rounded-full bg-[color:var(--accent)] text-white`}>
                      <span className="sr-only"><LocalizedText id={lang === "en" ? "English" : "Bahasa"} en={lang === "en" ? "English" : "Bahasa"} /></span>
                    </motion.span>
                  </motion.button>
              </div>
            </div>
          </div>
          <Link
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-[color:var(--accent)]"
            aria-label="GitHub"
          >
            <Code2 className="h-4 w-4" />
          </Link>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-[color:var(--accent)] sm:inline-flex"
            aria-label="LinkedIn"
          >
            <Globe2 className="h-4 w-4" />
          </Link>
          <Link
            href={`mailto:${site.email}`}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[color:var(--accent)] px-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Contact</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
