import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import it from "./it.json";
import nl from "./nl.json";
import pt from "./pt.json";
import de from "./de.json";
import fr from "./fr.json";
import es from "./es.json";
import pl from "./pl.json";
import tr from "./tr.json";
import cs from "./cs.json";
import hi from "./hi.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: en },
      it: { translations: it },
      nl: { translations: nl },
      pt: { translations: pt },
      de: { translations: de },
      fr: { translations: fr },
      es: { translations: es },
      pl: { translations: pl },
      tr: { translations: tr },
      cs: { translations: cs },
      hi: { translations: hi },
    },
    lng: localStorage.getItem("i18nextLng") || "en",
    fallbackLng: "en",
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
