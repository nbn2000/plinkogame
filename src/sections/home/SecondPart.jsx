import gift from "/src/assets/icons/gift.svg";
import bowling from "/src/assets/bowling-game.jpg";
import lighning from "/src/assets/icons/yellow-lightning.svg";
import gem from "/src/assets/icons/gem.svg";
import statistics from "/src/assets/icons/statistics.svg";
import settings from "/src/assets/icons/settings.svg";
import trophy from "/src/assets/icons/trofee.svg";
import useLocales from "/src/hooks/useLocales";

const tips = [
  {
    title: "Use Demo Game Modes",
    desc: "In demo mode, you can better familiarize yourself with the game and test your own hypotheses without the risk of losing real money. Demo modes are available on nearly all platforms.",
  },
  {
    title: "Set a Budget and Stick to It",
    desc: "After getting acquainted with the game in demo mode, you can turn on to real play with real bets. The first thing you need to do in the real game is to determine the amount you are willing to spend and not exceed this limit to maintain control over your gameplay.",
  },
  {
    title: "Play at a Low-Risk Level",
    desc: "If you are a beginner, choose minimal risk settings to reduce the likelihood of losses and increase the stability of your winnings.",
  },
  {
    title: "Experiment with Board Settings",
    desc: "Change the number of pegs and rows to find a combination which best suits your playstyle.",
  },
  {
    title: "Use a Gradual Betting Increase Strategy",
    desc: "Start with the minimum bet and increase it each time you lose. When you win, you will recover all your losses. After a win, you can return to the minimum bet and start the process again. This is a very effective strategy but it is not suitable for beginners as it involves high risk and requires a substantial bankroll.",
  },
  {
    title: "Observe Patterns",
    desc: "Pay attention to the movement of the balls and analyze which areas of the board yield more winning results.",
  },
  {
    title: "Apply a Stop-Win Tactic",
    desc: "Decide in advance the winning amount at which you will stop playing to secure your earnings.",
  },
  {
    title: "Develop Your Own Game Plan",
    desc: "The most effective approach might be your personal strategy developed through observation of the game. Don’t be afraid to experiment and test your own hypotheses in practice. Be creative and inventive.",
  },
];
const plinkoAlternatives = [
  {
    title: "Multiplier",
    description:
      "Certain slots on the game board are equipped with multipliers that significantly increase your winnings when you land in them.",
  },
  {
    title: "Progressive",
    description:
      "The potential winnings grow with each round, creating additional excitement and motivation to keep playing.",
  },
  {
    title: "Team",
    description:
      "Play with other players, joining forces to achieve common goals and share the rewards.",
  },
];

const ineffectiveMethods = [
  "Signals",
  "Predictor programs",
  "Telegram bots",
  "Paid predictions",
];
const gamingTechnology = [
  {
    title: "Random Number Generators (RNG)",
    description:
      "RNG ensure that each ball drop is completely random and unpredictable, guaranteeing the fairness of the game.",
  },
  {
    title: "Provably Fair Systems",
    description:
      "Provably Fair Systems use blockchain technology to allow players to verify the results of each game and ensure their transparency.",
  },
  {
    title: "Adaptive Design",
    description:
      "Adaptive Design enables you to enjoy Plinko on any device, with different screen sizes and orientations, ensuring convenience and an optimal gaming experience.",
  },
];

const reliableCasino = [
  {
    title: "Licensing and Regulation",
    description:
      "Ensure that the casino has an official license issued by authoritative bodies. This guarantees safety, fairness, and compliance with standards.",
  },
  {
    title: "Reputation and Player Reviews",
    description:
      "Research reviews from other users and casino ratings. Reliable platforms have positive recommendations and a well-deserved reputation in the industry.",
  },
  {
    title: "Game Selection",
    description:
      "Check if the casino offers a wide variety of games, including Plinko, as well as popular slots, table games, and live casino options. A diverse game selection indicates a high-quality platform.",
  },
  {
    title: "Provably Fair Technology",
    description:
      "Some casinos use blockchain technology for provably fair gameplay, allowing players to verify game results and ensure transparency.",
  },
  {
    title: "Payment Methods",
    description:
      "Ensure that the casino supports convenient and secure methods for deposits and withdrawals, such as bank cards, e-wallets (Skrill, Neteller), cryptocurrencies, or bank transfers.",
  },
  {
    title: "Withdrawal Speed",
    description:
      "Reliable casinos process withdrawal requests quickly, within 24–48 hours, without unnecessary delays or hidden fees.",
  },
  {
    title: "Quality of Customer Support",
    description:
      "A trustworthy casino provides round-the-clock support via chat, email, or phone. Test how quickly and professionally they resolve issues.",
  },
];
const SectionHeader = ({ icon, text }) => (
  <h3 className="flex items-center gap-5 text-xl font-bold text-[28px] leading-[34px] my-5 text-[#151515]">
    <img src={icon} alt={text} /> {text}
  </h3>
);

export const ListItem = ({ icon, title, description }) => (
  <li className="flex justify-start items-start gap-2">
    <img src={icon} alt="tick" />
    <p className="text-[#2E3246]">
      {title && <strong className="text-[#2E3246]">{title}:</strong>}{" "}
      {description}
    </p>
  </li>
);

