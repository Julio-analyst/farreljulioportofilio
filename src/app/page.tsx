import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BarChart3, Bot, CheckCircle2, ChevronRight, Cpu, Database, Download, FileDown, Layers, Mail, Sparkles, Star } from "lucide-react";

import { AnimatedReveal } from "@/components/animated-reveal";
import { caseStudies, heroStats, institutionBadges, site, skills, whatPeopleSayAboutMe } from "@/data/portfolio";
import LocalizedText from "@/components/localized-text";

export default function Home() {
  const featuredCases = caseStudies.slice(0, 3);
  const testimonial = whatPeopleSayAboutMe[0];

  return (
    <>
      {/* Hero Section */}
      <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <AnimatedReveal className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/90 px-4 py-1.5 text-xs font-semibold text-[color:var(--accent)] shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <LocalizedText id={site.role} en={site.roleEn} />
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                <LocalizedText id={`Hi, saya ${site.name}`} en={`Hi, I'm ${site.name}`} />
              </h1>

              <p className="text-lg sm:text-xl font-medium text-slate-800 leading-snug">
                <LocalizedText id={site.tagline} en={site.taglineEn} />
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-[color:var(--muted)]">
                <LocalizedText id={site.bio} en={site.bioEn} />
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] px-6 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              <LocalizedText id="Lihat Proyek & Studi Kasus" en="Explore Case Studies" />
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={site.cvPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-6 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-[color:var(--accent)]"
            >
              <FileDown className="h-4 w-4" />
              <LocalizedText id="Download CV Terbaru" en="Download Latest CV" />
            </Link>
          </div>

          {/* Institutional Trust Badges */}
          <div className="space-y-2.5 pt-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              <LocalizedText id="Pengalaman Profesional & Pendidikan" en="Professional Experience & Education" />
            </p>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {institutionBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-white/80 p-3 shadow-xs transition-all hover:border-blue-200 hover:bg-white"
                >
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-white p-1 shadow-xs">
                    <img
                      src={badge.logo}
                      alt={badge.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">{badge.name}</p>
                    <p className="text-[11px] text-[color:var(--muted)] truncate">
                      <LocalizedText id={badge.sub} en={badge.subEn} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </AnimatedReveal>

        {/* Profile Visual Card */}
        <AnimatedReveal delay={0.12} className="lg:justify-self-end w-full max-w-md mx-auto">
          <div className="glass-card relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-gradient-to-b from-white/90 via-blue-50/40 to-white/90 p-5 shadow-xl shadow-blue-500/5">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-blue-100/60 to-white">
              <Image
                src="/profile-transparent.png"
                alt={site.name}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 450px"
              />
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-950">{site.name}</h3>
                  <p className="text-xs font-medium text-[color:var(--accent)]">
                    <LocalizedText id="Lulusan Sains Data ITERA" en="Data Science Graduate, ITERA" />
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <LocalizedText id="Siap Berkontribusi" en="Open to Opportunities" />
                </span>
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <span className="rounded-full bg-white px-2.5 py-1 border border-slate-200">
                  {site.location}
                </span>
                <span className="rounded-full bg-white px-2.5 py-1 border border-slate-200">
                  IPK 3,00 / 4,00
                </span>
                <span className="rounded-full bg-white px-2.5 py-1 border border-slate-200">
                  TOEFL 590
                </span>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </section>

      {/* Flagship Work Showcase */}
      <section className="space-y-6">
        <AnimatedReveal>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--accent)]">
                <LocalizedText id="Karya Terpilih" en="Featured Work" />
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
                <LocalizedText id="Studi Kasus Proyek Nyata" en="Real-world Case Studies" />
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--accent)] hover:underline"
            >
              <LocalizedText id="Lihat Semua Proyek" en="View All Projects" />
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredCases.map((project, idx) => (
            <AnimatedReveal key={project.slug} delay={idx * 0.08}>
              <div className="glass-card group flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50">
                <div className="space-y-4">
                  <Link href={`/portfolio/${project.slug}`} className="block relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-950/5">
                    <Image
                      src={project.thumbnail}
                      alt={project.titleEn}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                    <span className="absolute top-2.5 left-2.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-semibold text-slate-800 shadow-xs backdrop-blur-xs">
                      <LocalizedText id={project.badge} en={project.badgeEn} />
                    </span>
                  </Link>

                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-[color:var(--accent)] block">
                      <LocalizedText id={project.category} en={project.categoryEn} />
                    </span>
                    <h3 className="text-lg font-bold text-slate-950 group-hover:text-[color:var(--accent)] transition-colors leading-snug">
                      <Link href={`/portfolio/${project.slug}`}>
                        <LocalizedText id={project.title} en={project.titleEn} />
                      </Link>
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-600 line-clamp-3">
                      <LocalizedText id={project.summary} en={project.summaryEn} />
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[color:var(--accent)] hover:underline"
                  >
                    <LocalizedText id="Baca Studi Kasus" en="Read Case Study" />
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      GitHub Repo
                    </Link>
                  )}
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      {/* Core Capabilities Mapped to Proof */}
      <section className="space-y-6">
        <AnimatedReveal>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--accent)]">
              <LocalizedText id="Bidang Keahlian & Bukti" en="Core Capabilities & Proof" />
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              <LocalizedText id="Kemampuan yang Teruji dalam Praktik" en="Skills Backed by Real Implementations" />
            </h2>
          </div>
        </AnimatedReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <AnimatedReveal key={skill.category} delay={index * 0.06}>
              <div className="glass-card flex h-full flex-col justify-between rounded-3xl border border-[color:var(--border)] bg-white/90 p-5 shadow-xs transition-all hover:border-blue-200 hover:shadow-md">
                <div className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                    {index === 0 && <BarChart3 className="h-5 w-5" />}
                    {index === 1 && <Database className="h-5 w-5" />}
                    {index === 2 && <Bot className="h-5 w-5" />}
                    {index === 3 && <Cpu className="h-5 w-5" />}
                  </div>

                  <h3 className="text-base font-bold text-slate-950">
                    <LocalizedText id={skill.category} en={skill.categoryEn} />
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-600">
                    <LocalizedText id={skill.summary} en={skill.summaryEn} />
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                  {skill.items.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-700 border border-slate-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      {/* Clean Mentor Testimonial */}
      <section>
        <AnimatedReveal>
          <div className="glass-card overflow-hidden rounded-[2.5rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50/30 to-white p-6 sm:p-10 shadow-md">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-xs font-semibold text-slate-600">
                  <LocalizedText id="Rekomendasi Resmi Mentor Magang" en="Official Internship Endorsement" />
                </span>
              </div>

              <blockquote className="text-base sm:text-lg font-medium leading-relaxed text-slate-800 italic">
                &ldquo;<LocalizedText id={testimonial.description} en={testimonial.descriptionEn} />&rdquo;
              </blockquote>

              <div className="pt-2">
                <p className="text-sm font-bold text-slate-950">{testimonial.issuer}</p>
                <p className="text-xs text-[color:var(--muted)]">{testimonial.issuerRole}</p>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </section>

      {/* Contact Banner */}
      <section>
        <AnimatedReveal>
          <div className="rounded-[2.5rem] border border-blue-500/30 bg-blue-700 p-8 text-white shadow-xl shadow-blue-500/20 sm:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  <LocalizedText
                    id="Siap Berkolaborasi dan Menghadirkan Dampak Nyata"
                    en="Ready to Collaborate and Deliver Meaningful Impact"
                  />
                </h2>
                <p className="text-sm leading-relaxed text-blue-50 sm:text-base">
                  <LocalizedText
                    id="Terbuka untuk peluang karier dan proyek di bidang Data Analytics, BI, Data Engineering, dan AI. Mari berdiskusi!"
                    en="Open to career opportunities and projects across Data Analytics, BI, Data Engineering, and AI. Let's connect!"
                  />
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={`mailto:${site.email}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-blue-700 shadow-md transition-all hover:bg-blue-50 hover:scale-105"
                >
                  <Mail className="h-4 w-4" />
                  <span>{site.email}</span>
                </Link>
                <Link
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white transition-all hover:bg-white/20"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </section>
    </>
  );
}
