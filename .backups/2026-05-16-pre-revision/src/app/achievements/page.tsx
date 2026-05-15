import { BadgeCheck, Sparkles, Trophy } from "lucide-react";

import { AnimatedReveal } from "@/components/animated-reveal";
import { PageHeading } from "@/components/page-heading";
import { achievements } from "@/data/portfolio";
import LocalizedText from "@/components/localized-text";

export const metadata = {
  title: "Achievement",
  description: "Highlights, finalist status, and proof points from Farrel Julio Akbar.",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHeading
        eyebrow={<LocalizedText id={"Achievement"} en={"Achievements"} />}
        title={<LocalizedText id={"Proof points that support the story behind the portfolio."} en={"Proof points that support the story behind the portfolio."} />}
        description={<LocalizedText id={"Halaman ini sengaja dibuat lebih ringkas dan berfokus pada pengakuan, pengaruh, dan signpost yang membuat profilmu lebih kredibel."} en={"This page focuses on recognition, impact, and signals that make the profile credible."} />}
      />

      <section className="grid gap-4 md:grid-cols-3">
        {achievements.map((item, index) => (
          <AnimatedReveal key={item.title} delay={index * 0.08}>
            <div className="glass-card h-full rounded-[2rem] p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
                <Trophy className="h-4 w-4" />
                <LocalizedText id={item.type} en={(item as any).typeEn} />
              </div>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-slate-950"><LocalizedText id={item.title} en={(item as any).titleEn} /></h2>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]"><LocalizedText id={item.description} en={(item as any).descriptionEn} /></p>
            </div>
          </AnimatedReveal>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <AnimatedReveal>
          <div className="glass-card h-full rounded-[2rem] p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
              <BadgeCheck className="h-4 w-4" />
              <LocalizedText id={"Why this section matters"} en={"Why this section matters"} />
            </div>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
              <LocalizedText id={"Pencapaian bukan cuma untuk pamer. Di portfolio, achievement membantu recruiter atau collaborator melihat sinyal kualitas dalam waktu singkat."} en={"Achievements are not just for show. In a portfolio, they help recruiters or collaborators see quality signals quickly."} />
            </p>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <div className="glass-card h-full rounded-[2rem] p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
              <Sparkles className="h-4 w-4" />
              <LocalizedText id={"Future proof section"} en={"Future proof section"} />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { id: "Certificates", en: "Certificates" },
                { id: "Hackathon wins", en: "Hackathon wins" },
                { id: "Conference or community recognition", en: "Conference or community recognition" },
                { id: "Publication or article highlights", en: "Publication or article highlights" },
              ].map((item) => (
                <div key={item.id} className="rounded-3xl border border-[color:var(--border)] bg-white/90 p-4 text-sm text-[color:var(--muted)]">
                  <LocalizedText id={item.id} en={item.en} />
                </div>
              ))}
            </div>
          </div>
        </AnimatedReveal>
      </section>
    </>
  );
}
