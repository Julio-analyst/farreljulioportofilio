"use client";

import { useLanguage } from "./language-provider";

export default function LocalizedText({ id, en }: { id: string; en?: string }) {
  const { lang } = useLanguage();
  return <>{lang === "en" && en ? en : id}</>;
}
