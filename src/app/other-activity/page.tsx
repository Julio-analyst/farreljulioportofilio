import { ArrowRight, CircleSlash2, MessagesSquare, NotebookPen, Users } from "lucide-react";

import { AnimatedReveal } from "@/components/animated-reveal";
import { PageHeading } from "@/components/page-heading";
import { activityPillars } from "@/data/portfolio";
import LocalizedText from "@/components/localized-text";

export const metadata = {
  title: "Other Activity",
  description: "Community presence, learning in public, and other non-project activities.",
};

export default function OtherActivityPage() {
  return (
    <>
      <PageHeading
        eyebrow={<LocalizedText id={"Other Activity"} en={"Other Activity"} />}
        title={<LocalizedText id={"The rest of the story beyond projects."} en={"The rest of the story beyond projects."} />}
        description={<LocalizedText id={"Halaman ini memberi ruang untuk hal-hal yang sering membuat profile lebih manusiawi: komunitas, menulis, berbagi, mentoring, atau aktivitas lain yang mendukung growth."} en={"This page makes room for the things that make a profile feel more human: community, writing, sharing, mentoring, and other growth-oriented activity."} />}
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {activityPillars.map((item, index) => (
          <AnimatedReveal key={item.title} delay={index * 0.07}>
            <div className="glass-card h-full rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                {index === 0 ? <NotebookPen className="h-5 w-5" /> : null}
                {index === 1 ? <Users className="h-5 w-5" /> : null}
                {index === 2 ? <MessagesSquare className="h-5 w-5" /> : null}
                {index === 3 ? <CircleSlash2 className="h-5 w-5" /> : null}
              </div>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
                <LocalizedText id={item.title} en={item.titleEn} />
              </h2>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                <LocalizedText id={item.description} en={item.descriptionEn} />
              </p>
            </div>
          </AnimatedReveal>
        ))}
      </section>

      {/* Removed 'How to use this page' and 'Suggested structure' panels as requested. */}
    </>
  );
}
