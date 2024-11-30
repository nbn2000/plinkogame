import gamble from "../../assets/18+.png";
import mga from "../../assets/mga.png";
import kahnawake from "../../assets/kahnawake.png";
import curacao from "../../assets/gaming-curacao.webp";
import beGambleAware from "../../assets/be-gamble-aware.png";
import only18 from "../../assets/only-18+.png";
import { Link } from "react-router-dom";
import useLocales from "/src/hooks/useLocales";
const emblems = [gamble, mga, kahnawake, curacao];

const words = [
  "Responsible Gaming Practice: On our website, we place a strong emphasis on a responsible approach to gaming and strongly encourage our partners to follow this principle. Our main goal is to ensure an engaging and safe experience for online casino players. To maintain control over the gaming process and avoid potential financial difficulties, we advise taking breaks when necessary.",
  "PLAY RESPONSIBLY: plinkogame.cc is an independent platform and is not directly associated with the websites we promote. Before participating in any gambling activities, it’s important to ensure you are complying with all relevant legal regulations. Please note that our content is provided for informational purposes only. By clicking on the links, you will be directed to external websites, and we do not take responsibility for any outcomes or consequences.",
];

const FooterUpper = () => {
  const { t } = useLocales();
  return (
    <div className="w-full container mx-auto flex justify-center items-center flex-col gap-[27px]  py-[45px]">
      <div className="w-full justify-between  flex items-center gap-3 flex-wrap max-w-[800px] mx-auto pt-[60px]">
        {exLinks.map((i, idx) => (
          <Link
            key={idx}
            to={i.link}
            className="underline leading-[23.2px] mx-auto text-[16px] font-[400] text-[#7F8C8D]"
          >
            {t(i.name)}
          </Link>
        ))}
      </div>
      <div className="flex justify-between w-full items-center flex-wrap mx-auto">
        {emblems.map((i, idx) => (
          <img src={i} alt={idx} key={idx} width={275} className="mx-auto" />
        ))}
      </div>
      <div className="flex justify-between w-full items-start gap-2 flex-wrap md:flex-nowrap">
        {words.map((i, idx) => (
          <p
            key={idx}
            className="max-w-[570px] mx-auto w-full font-[400] text-[16px] leading-[23.2px] text-[#7F8C8D]"
          >
            {t(i)}
          </p>
        ))}
      </div>
      <div className="flex justify-center w-full items-start gap-2">
        <p className="max-w-[450px] w-full text-center font-[400] text-[16px] leading-[23.2px] text-[#7F8C8D]">
          {t(
            "18+, For new customers only, T&Cs apply, Play responsibly. Copyright 2024 © plinkogame.cc"
          )}
        </p>
      </div>
    </div>
  );
};

const FooterDownSide = () => (
  <div className="max-w-[1170px] mx-auto w-full flex justify-between items-center flex-wrap gap-3">
    <span className="text-[#777777] font-[400] text-[12px] leading-[12px]">
      Copyright 2024 © plinkogame.cc
    </span>
    <div className="flex justify-center items-center gap-[20px]">
      <img src={only18} alt="18 +" />
      <img src={beGambleAware} alt="be aware of gamble" />
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="flex justify-center items-center flex-col w-full">
      <div className="bg-[#F1F3F4] w-full  md:px-[60px] px-4">
        <FooterUpper />
      </div>
      <div className="bg-[#111111] md:px-[60px] px-4 w-full py-[15px]">
        <FooterDownSide />
      </div>
    </footer>
  );
};

const exLinks = [
  { name: "Cookie Policy", link: "/cookie-policy" },
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "About Us", link: "/about-us" },
  { name: "Contact us", link: "/contact-us" },
];

export default Footer;
