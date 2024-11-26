import MinusIcon from "../assets/icons/minus.svg";
import PlusIcon from "../assets/icons/plus.svg";
import pointer from "../assets/icons/hand-pointing-right.svg";
import { useState } from "react";

const data = [
  {
    title: "What is Plinko and how does it work?",
    p: "Plinko is a popular game that originated from the TV show “The Price is Right” and has since become a staple in online casinos. The game consists of a board filled with rows of pegs. Players drop a ball or chip from the top, and it bounces through the pegs until it lands in one of the pockets at the bottom, each with a designated payout. The excitement lies in the unpredictability of the ball’s path, as it can land in any pocket based on random bounces.",
  },
  {
    title: "Can I play Plinko for real money?",
    p: "Yes, many online casinos offer Plinko for real money. You can place your bets and drop the ball, with the potential to win real cash prizes based on where the ball lands. To play Plinko for real money, you will need to register on a reputable platform, deposit funds, and place your wagers according to the game’s rules.",
  },
  {
    title: "Is Plinko a game of skill or luck?",
    p: "Plinko is primarily a game of luck. The path the ball takes through the pegs is mostly determined by chance, making it impossible to predict or control the outcome consistently. However, players can influence the risk levels and other game settings, which can add a layer of strategy to the game. Despite this, the final result largely depends on luck.",
  },
  {
    title: "What are the best strategies for playing Plinko?",
    p: "While Plinko is a game of chance, there are a few strategies that players can employ to enhance their experience: Start with smaller bets to understand the game’s dynamics before increasing your wager. Adjust the risk level to find the setting that matches your risk tolerance. Lower risk levels generally have smaller but more frequent payouts, while higher risk levels can lead to bigger wins but occur less often. Use the autoplay feature to test various strategies over multiple rounds. Set a budget for your session and stick to it. This helps in managing your bankroll effectively and prevents overspending.",
  },
  {
    title: "Are Plinko games fair and trustworthy?",
    p: "Most reputable platforms that offer Plinko use Random Number Generators (RNG) and provably fair systems to ensure that each game’s outcome is fair and random. This means that neither the player nor the platform can manipulate the results. Before playing, it’s essential to choose a licensed and regulated online casino to ensure that you’re engaging in a fair gaming environment.",
  },
  {
    title: "What are the typical features of a Plinko game?",
    p: "Plinko games often come with several customizable features: Number of Rows and Pegs: Players can adjust the number of rows or pegs to alter the board’s complexity. Risk Levels: You can switch between low, medium, and high risk, which changes the payout distribution and potential winnings. Autoplay Option: This feature allows players to automate the game, making it convenient to play multiple rounds in succession without manual input. Multipliers: Many Plinko games include multipliers that can significantly increase the amount of your winnings depending on where the ball lands.",
  },
  {
    title: "What are some popular variations of the Plinko game?",
    p: `Different platforms offer unique variations of the traditional Plinko game, such as:
Multiplier Plinko: This version includes special multipliers in the pockets that can significantly boost your winnings.
Progressive Plinko: Each round increases the potential winnings as the prize pool grows progressively.
Team Plinko: Players can collaborate to achieve common goals and share the rewards based on group performance.`,
  },
  {
    title: "Can I play Plinko on mobile devices?",
    p: "Yes, most online casinos and gaming platforms offer mobile-friendly versions of Plinko. You can access these games through mobile apps or directly via the website’s mobile version. The responsive design ensures that the game functions smoothly on smartphones and tablets, providing a seamless experience regardless of the device you use.",
  },
  {
    title: "What should I consider before playing Plinko for real money?",
    p: `
        Before playing Plinko for real money, consider the following:
Choose a trusted platform: Make sure the platform is licensed, regulated, and has positive user reviews.
Check game fairness: Look for platforms that use RNG and provably fair systems.
Set a budget: Decide on a budget and stick to it to avoid spending more than you can afford.
Read the game’s rules and payout structure: Understanding how the game works and what each pocket pays out can help you make informed betting decisions.
Review the bonuses and promotions: Take advantage of bonuses like welcome offers or free spins to extend your gameplay.
    `,
  },
  {
    title: "Is there a way to verify the fairness of Plinko games?",
    p: "Yes, many platforms offering Plinko use a “provably fair” system, which relies on blockchain technology. This system allows players to verify the fairness of each game outcome. When playing on such platforms, you can view the game’s hash value and compare it against the server seed to confirm that the results were not tampered with.",
  },
  {
    title: "What are some responsible gaming tips for playing Plinko?",
    p: `Here are a few responsible gaming tips to keep in mind when playing Plinko:
Set time limits: Determine how long you’ll play and take regular breaks to avoid excessive gaming.
Define win and loss limits: Decide in advance how much you’re willing to lose and stop if you reach that limit. Similarly, set a win limit to secure your profits.
Avoid chasing losses: Don’t try to recover losses by increasing your bets. This can lead to overspending.
Use available tools: Utilize platform tools like self-exclusion options or deposit limits if you feel that you’re losing control of your gameplay.`,
  },
  {
    title: "Why is Plinko so popular among players?",
    p: "Plinko’s popularity can be attributed to its simplicity, excitement, and visual appeal. The game’s unpredictable nature, combined with the potential for big wins, keeps players engaged. Additionally, the customizable features allow players to adjust the game to suit their preferences, making it appealing to both casual players and seasoned gamblers alike.",
  },
];

const InnerSection = ({ title, p, isOpen, onClick }) => {
  return (
    <div
      className={`w-full rounded-lg bg-primaryLight cursor-pointer transition-all duration-250 ${
        isOpen ? "mb-4" : ""
      }`}
      onClick={onClick}
    >
      <div
        className={`flex mb-2 w-full items-center bg-[#EDEDED] py-2 px-3 ${
          isOpen
            ? "rounded-t-[20px]  border-b-[1px] border-solid border-b-[#ccc]"
            : "rounded-[20px]"
        } justify-between  md:h-14 transition-all`}
      >
        <div className="font-[700] leading-[22.4]">{title}</div>
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
        <p>{p}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full my-4 flex flex-col items-center gap-21.25 pt-6 pb-18.75 mt-17.5">
      <h3 className="font-[700] text-[28px] leading-[34px] w-full text-start mb-[10px] flex justify-start items-center gap-2">
        <img src={pointer} alt="pointer" /> Frequently Asked Questions (FAQ)
        About Plinko Game
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
