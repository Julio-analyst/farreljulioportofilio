import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ReactNode } from "react";

type PageHeadingProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  ctaLabel?: ReactNode;
  ctaHref?: string;
};

export function PageHeading({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: PageHeadingProps) {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl space-y-4">
        <p className="inline-flex w-fit items-center rounded-full border border-[color:var(--border)] bg-white/80 px-4 py-2 text-sm font-medium text-[color:var(--accent)] shadow-sm">
          {eyebrow}
        </p>
        <div className="space-y-3">
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[color:var(--muted)] sm:text-lg">
            {description}
          </p>
        </div>
      </div>

      {ctaLabel && ctaHref ? (
        <Link
          href={ctaHref}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] px-5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
        >
          {ctaLabel}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
}
