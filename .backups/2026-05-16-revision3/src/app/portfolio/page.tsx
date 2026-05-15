import Link from "next/link";
import { ArrowRight, Code2, Sparkles } from "lucide-react";

import { AnimatedReveal } from "@/components/animated-reveal";
import { PageHeading } from "@/components/page-heading";
import { featuredProjects, repositoryGroups } from "@/data/portfolio";
import LocalizedText from "@/components/localized-text";

export const metadata = {
  title: "Portfolio",
  description: "Selected projects and case-study style summaries from Farrel Julio Akbar.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeading
        eyebrow={"Portfolio"}
        title={"Selected work that shows how I think, build, and communicate impact."}
        description={"Saya fokus pada project yang bisa dibaca sebagai kasus nyata: masalahnya apa, pendekatan saya bagaimana, dan value apa yang dihasilkan."}
      />

      <section className="grid gap-5">
        {featuredProjects.map((project, index) => (
          <AnimatedReveal key={project.title} delay={index * 0.08}>
            <Link
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="glass-card group block rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100 sm:p-7"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-medium text-[color:var(--accent)]">
                        <LocalizedText id={project.category} en={(project as any).categoryEn} />
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        <LocalizedText id={project.impact} en={(project as any).impactEn} />
                      </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                      <LocalizedText id={project.title} en={(project as any).titleEn} />
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-[color:var(--muted)] sm:text-base">
                      <LocalizedText id={project.summary} en={(project as any).summaryEn} />
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors group-hover:text-[color:var(--accent)]">
                  Open project
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-[color:var(--border)] bg-white px-3 py-1 text-xs font-medium text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </Link>
          </AnimatedReveal>
        ))}
      </section>

      <section className="space-y-6">
        <AnimatedReveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-[color:var(--accent)]">
                <LocalizedText id={"Repository library"} en={"Repository library"} />
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                <LocalizedText id={"All repos grouped by focus"} en={"All repos grouped by focus"} />
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-[color:var(--muted)]">
              <LocalizedText id={"Gambar, video, dan link detail bisa ditambahkan nanti tanpa mengubah struktur section ini."} en={"Images, video, and detail links can be added later without changing this section structure."} />
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid gap-6">
          {repositoryGroups.map((group, groupIndex) => (
            <AnimatedReveal key={group.title} delay={groupIndex * 0.06}>
              <div className="glass-card rounded-[2rem] p-6 sm:p-7">
                <div className="flex flex-col gap-2 border-b border-[color:var(--border)] pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-[color:var(--accent)]">
                      <LocalizedText id={group.title} en={group.titleEn} />
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                      <LocalizedText id={group.description} en={group.descriptionEn} />
                    </h3>
                  </div>
                  <p className="text-sm text-[color:var(--muted)]">
                    <LocalizedText id={"Ready for media assets later"} en={"Ready for media assets later"} />
                  </p>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {group.repos.map((repo) => (
                    <Link key={repo.name} href={repo.href} target="_blank" rel="noreferrer" className="group rounded-3xl border border-[color:var(--border)] bg-white/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="text-lg font-semibold text-slate-950">{repo.name}</h4>
                          <ArrowRight className="h-4 w-4 shrink-0 text-slate-500 transition-transform group-hover:translate-x-1" />
                        </div>
                        <p className="text-sm leading-6 text-[color:var(--muted)]">
                          <LocalizedText id={repo.summary} en={repo.summaryEn} />
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {repo.stack.map((item) => (
                            <span key={item} className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-medium text-[color:var(--accent)]">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <AnimatedReveal>
          <div className="glass-card h-full rounded-[2rem] p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
              <Code2 className="h-4 w-4" />
              <LocalizedText id={"Case study format"} en={"Case study format"} />
            </div>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
              <LocalizedText id={"Saat kamu menambah project baru, pakai format ini agar portfolio tetap mudah dibaca:"} en={"When adding a new project, use this format so the portfolio remains easy to read:"} />
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[color:var(--muted)]">
              <li>• <LocalizedText id={"Problem or opportunity"} en={"Problem or opportunity"} /></li>
              <li>• <LocalizedText id={"Why this approach"} en={"Why this approach"} /></li>
              <li>• <LocalizedText id={"Tech stack"} en={"Tech stack"} /></li>
              <li>• <LocalizedText id={"Output / result"} en={"Output / result"} /></li>
              <li>• <LocalizedText id={"Link to demo or repo"} en={"Link to demo or repo"} /></li>
            </ul>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <div className="glass-card h-full rounded-[2rem] p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
              <Sparkles className="h-4 w-4" />
              <LocalizedText id={"Suggested additions"} en={"Suggested additions"} />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { id: "Project screenshots", en: "Project screenshots" },
                { id: "Short demo video", en: "Short demo video" },
                { id: "Problem/solution bullets", en: "Problem/solution bullets" },
                { id: "Impact metrics", en: "Impact metrics" },
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
