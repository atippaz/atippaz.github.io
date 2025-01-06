import type { AstroGlobal } from "astro";
import { translations } from "../i18n";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export const getLanguage = (): string => {
  return localStorage.getItem("language") || "en";
};

export const setLanguage = (language: string) => {
  const previosLanguage = language == "en" ? "th" : "en";
  // localStorage.setItem("language", language)
  if (window.location.search.includes("lang")) {
    window.location.search = window.location.search.replace(
      `lang=${previosLanguage}`,
      `lang=${language}`,
    );
    return;
  }
  window.location.search = window.location.search.replace(
    ``,
    `lang=${language}`,
  );
};

export const getTranslations = (language: string) => {
  return translations[language as keyof typeof translations] || translations.en;
};
