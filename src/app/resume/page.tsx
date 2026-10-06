import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Award, Briefcase, Calendar, CheckCircle2, Download, FileDown, GraduationCap, Layers, MapPin, Sparkles } from "lucide-react";

import { AnimatedReveal } from "@/components/animated-reveal";
import { PageHeading } from "@/components/page-heading";
import { educationHistory, site, skills, workHistory } from "@/data/portfolio";
import LocalizedText from "@/components/localized-text";

export const metadata = {
  title: "Resume & Pengalaman Profesional | Farrel Julio Akbar",
  description: "Riwayat pengalaman kerja di Bank Indonesia dan Telkom Indonesia, pendidikan Sains Data ITERA (IPK 3.00), serta peta kompetensi teknis Farrel Julio Akbar.",
};

export default function ResumePage() {
  return (
    <>
      <PageHeading
        eyebrow={<LocalizedText id="Resume Profesional" en="Professional Resume" />}
        title={
          <LocalizedText
            id="Rekam jejak pengalaman, kontribusi nyata, dan kompetensi teknis."
            en="Career background, proven contributions, and technical competencies."
          />
        }
        description={
          <LocalizedText
            id="Ringkasan pengalaman di perbankan sentral (Bank Indonesia), telekomunikasi (Telkom Indonesia), kewirausahaan bisnis, serta pendidikan Sains Data ITERA."
            en="Detailed background spanning central banking (Bank Indonesia), telecommunications (Telkom Indonesia), business ownership, and Data Science degree."
          />
        }
        ctaLabel="Download CV (PDF)"
        ctaHref={site.cvPath}
      />

      {/* Professional Overview Card */}
      <AnimatedReveal>
        <div className="glass-card rounded-[2.5rem] border border-[color:var(--border)] bg-white/95 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent-soft)] px-3.5 py-1 text-xs font-semibold text-[color:var(--accent)]">
                <Sparkles className="h-3.5 w-3.5" />
                <LocalizedText id="Profil Ringkas" en="Executive Summary" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950">
                {site.name} — <LocalizedText id={site.role} en={site.roleEn} />
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                <LocalizedText id={site.bio} en={site.bioEn} />
              </p>
            </div>

            <div className="flex flex-col gap-2 shrink-0 sm:flex-row lg:flex-col text-xs font-medium text-slate-700">
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 px-3.5 py-2">
                <span className="font-bold text-slate-900 block">Status:</span>
                <LocalizedText id="Lulusan Sarjana Sains Data (SKL Terbit)" en="Data Science Graduate (Degree Complete)" />
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 px-3.5 py-2">
                <span className="font-bold text-slate-900 block">IPK:</span>
                <span>3,00 / 4,00</span>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 px-3.5 py-2">
                <span className="font-bold text-slate-900 block">Bahasa Inggris:</span>
                <span>Institutional TOEFL 590</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedReveal>

      {/* Work Experience Timeline */}
      <section className="space-y-6">
        <AnimatedReveal>
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[color:var(--accent)]">
            <Briefcase className="h-4 w-4" />
            <LocalizedText id="Pengalaman Profesional" en="Work Experience" />
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            <LocalizedText id="Riwayat Karier & Kontribusi Nyata" en="Career History & Measurable Impact" />
          </h2>
        </AnimatedReveal>

        <div className="space-y-6">
          {workHistory.map((job, idx) => (
            <AnimatedReveal key={idx} delay={idx * 0.08}>
              <div className="glass-card rounded-[2rem] border border-[color:var(--border)] bg-white p-6 sm:p-8 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                      {job.company}
                    </h3>
                    <p className="text-sm font-semibold text-[color:var(--accent)] mt-0.5">
                      <LocalizedText id={job.role} en={job.roleEn} />
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                      <Calendar className="h-3 w-3" />
                      <LocalizedText id={job.period} en={job.periodEn} />
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <span className="text-[color:var(--accent)] mt-1.5 shrink-0 text-xs">◆</span>
                      <span>
                        <LocalizedText id={bullet} en={job.bulletsEn[bIdx]} />
                      </span>
                    </li>
                  ))}
                </ul>

                {idx === 0 && (
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      <LocalizedText id="Proyek terkait: EWS Harga Pangan" en="Related project: Food Price EWS" />
                    </span>
                    <Link
                      href="/portfolio/food-price-monitoring-ews"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[color:var(--accent)] hover:underline"
                    >
                      <LocalizedText id="Lihat Studi Kasus EWS" en="View EWS Case Study" />
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )}

                {idx === 1 && (
                  <div className="mt-5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs text-slate-500 font-medium">
                      <LocalizedText id="Proyek terkait: RAG Chatbot & Debezium CDC" en="Related projects: RAG Chatbot & Debezium CDC" />
                    </span>
                    <div className="flex items-center gap-3">
                      <Link
                        href="/portfolio/rag-chatbot-knowledge-automation"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[color:var(--accent)] hover:underline"
                      >
                        <LocalizedText id="Studi Kasus RAG" en="RAG Case Study" />
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        href="/portfolio/debezium-cdc-replication-benchmarking"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[color:var(--accent)] hover:underline"
                      >
                        <LocalizedText id="Studi Kasus CDC" en="CDC Case Study" />
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      {/* Skills Map */}
      <section className="space-y-6">
        <AnimatedReveal>
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[color:var(--accent)]">
            <Layers className="h-4 w-4" />
            <LocalizedText id="Peta Keterampilan Teknis" en="Technical Skills Map" />
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            <LocalizedText id="Keahlian Berdasarkan Bukti Nyata" en="Competencies Mapped to Practical Delivery" />
          </h2>
          <p className="mt-1 text-sm text-[color:var(--muted)]">
            <LocalizedText
              id="Dikelompokkan secara profesional tanpa persentase arbitrer; setiap keahlian didukung oleh proyek teruji."
              en="Structured professionally without arbitrary percentage bars; every skill is grounded in shipped work."
            />
          </p>
        </AnimatedReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group, gIdx) => (
            <AnimatedReveal key={group.category} delay={gIdx * 0.08}>
              <div className="glass-card h-full rounded-[2rem] border border-[color:var(--border)] bg-white p-6 sm:p-7 shadow-xs">
                <h3 className="text-lg font-bold text-slate-950">
                  <LocalizedText id={group.category} en={group.categoryEn} />
                </h3>
                <p className="mt-1 text-xs text-[color:var(--muted)]">
                  <LocalizedText id={group.summary} en={group.summaryEn} />
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50/80 px-3.5 py-1 text-xs font-semibold text-slate-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <AnimatedReveal>
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[color:var(--accent)]">
            <GraduationCap className="h-4 w-4" />
            <LocalizedText id="Pendidikan Formal" en="Formal Education" />
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            <LocalizedText id="Latar Belakang Akademik" en="Academic Background" />
          </h2>
        </AnimatedReveal>

        <div className="space-y-4">
          {educationHistory.map((edu, idx) => (
            <AnimatedReveal key={idx} delay={idx * 0.08}>
              <div className="glass-card rounded-[2rem] border border-[color:var(--border)] bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950">{edu.school}</h3>
                    <p className="text-sm font-semibold text-[color:var(--accent)] mt-0.5">
                      <LocalizedText id={edu.degree} en={edu.degreeEn} />
                    </p>
                    <p className="text-xs font-medium text-emerald-700 mt-1">
                      <LocalizedText id={edu.status} en={edu.statusEn} />
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800">
                      <LocalizedText id={edu.period} en={edu.periodEn} />
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-1">
                      <LocalizedText id={edu.gpa} en={edu.gpaEn} />
                    </p>
                  </div>
                </div>

                {edu.thesis && (
                  <div className="mt-4 rounded-2xl bg-blue-50/50 p-4 border border-blue-100">
                    <span className="text-xs font-bold text-[color:var(--accent)] uppercase tracking-wider block">
                      <LocalizedText id="Judul Tugas Akhir / Penelitian:" en="Bachelor Thesis / Research:" />
                    </span>
                    <p className="text-sm font-medium text-slate-800 mt-1 italic">
                      &ldquo;<LocalizedText id={edu.thesis} en={edu.thesisEn} />&rdquo;
                    </p>
                  </div>
                )}

                {edu.coursework.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      <LocalizedText id="Mata Kuliah Relevan:" en="Relevant Coursework:" />
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-700"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>
    </>
  );
}
