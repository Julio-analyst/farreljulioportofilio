import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Code2, Cpu, ExternalLink, Layers, ShieldAlert, Sparkles, TrendingUp } from "lucide-react";

import { AnimatedReveal } from "@/components/animated-reveal";
import HoverCard from "@/components/hover-card";
import LocalizedText from "@/components/localized-text";
import { caseStudies, site } from "@/data/portfolio";

export function generateStaticParams() {
  return caseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.titleEn} | Farrel Julio Akbar`,
    description: project.summaryEn,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-12 sm:space-y-16">
      {/* Top Navigation Breadcrumb */}
      <AnimatedReveal>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--border)] pb-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-x-1 hover:border-blue-200 hover:text-[color:var(--accent)]"
          >
            <ArrowLeft className="h-4 w-4" />
            <LocalizedText id="Kembali ke Portofolio" en="Back to Portfolio" />
          </Link>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 sm:text-sm">
            <span>Portfolio</span>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[color:var(--accent)] font-semibold truncate max-w-[200px] sm:max-w-none">
              <LocalizedText id={project.shortTitle} en={project.shortTitleEn} />
            </span>
          </div>
        </div>
      </AnimatedReveal>

      {/* Hero Header */}
      <AnimatedReveal delay={0.06} className="space-y-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--accent-soft)] px-3.5 py-1 text-xs font-semibold text-[color:var(--accent)]">
            <Sparkles className="h-3.5 w-3.5" />
            <LocalizedText id={project.category} en={project.categoryEn} />
          </span>
          <span className="rounded-full border border-blue-200/70 bg-white/80 px-3.5 py-1 text-xs font-semibold text-slate-700 shadow-sm">
            <LocalizedText id={project.badge} en={project.badgeEn} />
          </span>
          <span className="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-medium text-slate-600">
            {project.period}
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl leading-tight">
          <LocalizedText id={project.title} en={project.titleEn} />
        </h1>

        <p className="max-w-4xl text-base leading-relaxed text-slate-700 sm:text-lg lg:text-xl">
          <LocalizedText id={project.summary} en={project.summaryEn} />
        </p>

        {/* Context metadata pill */}
        <div className="flex flex-wrap gap-4 rounded-2xl border border-[color:var(--border)] bg-white/70 p-4 text-xs sm:text-sm text-slate-600">
          <div>
            <span className="font-semibold text-slate-900 block">
              <LocalizedText id="Institusi / Konteks" en="Institution / Context" />:
            </span>
            <span>{project.institution}</span>
          </div>
          <div className="border-l border-slate-200 pl-4">
            <span className="font-semibold text-slate-900 block">
              <LocalizedText id="Peran Farrel" en="Farrel's Role" />:
            </span>
            <span><LocalizedText id={project.role} en={project.roleEn} /></span>
          </div>
        </div>
      </AnimatedReveal>

      {/* Metrics Row */}
      <AnimatedReveal delay={0.1}>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {project.metrics.map((metric, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-4 sm:p-5 border border-blue-100/80 bg-white/90 shadow-sm"
            >
              <p className="text-xs font-medium text-[color:var(--muted)]">
                <LocalizedText id={metric.label} en={metric.labelEn} />
              </p>
              <p className="mt-1 text-lg sm:text-xl font-bold tracking-tight text-slate-950">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </AnimatedReveal>

      {/* Primary Visual Showcase */}
      <AnimatedReveal delay={0.14} className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950">
            <LocalizedText id="Hasil Nyata & Tampilan Sistem" en="Visual Results & System Showcase" />
          </h2>
          <p className="mt-1 text-sm text-[color:var(--muted)]">
            <LocalizedText
              id="Tangkapan layar hasil produksi atau prototipe sistem yang dibangun."
              en="Screenshots of the working system, dashboards, and analytical interfaces."
            />
          </p>
        </div>

        <div className="grid gap-6">
          {project.screenshots.map((shot, idx) => (
            <div
              key={idx}
              className="glass-card overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white p-3 shadow-md sm:p-4"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-950/5">
                <Image
                  src={shot.url}
                  alt={shot.captionEn}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority={idx === 0}
                />
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-sm font-medium leading-relaxed text-slate-700">
                  <span className="font-semibold text-slate-950">
                    <LocalizedText id={`Gambar ${idx + 1}: `} en={`Figure ${idx + 1}: `} />
                  </span>
                  <LocalizedText id={shot.caption} en={shot.captionEn} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedReveal>

      {/* Problem, Users, and Solution Grid */}
      <section className="grid gap-6 lg:grid-cols-2">
        <AnimatedReveal delay={0.16}>
          <div className="glass-card h-full rounded-[2rem] p-6 sm:p-8 bg-white/90">
            <div className="flex items-center gap-2 text-sm font-semibold text-rose-600">
              <ShieldAlert className="h-4 w-4" />
              <LocalizedText id="Masalah & Kebutuhan" en="Problem & Context" />
            </div>
            <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950">
              <LocalizedText id="Mengapa Sistem Ini Perlu Dibangun?" en="Why Was This Built?" />
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              <LocalizedText id={project.problem} en={project.problemEn} />
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-100">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                <LocalizedText id="Target Pengguna / Pemangku Kepentingan" en="Target Stakeholders / Users" />
              </span>
              <p className="mt-1 text-sm font-medium text-slate-800">
                <LocalizedText id={project.users} en={project.usersEn} />
              </p>
            </div>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2}>
          <div className="glass-card h-full rounded-[2rem] p-6 sm:p-8 bg-white/90">
            <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]">
              <TrendingUp className="h-4 w-4" />
              <LocalizedText id="Solusi & Pendekatan Teknis" en="Solution & Technical Approach" />
            </div>
            <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950">
              <LocalizedText id="Bagaimana Masalah Tersebut Diselesaikan?" en="How Was It Solved?" />
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              <LocalizedText id={project.solution} en={project.solutionEn} />
            </p>
          </div>
        </AnimatedReveal>
      </section>

      {/* Personal Contribution */}
      <AnimatedReveal delay={0.22}>
        <div className="glass-card rounded-[2rem] p-6 sm:p-8 bg-gradient-to-br from-blue-50/50 via-white to-white border border-blue-100">
          <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]">
            <CheckCircle2 className="h-4 w-4" />
            <LocalizedText id="Kontribusi Pribadi Farrel" en="Farrel's Personal Contribution" />
          </div>
          <h2 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-slate-950">
            <LocalizedText id="Apa yang Secara Spesifik Dikerjakan?" en="What Did Farrel Specifically Deliver?" />
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.personalContribution.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm border border-[color:var(--border)]">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[color:var(--accent)] text-xs font-bold mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  <LocalizedText id={item} en={project.personalContributionEn[idx]} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedReveal>

      {/* Tech Stack Breakdown */}
      <AnimatedReveal delay={0.24} className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950">
            <LocalizedText id="Teknologi & Peran Fungsionalnya" en="Tech Stack & Functional Roles" />
          </h2>
          <p className="mt-1 text-sm text-[color:var(--muted)]">
            <LocalizedText
              id="Bukan sekadar daftar nama tools, melainkan alasan mengapa teknologi tersebut dipakai dalam proyek ini."
              en="Not just a list of buzzwords, but the specific technical role each tool played."
            />
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {project.stack.map((tech, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-5 border border-[color:var(--border)] bg-white/90 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-[color:var(--accent)]" />
                <p className="font-semibold text-slate-950 text-base">{tech.name}</p>
              </div>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                <LocalizedText id={tech.role} en={tech.roleEn} />
              </p>
            </div>
          ))}
        </div>
      </AnimatedReveal>

      {/* Engineering Limitations & Takeaways */}
      <AnimatedReveal delay={0.26}>
        <div className="glass-card rounded-[2rem] p-6 sm:p-8 bg-slate-50/80 border border-slate-200">
          <h2 className="text-xl font-bold tracking-tight text-slate-950">
            <LocalizedText id="Keterbatasan Sistem & Pembelajaran Teknis" en="System Limitations & Engineering Takeaways" />
          </h2>
          <p className="mt-1 text-sm text-[color:var(--muted)]">
            <LocalizedText
              id="Refleksi objektif mengenai batasan desain eksperimen dan peluang pengembangan selanjutnya."
              en="Objective reflections on experiment constraints and opportunities for future iteration."
            />
          </p>

          <ul className="mt-4 space-y-3">
            {project.limitations.map((limit, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                <span className="text-[color:var(--accent)] mt-1">•</span>
                <span>
                  <LocalizedText id={limit} en={project.limitationsEn[idx]} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedReveal>

      {/* Action CTA & External Links */}
      <AnimatedReveal delay={0.28}>
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[color:var(--border)] bg-white/95 p-6 shadow-sm">
          <div>
            <h3 className="text-base font-bold text-slate-950">
              <LocalizedText id="Ingin Mendiskusikan Proyek Ini?" en="Want to Discuss This Project?" />
            </h3>
            <p className="text-sm text-slate-600">
              <LocalizedText
                id="Saya siap menjelaskan metodologi, desain data, dan kode secara lebih terperinci."
                en="I am glad to walk through the methodology, data modeling, and source code in detail."
              />
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-all hover:border-slate-400 hover:text-slate-950"
              >
                <Code2 className="h-4 w-4" />
                <span>GitHub Repository</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
              </Link>
            )}

            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </Link>
            )}

            <Link
              href={`mailto:${site.email}?subject=Diskusi Proyek ${project.shortTitle}`}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800"
            >
              <span>Email Farrel</span>
            </Link>
          </div>
        </div>
      </AnimatedReveal>
    </article>
  );
}
