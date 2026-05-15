import { ArrowRight, CircleSlash2, MessagesSquare, NotebookPen, Users } from "lucide-react";

import { AnimatedReveal } from "@/components/animated-reveal";
import { PageHeading } from "@/components/page-heading";
import { activityPillars } from "@/data/portfolio";

export const metadata = {
  title: "Other Activity",
  description: "Community presence, learning in public, and other non-project activities.",
};

export default function OtherActivityPage() {
  return (
    <>
      <PageHeading
        eyebrow="Other Activity"
        title="The rest of the story beyond projects."
        description="Halaman ini memberi ruang untuk hal-hal yang sering membuat profile lebih manusiawi: komunitas, menulis, berbagi, mentoring, atau aktivitas lain yang mendukung growth."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {activityPillars.map((item, index) => (
          <AnimatedReveal key={item.title} delay={index * 0.07}>
            <div className="glass-card h-full rounded-[2rem] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                {index === 0 ? <NotebookPen className="h-5 w-5" /> : null}
                {index === 1 ? <Users className="h-5 w-5" /> : null}
                {index === 2 ? <MessagesSquare className="h-5 w-5" /> : null}
                {index === 3 ? <CircleSlash2 className="h-5 w-5" /> : null}
              </div>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{item.description}</p>
            </div>
          </AnimatedReveal>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <AnimatedReveal>
          <div className="glass-card h-full rounded-[2rem] p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">How to use this page</h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
              Nanti kalau kamu mulai ikut event, mentoring, workshop, komunitas, atau menulis insight di LinkedIn,
              tinggal tambahkan sebagai kartu baru supaya halaman ini tetap hidup.
            </p>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <div className="glass-card h-full rounded-[2rem] p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Suggested structure</h2>
            <div className="mt-5 space-y-3 text-sm leading-6 text-[color:var(--muted)]">
              {[
                "What I shared",
                "Where I shared it",
                "Who benefited from it",
                "Any links or evidence",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-[color:var(--border)] bg-white/90 p-4">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
              Ready to expand
              <ArrowRight className="h-4 w-4" />
            </p>
          </div>
        </AnimatedReveal>
      </section>
    </>
  );
}
