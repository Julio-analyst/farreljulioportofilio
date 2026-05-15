"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Lang = "id" | "en";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({
  lang: "id",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const q = params.get("lang");
      if (q === "en" || q === "id") {
        setLangState(q);
        try {
          localStorage.setItem("lang", q);
        } catch (e) {}
        return;
      }

      const stored = localStorage.getItem("lang") as Lang | null;
      if (stored === "en" || stored === "id") {
        setLangState(stored);
        return;
      }

      const nav = navigator.language;
      if (nav && nav.startsWith("en")) setLangState("en");
      else setLangState("id");
    } catch (e) {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch (e) {}
    try {
      const params = new URLSearchParams(window.location.search);
      params.set("lang", l);
      const q = params.toString();
      const newUrl = q ? `${window.location.pathname}?${q}` : window.location.pathname;
      window.history.replaceState(null, "", newUrl);
    } catch (e) {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export default LanguageProvider;
