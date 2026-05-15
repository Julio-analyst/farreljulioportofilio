"use client";

import Image from "next/image";
import { useState } from "react";
import LocalizedText from "./localized-text";

type Certificate = {
  title: string;
  titleEn: string;
  issuer: string;
  issuerEn: string;
  published?: string;
  credentialId?: string;
  description?: string;
  descriptionEn?: string;
  skills?: string[];
};

export default function CertificatesGallery({ certificates }: { certificates: Certificate[] }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-6">
      <div className="-mx-5 overflow-x-auto px-5">
        <div className="flex w-max gap-4 py-2">
          {certificates.map((c, i) => (
            <button
              key={c.title + i}
              onClick={() => setSelected(i)}
              className={
                `min-w-[18rem] max-w-[20rem] rounded-2xl border p-5 text-left transition-shadow duration-200 ` +
                (i === selected
                  ? "border-blue-200 bg-white shadow-lg"
                  : "border-[color:var(--border)] bg-white/90 hover:shadow-md")
              }
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium text-[color:var(--accent)]">
                  <LocalizedText id={c.issuer} en={c.issuerEn} />
                </p>
                <span className="rounded-full bg-[color:var(--accent-soft)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">
                  {c.published}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold leading-6 text-slate-950">
                <LocalizedText id={c.title} en={c.titleEn} />
              </h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)] line-clamp-3">
                <LocalizedText id={c.description ?? ""} en={c.descriptionEn ?? ""} />
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-[color:var(--border)] bg-white/95 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-[color:var(--accent)]">
              <LocalizedText id={certificates[selected].issuer} en={certificates[selected].issuerEn} />
            </p>
            <h3 className="mt-1 text-xl font-semibold text-slate-950">
              <LocalizedText id={certificates[selected].title} en={certificates[selected].titleEn} />
            </h3>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              <LocalizedText id={certificates[selected].description ?? ""} en={certificates[selected].descriptionEn ?? ""} />
            </p>
          </div>
          <div className="flex-shrink-0 text-right">
            <p className="text-sm font-medium text-slate-600">{certificates[selected].published}</p>
            {certificates[selected].credentialId && (
              <p className="mt-2 text-xs font-mono text-slate-500">{certificates[selected].credentialId}</p>
            )}
          </div>
        </div>

        {certificates[selected].skills?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {certificates[selected].skills!.map((s) => (
              <span key={s} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                {s}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
