import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, ExternalLink, Sparkles } from "lucide-react";

import { AnimatedReveal } from "@/components/animated-reveal";
import { PageHeading } from "@/components/page-heading";
import HoverCard from "@/components/hover-card";
import { caseStudies, secondaryProjects } from "@/data/portfolio";
import LocalizedText from "@/components/localized-text";

export const metadata = {
  title: "Portofolio & Studi Kasus | Farrel Julio Akbar",
  description: "Koleksi studi kasus proyek nyata dan rekayasa data Farrel Julio Akbar: Business Intelligence, Data Engineering, AI & Otomasi.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeading
        eyebrow={<LocalizedText id="Portofolio Proyek" en="Project Portfolio" />}
        title={
          <LocalizedText
            id="Karya nyata yang membuktikan cara saya berpikir, membangun, dan menciptakan dampak."
            en="Selected work that shows how I think, engineer systems, and communicate value."
          />
        }
        description={
          <LocalizedText
            id="Setiap studi kasus disusun dari masalah bisnis/kebijakan, data yang digunakan, proses teknis, hingga hasil nyata yang dapat diuji."
            en="Every case study is documented from the business problem, data sources, and engineering workflow to measurable outcomes."
          />
        }
      />

      {/* Flagship Case Studies */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--accent)]">
            <LocalizedText id="Studi Kasus Unggulan" en="Featured Case Studies" />
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            <LocalizedText id="Proyek Profesional & Riset Utama" en="Flagship Professional & Research Projects" />
          </h2>
          <p className="mt-1 text-sm text-[color:var(--muted)]">
            <LocalizedText
              id="Klik 'Baca Studi Kasus' untuk membaca alur masalah, kontribusi pribadi, diagram alur, dan metrik hasil lengkap."
              en="Click 'Read Case Study' for problem breakdown, personal contributions, workflow architecture, and metrics."
            />
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {caseStudies.map((project, index) => (
            <AnimatedReveal key={project.slug} delay={index * 0.08}>
              <div className="glass-card group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 sm:p-6">
                {/* Visual Thumbnail */}
                <Link href={`/portfolio/${project.slug}`} className="block relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-950/5">
                  <Image
                    src={project.thumbnail}
                    alt={project.titleEn}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur-sm">
                    <LocalizedText id="Buka Studi Kasus" en="Open Case Study" />
                    <ArrowRight className="h-3.5 w-3.5 text-[color:var(--accent)]" />
                  </span>
                </Link>

                {/* Content */}
                <div className="mt-5 flex flex-1 flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[color:var(--accent-soft)] px-3 py-0.5 text-xs font-semibold text-[color:var(--accent)]">
                        <LocalizedText id={project.category} en={project.categoryEn} />
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-medium text-slate-700">
                        <LocalizedText id={project.badge} en={project.badgeEn} />
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 group-hover:text-[color:var(--accent)] transition-colors">
                      <Link href={`/portfolio/${project.slug}`}>
                        <LocalizedText id={project.title} en={project.titleEn} />
                      </Link>
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
                      <LocalizedText id={project.summary} en={project.summaryEn} />
                    </p>
                  </div>

                  {/* Tech stack pills */}
                  <div className="space-y-4 pt-2 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech.name}
                          className="rounded-full border border-[color:var(--border)] bg-slate-50/80 px-2.5 py-0.5 text-[11px] font-medium text-slate-700"
                        >
                          {tech.name}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
                      >
                        <LocalizedText id="Baca Studi Kasus" en="Read Case Study" />
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded-full border border-[color:var(--border)] bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950"
                          >
                            <Code2 className="h-3.5 w-3.5" />
                            <span>GitHub</span>
                          </Link>
                        )}
                        {project.liveUrl && (
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded-full border border-[color:var(--border)] bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Demo</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      {/* Secondary Projects Section */}
      <section className="space-y-6 pt-6">
        <AnimatedReveal>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--accent)]">
              <LocalizedText id="Eksplorasi & Proyek Pendukung" en="Exploration & Supporting Projects" />
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              <LocalizedText id="Repositori & Riset Tambahan" en="Additional Research & Technical Repositories" />
            </h2>
            <p className="mt-1 text-sm text-[color:var(--muted)]">
              <LocalizedText
                id="Karya analisis data, visualisasi kompetisi, dan pipeline streaming pendukung."
                en="Data analysis experiments, competition visual storytelling, and supporting streaming pipelines."
              />
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {secondaryProjects.map((repo, idx) => (
            <AnimatedReveal key={repo.title} delay={idx * 0.06}>
              <Link
                href={repo.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col justify-between rounded-3xl border border-[color:var(--border)] bg-white/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-medium text-slate-700">
                      <LocalizedText id={repo.category} en={repo.categoryEn} />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 transition-colors group-hover:text-[color:var(--accent)]" />
                  </div>

                  <h3 className="text-base font-bold text-slate-950 group-hover:text-[color:var(--accent)] transition-colors">
                    <LocalizedText id={repo.displayTitle} en={repo.displayTitleEn} />
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-600">
                    <LocalizedText id={repo.summary} en={repo.summaryEn} />
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  <span className="inline-block text-[11px] font-semibold text-[color:var(--accent)]">
                    <LocalizedText id={repo.impact} en={repo.impactEn} />
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {repo.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600 border border-slate-200/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </AnimatedReveal>
          ))}
        </div>
      </section>
    </>
  );
}
