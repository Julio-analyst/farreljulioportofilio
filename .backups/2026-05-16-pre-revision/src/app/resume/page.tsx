import Link from "next/link";
import { ArrowRight, BadgeCheck, GraduationCap, Layers3, Sparkles } from "lucide-react";

import { AnimatedReveal } from "@/components/animated-reveal";
import { PageHeading } from "@/components/page-heading";
import { educationHistory, organizationHistory, resumeSections, skills, site, workHistory } from "@/data/portfolio";
import LocalizedText from "@/components/localized-text";

export const metadata = {
  title: "Resume",
  description: "Ringkasan profil, pendidikan, skills, dan arah karier Farrel Julio Akbar.",
};

export default function ResumePage() {
  return (
    <>
      <PageHeading
        eyebrow={"Resume"}
        title={"A clean snapshot of my background, focus, and current direction."}
        description={"Halaman ini dirancang agar recruiter atau collaborator bisa cepat menangkap siapa saya, apa yang saya bangun, dan mengapa saya relevan untuk project AI/data."}
        ctaLabel={"Download CV"}
        ctaHref={site.cvPath}
      />

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <AnimatedReveal>
          <div className="glass-card h-full rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
              <BadgeCheck className="h-4 w-4" />
              <LocalizedText id={"Profile summary"} en={"Profile summary"} />
            </div>
            <div className="mt-4 space-y-4">
              <div className="rounded-3xl border border-[color:var(--border)] bg-white/90 p-5">
                <h3 className="text-sm font-semibold text-slate-950">About</h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]"><LocalizedText id={site.bio} en={site.bioEn} /></p>
              </div>
              {resumeSections.map((item) => (
                <div key={item.title} className="rounded-3xl border border-[color:var(--border)] bg-white/90 p-5">
                  <h2 className="text-lg font-semibold text-slate-950"><LocalizedText id={item.title} en={item.title} /></h2>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]"><LocalizedText id={item.description} en={(item as any).descriptionEn} /></p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-3xl bg-blue-50 p-5 text-sm leading-7 text-slate-700">
              <p className="font-semibold text-slate-950"><LocalizedText id={"How to read this resume"} en={"How to read this resume"} /></p>
              <p className="mt-2">
                <LocalizedText id={"Fokus saya ada pada data storytelling, pipeline design, dan AI apps that solve real problems."} en={"My focus is on data storytelling, pipeline design, and AI apps that solve real problems."} />
                <br />
                <LocalizedText id={"If you view this as a recruiter, the page is intentionally quick to scan."} en={"If you view this as a recruiter, the page is intentionally quick to scan."} />
              </p>
            </div>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.12}>
          <div className="glass-card h-full rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
              <Layers3 className="h-4 w-4" />
              Skills map
            </div>

            <div className="mt-5 grid gap-4">
              {skills.map((group) => (
                <div key={group.category} className="rounded-3xl border border-[color:var(--border)] bg-white/90 p-5">
                  <p className="text-sm font-semibold text-slate-950">{group.category}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-medium text-[color:var(--accent)]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedReveal>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <AnimatedReveal>
          <div className="glass-card rounded-[2rem] p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
              <GraduationCap className="h-4 w-4" />
              Education
            </div>
            <div className="mt-4 space-y-4 text-sm leading-6 text-[color:var(--muted)]">
              {educationHistory.map((item) => (
                <div key={item.school} className="rounded-3xl border border-[color:var(--border)] bg-white/90 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-slate-950">{item.school}</p>
                      <p>{item.detail}</p>
                    </div>
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">{item.note}</p>
                  </div>
                  <p className="mt-2 text-xs font-medium text-[color:var(--accent)]">{item.period}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.08}>
          <div className="glass-card rounded-[2rem] p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
              <Sparkles className="h-4 w-4" />
              Strengths
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[color:var(--muted)]">
              <li>• AI projects that feel practical, not just experimental.</li>
              <li>• Strong link between code, data, and business context.</li>
              <li>• Comfortable turning ideas into dashboards or apps.</li>
            </ul>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.16}>
          <div className="glass-card rounded-[2rem] p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
              <ArrowRight className="h-4 w-4" />
              Next step
            </div>
            <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
              If you want a more detailed version later, we can expand this page into a timeline with internship,
              organization, certification, and downloadable PDF CV.
            </p>
            <Link
              href="/portfolio"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              See portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedReveal>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <AnimatedReveal>
          <div className="glass-card h-full rounded-[2rem] p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
              <BadgeCheck className="h-4 w-4" />
              Work experience
            </div>
            <div className="mt-4 space-y-4">
              {workHistory.map((item) => (
                <div key={item.company} className="rounded-3xl border border-[color:var(--border)] bg-white/90 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-slate-950">{item.company}</p>
                      <p className="text-sm text-[color:var(--accent)]">{item.role}</p>
                    </div>
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">{item.period}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.08}>
          <div className="glass-card h-full rounded-[2rem] p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
              <Sparkles className="h-4 w-4" />
              Organizational experience
            </div>
            <div className="mt-4 space-y-4">
              {organizationHistory.map((item) => (
                <div key={item.organization} className="rounded-3xl border border-[color:var(--border)] bg-white/90 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-slate-950">{item.organization}</p>
                      <p className="text-sm text-[color:var(--accent)]">{item.role}</p>
                    </div>
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">{item.period}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedReveal>
      </section>
    </>
  );
}
