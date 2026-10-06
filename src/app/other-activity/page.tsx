import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2, Compass, HeartHandshake, Lightbulb, Sparkles, Users } from "lucide-react";

import { AnimatedReveal } from "@/components/animated-reveal";
import { PageHeading } from "@/components/page-heading";
import { leadershipActivities } from "@/data/portfolio";
import LocalizedText from "@/components/localized-text";

export const metadata = {
  title: "Aktivitas & Kepemimpinan | Farrel Julio Akbar",
  description: "Pengalaman kepemimpinan, organisasi kampus ITERA (MAGENTA 22, DAMASKUS, Himpunan), dan kewirausahaan bisnis Farrel Julio Akbar.",
};

export default function OtherActivityPage() {
  return (
    <>
      <PageHeading
        eyebrow={<LocalizedText id="Aktivitas & Kepemimpinan" en="Activities & Leadership" />}
        title={
          <LocalizedText
            id="Kepemimpinan organisasi, koordinasi tim, dan kepemilikan bisnis."
            en="Organizational leadership, team coordination, and business ownership."
          />
        }
        description={
          <LocalizedText
            id="Di luar rekayasa data teknis, saya aktif memimpin kepanitiaan berskala besar, mengoordinasikan komunitas mahasiswa, dan mengelola usaha kuliner keluarga."
            en="Beyond technical engineering, I have actively led large event committees, coordinated student communities, and managed a family culinary enterprise."
          />
        }
      />

      {/* Leadership Activities Grid */}
      <section className="space-y-8">
        <div className="grid gap-8 md:grid-cols-2">
          {leadershipActivities.map((act, idx) => (
            <AnimatedReveal key={act.title} delay={idx * 0.08}>
              <div className="glass-card group flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-[color:var(--border)] bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50">
                <div className="space-y-5">
                  {/* Photo with caption */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-950/5">
                    <Image
                      src={act.image}
                      alt={act.titleEn}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-900 shadow-sm backdrop-blur-xs">
                      <LocalizedText id={act.role} en={act.roleEn} />
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1 font-semibold text-[color:var(--accent)]">
                        <Users className="h-3.5 w-3.5" />
                        <LocalizedText id="Kepemimpinan & Organisasi" en="Leadership & Community" />
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <LocalizedText id={act.period} en={act.periodEn} />
                      </span>
                    </div>

                    <h2 className="text-xl font-bold tracking-tight text-slate-950 leading-snug">
                      <LocalizedText id={act.title} en={act.titleEn} />
                    </h2>

                    <p className="text-sm leading-relaxed text-slate-700">
                      <LocalizedText id={act.description} en={act.descriptionEn} />
                    </p>
                  </div>
                </div>

                {/* Key Takeaway */}
                <div className="mt-5 rounded-2xl bg-blue-50/60 p-4 border border-blue-100/70 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[color:var(--accent)]">
                    <Lightbulb className="h-3.5 w-3.5" />
                    <LocalizedText id="Pembelajaran Utama:" en="Key Takeaway:" />
                  </div>
                  <p className="text-xs leading-relaxed text-slate-800">
                    <LocalizedText id={act.keyTakeaway} en={act.keyTakeawayEn} />
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      {/* Leadership Philosophy Banner */}
      <AnimatedReveal>
        <div className="glass-card rounded-[2.5rem] border border-[color:var(--border)] bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3.5 py-1 text-xs font-semibold text-blue-300 border border-blue-400/30">
              <Compass className="h-3.5 w-3.5" />
              <LocalizedText id="Filosofi Kerja" en="Work Philosophy" />
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              <LocalizedText
                id="Menjembatani Eksekusi Teknis dengan Komunikasi Manusiawi"
                en="Bridging Technical Execution with Human Connection"
              />
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300">
              <LocalizedText
                id="Pengalaman memimpin kepanitiaan dan mengelola usaha langsung di hadapan pelanggan mengajarkan saya bahwa kode dan data terbaik sekalipun hanya akan berdampak ketika didukung oleh komunikasi tim yang transparan, empati pemangku kepentingan, dan eksekusi yang disiplin."
                en="Leading student committees and managing a real-world business taught me that even the most sophisticated data pipelines only deliver value when powered by clear team communication, stakeholder empathy, and disciplined execution."
              />
            </p>
          </div>
        </div>
      </AnimatedReveal>
    </>
  );
}
