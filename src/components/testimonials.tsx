"use client";

import { useRef } from "react";
import LocalizedText from "@/components/localized-text";

type Testimonial = {
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  issuer?: string;
  issuerRole?: string;
};

export default function Testimonials({ items }: { items: Testimonial[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  function scrollByOffset(offset: number) {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: offset, behavior: "smooth" });
  }

  if (!items || items.length === 0) return null;

  return (
    <div className="relative">
      <button
        aria-label="Scroll left"
        className="absolute -left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-md ring-1 ring-[color:var(--accent-soft)] hover:bg-[color:var(--accent-soft)]/30"
        onClick={() => scrollByOffset(-360)}
      >
        <span className="sr-only">Previous</span>
        <span className="text-[color:var(--accent)] text-2xl">←</span>
      </button>

      <div
        ref={containerRef}
        className="no-scrollbar mx-auto flex gap-6 overflow-x-auto px-6 py-4 touch-pan-x scroll-smooth"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {items.map((item) => (
          <article key={item.title} className="min-w-[360px] max-w-[760px] flex-shrink-0 rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="h-full w-1 rounded-l-2xl bg-[color:var(--accent)]" />
              <div className="pl-4">
                <div className="text-3xl text-[color:var(--accent)]">“</div>
                <p className="mt-3 text-lg italic leading-8 text-[color:var(--muted)]">
                  <LocalizedText id={item.description} en={item.descriptionEn ?? item.description} />
                </p>

                <div className="mt-6">
                  {item.issuer && <p className="text-lg font-semibold text-[color:var(--accent)]">- {item.issuer}</p>}
                  {item.issuerRole && <p className="mt-1 text-sm text-[color:var(--muted)]">{item.issuerRole}</p>}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        aria-label="Scroll right"
        className="absolute -right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[color:var(--accent)] p-3 text-white shadow-md hover:brightness-90"
        onClick={() => scrollByOffset(360)}
      >
        <span className="sr-only">Next</span>
        <span className="text-2xl">→</span>
      </button>
    </div>
  );
}
