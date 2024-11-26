import gamble from "../../assets/18+.png";
import mga from "../../assets/mga.png";
import kahnawake from "../../assets/kahnawake.png";
import curacao from "../../assets/gaming-curacao.webp";
import beGambleAware from "../../assets/be-gamble-aware.png";
import only18 from "../../assets/only-18+.png";
const emblems = [gamble, mga, kahnawake, curacao];

const words = [
  `
    RESPONSIBLE GAMBLING: At plinkogame.cc, we prioritize responsible gaming
and urge our partners to follow suit. Our main objective is to ensure that online
casino gaming stays a fun and worry-free experience. To maintain control and
prevent potential financial concerns, we encourage taking breaks when needed.
    `,
  `
        PLAY RESPONSIBLY: plinkogame.cc is an independent platform and is not
directly associated with the websites we promote. Before participating in any
gambling activities, it’s important to ensure you are complying with all relevant
legal regulations. Please note that our content is provided for informational
purposes only. By clicking on the links, you will be directed to external websites,
and we do not take responsibility for any outcomes or consequences.
    `,
];

const FooterUpper = () => (
  <div className="w-full container mx-auto flex justify-center items-center flex-col gap-[27px]  py-[45px]">
    <div className="w-full justify-between  flex items-center gap-3 flex-wrap max-w-[800px] mx-auto">
      {exLinks.map((i, idx) => (
        <span
          key={idx}
          className="underline leading-[23.2px] mx-auto text-[16px] font-[400] text-[#7F8C8D]"
        >
          {i}
        </span>
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
          {i}
        </p>
      ))}
    </div>
    <div className="flex justify-center w-full items-start gap-2">
      <p className="max-w-[450px] w-full text-center font-[400] text-[16px] leading-[23.2px] text-[#7F8C8D]">
        18+, For new customers only, T&Cs apply, Play responsibly. Copyright
        2024 © plinkogame.cc
      </p>
    </div>
  </div>
);

const FooterDownSide = () => (
  <div className="max-w-[1170px] mx-auto w-full flex justify-between items-center">
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

const exLinks = ["Cookie Policy", "Privacy Policy", "About Us", "Contact us"];

export default Footer;
