import MinusIcon from "/src/assets/icons/minus.svg";
import PlusIcon from "/src/assets/icons/plus.svg";
import pointer from "/src/assets/icons/hand-pointing-right.svg";
import { useState } from "react";
import useLocales from "/src/hooks/useLocales";

const data = [
  {
    title: "What is Plinko?",
    p: "Plinko is a gambling game based on the random fall of a ball across a board with pegs, where the goal is to land in the winning slots.",
  },
  {
    title: "Can I play Plinko for free?",
    p: "Yes, many online casinos offer demo modes that let you play without deposits and learn the game mechanics.",
  },
  {
    title: "How can I customize the Plinko board?",
    p: "You can select the number of pegs and rows and adjust the risk level to change the likelihood and size of winnings.",
  },
  {
    title: "What is the risk level in Plinko?",
    p: "The risk level determines the balance between the frequency and size of winnings: low risk means smaller frequent wins while high risk means larger, less frequent wins.",
  },
  {
    title: "How are winnings calculated?",
    p: "Winnings depend on which slot the ball lands in. Some slots include multipliers that increase your bet.",
  },
  {
    title: "Do I need a strategy to play Plinko?",
    p: "Plinko is mostly based on luck, but using strategies like managing your bets or selecting the optimal risk level can enhance your experience.",
  },
  {
    title: "Is online Plinko safe to play?",
    p: "Yes, if you choose a licensed and verified casino that uses random number generators (RNG) and provably fair systems.",
  },
  {
    title: "Can I play Plinko on a mobile device?",
    p: "Yes, most platforms support responsive design or mobile apps for convenient gaming on smartphones and tablets.",
  },
  {
    title: "Can I win real money in Plinko?",
    p: "Yes, playing with real money allows you to win real prizes if your ball lands in a winning slot.",
  },
  {
    title: "Why is Plinko more popular than other games?",
    p: "This game stands out from traditional slots with its unique mechanics, making the gameplay fresh and exciting. It also allows for personalized adjustments, creating a more tailored experience for each player.",
  },
];

const InnerSection = ({ title, p, isOpen, onClick }) => {
  const { t } = useLocales();
  return (
    <div
      className={`w-full px-4 rounded-lg bg-primaryLight cursor-pointer transition-all duration-250 ${
        isOpen ? "mb-4" : ""
      }`}
      onClick={onClick}
    >
      <div
        className={`flex mb-2 w-full gap-2  items-center bg-[#EDEDED] py-2 px-3 ${
          isOpen
            ? "rounded-t-[20px] whitespace-wrap  border-b-[1px] border-solid border-b-[#ccc]"
            : "rounded-[20px]"
        } justify-between h-max md:h-14 transition-all`}
      >
        <span className="font-[700] h-min ">{t(title)}</span>
        <button>
          {isOpen ? (
            <img src={MinusIcon} alt="+" />
          ) : (
            <img src={PlusIcon} alt="-" />
          )}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all  ease-in-out transform ${
          isOpen
            ? "max-h-[50vh] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 translate-y-4"
        }`}
      >
        <p>{t(p)}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const { t } = useLocales();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full my-4 flex flex-col items-center gap-21.25 pt-6 pb-18.75 mt-17.5">
      <div>
        <h2 className="text-2xl font-bold p-4">
          <span className="text-red-500 text-4xl ">🏳</span> {t("Conclusion")}
        </h2>
        <p className="p-4 font-[400] text-[#2E3246] tracking-wider">
          {t(
            "Plinko is an innovative approach on the classic Pachinko game. It offers an engaging and unique experience for players looking for something different from traditional slots. Adjustable risk levels, high RTP, and simple yet thrilling gameplay make it an excellent choice for both beginners and experienced players."
          )}
        </p>
      </div>
      <h3 className="font-[700] text-[28px] leading-[34px] w-full text-start mb-[10px] flex justify-start items-center gap-2">
        <img src={pointer} alt="pointer" />{" "}
        {t("Frequently Asked Questions (FAQ) About Plinko Game")}
      </h3>
      <div className="w-full flex flex-col items-center gap-[20px]">
        {data.map((item, index) => (
          <InnerSection
            key={index}
            title={item.title}
            p={item.p}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
