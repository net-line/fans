import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
i18next
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    lng: "de",
    supportedLngs: ["en", "de"],
    // Allows "en-US" and "en-UK" to be implcitly supported when "en"
    // is supported
    nonExplicitSupportedLngs: true,
    fallbackLng: "de",
    interpolation: {
      escapeValue: false,
    },
    debug: process.env.NODE_ENV === "development",
  });
export default i18next;
