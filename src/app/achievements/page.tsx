import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, ExternalLink, Globe, GraduationCap, ShieldCheck, Sparkles, Trophy } from "lucide-react";

import { AnimatedReveal } from "@/components/animated-reveal";
import { PageHeading } from "@/components/page-heading";
import { achievements, certificates } from "@/data/portfolio";
import LocalizedText from "@/components/localized-text";

export const metadata = {
  title: "Prestasi & Sertifikasi | Farrel Julio Akbar",
  description: "Penghargaan kompetisi data nasional RASIO 8.0, semifinalis Enterns UI, TOEFL 590, dan sertifikasi terverifikasi Farrel Julio Akbar.",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHeading
        eyebrow={<LocalizedText id="Pencapaian Resmi" en="Official Honors" />}
        title={
          <LocalizedText
            id="Prestasi kompetisi, kemahiran bahasa, dan kredensial terverifikasi."
            en="Competition honors, language proficiency, and verified credentials."
          />
        }
        description={
          <LocalizedText
            id="Validasi eksternal terhadap kemampuan analitik, pemecahan masalah bisnis, data storytelling, serta sertifikasi teknis."
            en="External validation of analytical competence, strategic business problem-solving, data storytelling, and technical skills."
          />
        }
      />

      {/* Competitions and Honors */}
      <section className="space-y-6">
        <AnimatedReveal>
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[color:var(--accent)]">
            <Trophy className="h-4 w-4" />
            <LocalizedText id="Prestasi Kompetisi & Kemahiran" en="Competitions & Honors" />
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            <LocalizedText id="Hasil Kompetisi & Pengakuan Eksternal" en="Competition Results & External Recognition" />
          </h2>
        </AnimatedReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((item, idx) => (
            <AnimatedReveal key={idx} delay={idx * 0.08}>
              <div className="glass-card flex h-full flex-col justify-between rounded-[2rem] border border-[color:var(--border)] bg-white p-6 sm:p-7 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--accent)]">
                      <Trophy className="h-3 w-3" />
                      <LocalizedText id={item.type} en={item.typeEn} />
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{item.year}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-950">
                      <LocalizedText id={item.title} en={item.titleEn} />
                    </h3>
                    <p className="text-xs font-medium text-[color:var(--muted)] mt-1">
                      {item.organizer}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                    <LocalizedText id={item.description} en={item.descriptionEn} />
                  </p>
                </div>

                {item.relatedProject && (
                  <div className="mt-5 pt-3 border-t border-slate-100">
                    <Link
                      href="https://github.com/Julio-analyst/impact-of-ai-asean"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--accent)] hover:underline"
                    >
                      <LocalizedText id="Lihat Proyek Infografis" en="View Infographic Project" />
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      {/* Curated Technical Certifications */}
      <section className="space-y-6">
        <AnimatedReveal>
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[color:var(--accent)]">
            <ShieldCheck className="h-4 w-4" />
            <LocalizedText id="Sertifikasi Terverifikasi" en="Verified Certifications" />
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            <LocalizedText id="Kredensial Resmi Bidang Data & Cloud" en="Official Data & Cloud Credentials" />
          </h2>
          <p className="mt-1 text-sm text-[color:var(--muted)]">
            <LocalizedText
              id="Sertifikasi kompetensi terpilih dari lembaga kredibel (Google Cloud dan DQLab) dengan ID verifikasi resmi."
              en="Curated competency credentials from trusted institutions (Google Cloud & DQLab) with official verification IDs."
            />
          </p>
        </AnimatedReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, idx) => (
            <AnimatedReveal key={idx} delay={idx * 0.06}>
              <div className="glass-card flex h-full flex-col justify-between rounded-3xl border border-[color:var(--border)] bg-white p-5 sm:p-6 shadow-xs transition-all hover:border-blue-200 hover:shadow-md">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[color:var(--accent)]">{cert.issuer}</span>
                    <span className="text-slate-500">{cert.published}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-950">
                    <LocalizedText id={cert.title} en={cert.titleEn} />
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-600">
                    <LocalizedText id={cert.description} en={cert.descriptionEn} />
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-mono text-slate-500 truncate">
                    ID: {cert.credentialId}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-700 border border-slate-200/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>
    </>
  );
}