const SecondPart = () => {
  const { t } = useLocales();
  return (
    <div className="mt-[51px] w-full px-4">
      <div className="flex w-full justify-start items-center">
        <button className=" bg-[#F136A7] hover:text-[#F136A7] gap-1 hover:bg-white flex justify-center items-center transition-all mx-auto m-10 rounded-[100px] text-lg text-white p-4 md:px-10 md:py-6 tracking-wider font-roboto  font-[700] text-[14px] leading-[20px] md:leading-[16px] shadow-[2px_2px_29px_0_#F136A7] ">
          <img src={gift} alt="gift" /> {t("Best First Deposit Bonus")}
          <img src={gift} alt="gift" />
        </button>
      </div>
      <img
        src={bowling}
        alt="bowling game"
        className="mx-auto mt-[53px] mb-[70px] rounded-[5px]"
      />
      <div>
        <SectionHeader icon={lighning} text={t("Winning Strategies")} />
        <div className="mx-auto my-10 p-1 md:p-5 w-full md:w-4/5">
          <p className="leading-[1.85em] mb-4 font-roboto tracking-wide text-[#2E3246]">
            {t(
              "Although Plinko largely depends on luck, there are several strategies that can help you enhance your gaming experience and increase your chances of potential winnings:"
            )}
          </p>

          <ul className="space-y-5 ">
            {tips.map((tip, index) => (
              <li
                key={index}
                className="p-1 md:p-4 border border-gray-300 rounded-lg shadow-md bg-white"
              >
                <p className="font-bold text-lg text-gray-800">
                  {t(tip.title)}
                </p>
                <p className="text-gray-600 mt-2">{t(tip.desc)}</p>
              </li>
            ))}
          </ul>
          <p className="text-[#2E3246] mt-[28px]">
            {t(
              "The main thing to remember is that this game is based on a random number generator. Although strategies and tactics can significantly help in achieving your goals, luck remains the primary factor. Therefore, I advise you to remember why we actually play—to have fun. Sometimes it’s better to simply trust your luck and drop the ball!"
            )}
          </p>
        </div>
      </div>

      <div>
        <div>
          <SectionHeader
            icon={statistics}
            text={t("Which Methods DO NOT Work")}
          />
          <div className="mx-auto my-10 p-5 w-full md:w-4/5">
            <p className="text-gray-600 mb-5">
              {t(
                "There are many online offers promising wins in Plinko, but most of them are ineffective. Here’s what definitely won’t help:"
              )}
            </p>
            <ul className="space-y-3">
              {ineffectiveMethods.map((method, index) => (
                <li
                  key={index}
                  className="p-3 border border-red-300 rounded-lg bg-red-50 text-red-700"
                >
                  {t(method)}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 mt-5">
              {t(
                "If someone claims to have a “working” method to win the game but requires you to pay to access it, ask yourself: why this person doesn’t use the method himself if it actually works? The reality is that there are no working methods, and the goal of sellers is to make money off you."
              )}
            </p>
          </div>

          <SectionHeader
            icon={gem}
            text={t("What Makes Plinko So Exciting?")}
          />
          <div className="mx-auto my-10 p-5 w-full md:w-4/5">
            <p className="text-gray-600 mb-5">
              {t(
                "Although this game has ancient roots, its online versions are modern and feel like a brand-new experience for today’s players. From my experience, I can say this game is truly unique and stands out from other slots. Its originality makes it so appealing because we always enjoy trying something new."
              )}
            </p>
          </div>
          <SectionHeader icon={statistics} text={t("Alternatives to Plinko")} />
          <div className="mx-auto my-10 p-5 w-full md:w-4/5">
            <p className="text-gray-600 mb-5">
              {t(
                "In addition to the classic version of Plinko, there are many exciting features worth trying:"
              )}
            </p>
            <ul className="space-y-5">
              {plinkoAlternatives.map((alternative, index) => (
                <li
                  key={index}
                  className="p-5 border border-blue-300 rounded-lg bg-blue-50"
                >
                  <h3 className="font-semibold text-xl text-blue-700 mb-3">
                    {t(alternative.title)}
                  </h3>
                  <p className="text-gray-700">{t(alternative.description)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <SectionHeader
          icon={settings}
          text={t("Gaming Technology and Safety")}
        />
        <div className="mx-auto my-10 p-5 w-full md:w-4/5">
          <section className="mb-10">
            <p className="text-gray-600 mb-5">
              {t(
                "Online platforms launch advanced technologies to ensure fairness, transparency, and a comfortable gaming experience:"
              )}
            </p>
            <ul className="space-y-5">
              {gamingTechnology.map((tech, index) => (
                <li
                  key={index}
                  className="p-2 md:p-5 border border-green-300 rounded-lg bg-green-50"
                >
                  <h3 className="font-semibold text-xl text-green-700 mb-3">
                    {t(tech.title)}
                  </h3>
                  <p className="text-gray-700">{t(tech.description)}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <SectionHeader
          icon={trophy}
          text={t("How to Choose a Reliable Online Casino for Playing")}
        />
        <div className="mx-auto my-10 p-5 w-full md:w-4/5">
          <section>
            <p className="text-gray-600 mb-5">
              {t("The casinos we recommend fully meet all these criteria:")}
            </p>
            <ul className="space-y-5">
              {reliableCasino.map((casino, index) => (
                <li
                  key={index}
                  className="p-5 border border-blue-300 rounded-lg bg-blue-50"
                >
                  <h3 className="font-semibold text-xl text-blue-700 mb-3">
                    {t(casino.title)}
                  </h3>
                  <p className="text-gray-700">{t(casino.description)}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <p className="text-[#2E3246] mt-[28px] font-bold text-xl">
          {t("The casinos we recommend fully meet all these criteria.")}
        </p>
      </div>
    </div>
  );
};

export default SecondPart;
