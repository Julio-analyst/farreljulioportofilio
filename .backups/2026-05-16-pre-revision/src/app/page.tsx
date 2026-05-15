import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, BrainCircuit, Code2, FileDown, Sparkles } from "lucide-react";

import { AnimatedReveal } from "@/components/animated-reveal";
import { featuredProjects, heroStats, site } from "@/data/portfolio";
import LocalizedText from "@/components/localized-text";

export default function Home() {
  return (
    <>
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <AnimatedReveal className="space-y-8">
          <div className="space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/80 px-4 py-2 text-sm font-medium text-[color:var(--accent)] shadow-sm">
              <Sparkles className="h-4 w-4" />
              Bilingual portfolio, simple and elegant
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  <LocalizedText
                    id={`Hi, saya ${site.name}. Saya membangun solusi AI, pipeline data, dan analitik dengan pengalaman yang mudah dipahami.`}
                    en={`Hi, I'm ${site.name}. I build AI, data pipelines, and analytics with a clean, human-centered experience.`}
                  />
              </h1>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">
                    <LocalizedText id={"Saya adalah data storyteller yang menyukai desain sistem dan membangun produk AI yang berguna."} en={"I'm a data storyteller who enjoys system design and building useful AI products."} />
                  </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] px-6 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Explore portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={site.cvPath}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-6 text-sm font-semibold text-slate-800 transition-transform duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-[color:var(--accent)]"
            >
              <FileDown className="h-4 w-4" />
              Download CV
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-3xl p-4 text-left"
              >
                <p className="text-2xl font-semibold text-slate-950">{item.value}</p>
                <p className="mt-1 text-sm text-[color:var(--muted)]">{item.label}</p>
              </div>
            ))}
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.12} className="lg:justify-self-end">
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(19,102,255,0.16),transparent_35%)]" />
            <div className="relative space-y-5">
              <div className="flex items-start gap-4">
                <div className="relative h-24 w-24 overflow-hidden rounded-[1.75rem] border border-white/70 bg-blue-100 shadow-lg shadow-blue-100">
                  <Image
                    src={site.avatarUrl}
                    alt={`${site.name} portrait`}
                    fill
                    className="object-cover"
                    sizes="96px"
                    priority
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-[color:var(--accent)]">Profile</p>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                    Farrel Julio Akbar
                  </h2>
                  <p className="max-w-xs text-sm leading-6 text-[color:var(--muted)]">
                    Final-year Data Science student focused on ML, MLOps, RAG systems, and real-time data.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[color:var(--border)] bg-white/85 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Focus</p>
                  <p className="mt-2 font-medium text-slate-950">AI, data pipelines, decision support</p>
                </div>
                <div className="rounded-2xl border border-[color:var(--border)] bg-white/85 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Available for</p>
                  <p className="mt-2 font-medium text-slate-950">Internship, collaboration, project work</p>
                </div>
              </div>

              <div className="rounded-3xl border border-[color:var(--border)] bg-white/90 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                  <BrainCircuit className="h-4 w-4 text-[color:var(--accent)]" />
                  What this site communicates
                </div>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                  A portfolio that feels calm, credible, and easy to scan. It shows what I build,
                  what I care about, and the proof points behind it.
                </p>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <AnimatedReveal className="lg:col-span-2">
          <div className="glass-card rounded-[2rem] p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[color:var(--accent)]">Featured work</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  A quick look at selected projects
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="hidden items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-[color:var(--accent)] sm:inline-flex"
              >
                View all
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4">
              {featuredProjects.map((project) => (
                <Link
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-3xl border border-[color:var(--border)] bg-white/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-[color:var(--accent)]">{project.category}</p>
                      <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
                      <p className="max-w-2xl text-sm leading-6 text-[color:var(--muted)]">
                        {project.summary}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2 text-sm font-medium text-slate-600 transition-colors group-hover:text-[color:var(--accent)]">
                      Open
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-medium text-[color:var(--accent)]"
                      >
                        {item}
                      </span>
                    ))}
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {project.impact}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.12}>
          <div className="glass-card flex h-full flex-col justify-between rounded-[2rem] p-6 sm:p-8">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-[color:var(--accent)]">Navigation</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  What each page does
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  {
                    href: "/resume",
                    title: "Resume",
                    icon: BookOpenText,
                    description: "Ringkasan pendidikan, pengalaman, dan skills.",
                  },
                  {
                    href: "/achievements",
                    title: "Achievement",
                    icon: Sparkles,
                    description: "Pencapaian, finalist, dan pengakuan.",
                  },
                  {
                    href: "/other-activity",
                    title: "Other Activity",
                    icon: Code2,
                    description: "Aktivitas di luar project utama.",
                  },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-start gap-3 rounded-2xl border border-[color:var(--border)] bg-white/90 p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/60"
                  >
                    <div className="rounded-2xl bg-[color:var(--accent-soft)] p-3 text-[color:var(--accent)]">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-950">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-[color:var(--muted)]">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-3xl bg-gradient-to-br from-[color:var(--accent)] to-cyan-500 p-5 text-white shadow-lg shadow-blue-200">
              <p className="text-sm font-medium text-white/80">Need a quick contact?</p>
                <p className="mt-2 text-lg font-semibold">Open to internship and project collaboration.</p>
              <Link href={`mailto:${site.email}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Send email
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimatedReveal>
      </section>
    </>
  );
}
