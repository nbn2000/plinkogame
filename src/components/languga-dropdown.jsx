import { useState, useMemo } from "react";
import en from "../assets/lang/en.png";
import it from "../assets/lang/it.png";
import nl from "../assets/lang/nl.png";
import pt from "../assets/lang/pt.png";
import de from "../assets/lang/de.png";
import fr from "../assets/lang/fr.png";
import es from "../assets/lang/es.png";
import pl from "../assets/lang/pl.png";
import tr from "../assets/lang/tr.png";
import cs from "../assets/lang/cs.png";
import hi from "../assets/lang/hi.png";
import useLocales from "../hooks/useLocales";

const languages = [
  { code: "en", label: "English", img: en },
  { code: "it", label: "Italiano", img: it },
  { code: "nl", label: "Nederlands", img: nl },
  { code: "pt", label: "Português", img: pt },
  { code: "de", label: "Deutsch", img: de },
  { code: "fr", label: "Français", img: fr },
  { code: "es", label: "Español", img: es },
  { code: "pl", label: "Polski", img: pl },
  { code: "tr", label: "Türkçe", img: tr },
  { code: "cs", label: "Čeština", img: cs },
  { code: "hi", label: "हिन्दी", img: hi },
];

const LangugaDropdown = ({ isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { onChangeLang, i18n } = useLocales();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (idx) => {
    onChangeLang(languages[idx].code);
    setIsOpen(false);
  };

  const currentLanguage = useMemo(
    () => languages.find((language) => language.code === i18n.language),
    [i18n.language]
  );
  return (
    <div className={`relative inline-block text-left ${isMobile && "w-full"}`}>
      <button
        onClick={toggleDropdown}
        className={`flex items-center gap-1 ${
          isMobile ? "justify-between w-full" : "justify-center"
        }  px-2 py-1 text-[16px] leading-4 font-normal`}
      >
        <img
          src={currentLanguage?.img}
          alt={currentLanguage?.code}
          className="w-5 h-5"
        />
        {currentLanguage?.label}
        <svg
          className={` transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          width={20}
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className={` ${
            isMobile ? "block w-full max-h-[200px] overflow-y-auto" : "absolute"
          } right-0 z-10 w-40 mt-2 origin-top-right bg-white border border-gray-300 divide-y divide-gray-200 rounded-lg shadow-lg ${
            isOpen ? "animate-dropdownOpen" : "animate-dropdownClose"
          }`}
        >
          {languages.map((language, idx) => (
            <button
              key={idx}
              onClick={() => selectLanguage(idx)}
              className="w-full px-4 py-2 text-left flex justify-start items-center gap-3 hover:bg-gray-100"
            >
              <img src={language.img} alt={language.code} /> {language.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangugaDropdown;
