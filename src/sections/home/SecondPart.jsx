import gift from "/src/assets/icons/gift.svg";
import bowling from "/src/assets/bowling-game.jpg";
import tick from "/src/assets/icons/tick.svg";
import lighning from "/src/assets/icons/yellow-lightning.svg";
import gem from "/src/assets/icons/gem.svg";
import statistics from "/src/assets/icons/statistics.svg";
import settings from "/src/assets/icons/settings.svg";
import trophy from "/src/assets/icons/trofee.svg";
import useLocales from "/src/hooks/useLocales";

const tipsForSuccess = [
  "Play a few rounds with smaller bets to get familiar with the game.",
  "Experiment with different risk levels to find your preferred style.",
  "Use the autoplay feature to test different strategies.",
  "Set a budget for each session and stick to it.",
  "Take advantage of any available bonuses or promotions on your chosen platform.",
];
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
    title: "Multiplier Plinko",
    description:
      "Specific pockets on the board have multipliers that can boost your winnings.",
  },
  {
    title: "Progressive Plinko",
    description: "A version where possible winnings increase with each round.",
  },
  {
    title: "Team Plinko",
    description:
      "Work together with other players to achieve targets and share in the rewards.",
  },
];

const gameTechnology = [
  {
    title: "Random Number Generators (RNG)",
    description: "Ensure that each ball drop is random and unpredictable.",
  },
  {
    title: "Provably Fair Systems",
    description:
      "Players can verify the fairness of each game’s outcome using blockchain technology.",
  },
  {
    title: "Responsive Design",
    description:
      "Makes playing Plinko effective on any device and screen orientation.",
  },
];

const onlineCasinoBenefits = [
  {
    title: "Variety of Games",
    description:
      "Besides Plinko, there’s a wide selection of other games to explore.",
  },
  {
    title: "Promotions and Bonuses",
    description:
      "Special offers are available for both new and existing players.",
  },
  {
    title: "Secure Transactions",
    description:
      "The latest technology ensures the safety of your money and personal information.",
  },
  {
    title: "Customer Support",
    description: "Quick and easy assistance for any issues that arise.",
  },
  {
    title: "Mobile Availability",
    description:
      "Play Plinko on the go using a mobile application or mobile version of the website.",
  },
];

const ineffectiveMethods = [
  "Signals",
  "Predictor programs",
  "Telegram bots",
  "Paid predictions",
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
        <SectionHeader icon={lighning} text="Winning Strategies" />
        <div className="mx-auto my-10 p-5 w-full md:w-4/5">
          <p className="leading-[1.85em] mb-4 font-roboto tracking-wide text-[#2E3246]">
            Although Plinko largely depends on luck, there are several
            strategies that can help you enhance your gaming experience and
            increase your chances of potential winnings:
          </p>
          <h2 className="text-2xl font-bold text-center mb-5">
            Plinko Tips & Strategies
          </h2>
          <ul className="space-y-5 ">
            {tips.map((tip, index) => (
              <li
                key={index}
                className="p-4 border border-gray-300 rounded-lg shadow-md bg-white"
              >
                <p className="font-bold text-lg text-gray-800">{tip.title}</p>
                <p className="text-gray-600 mt-2">{tip.desc}</p>
              </li>
            ))}
          </ul>
          <p className="text-[#2E3246] mt-[28px]">
            The main thing to remember is that this game is based on a random
            number generator. Although strategies and tactics can significantly
            help in achieving your goals, luck remains the primary factor.
            Therefore, I advise you to remember why we actually play—to have
            fun. Sometimes it’s better to simply trust your luck and drop the
            ball!
          </p>
        </div>
      </div>

      <div>
        <div>
          <div className="mx-auto my-10 p-5 w-full md:w-4/5">
            <h2 className="text-2xl font-bold text-center mb-5">
              Ineffective Methods in Plinko
            </h2>
            <p className="text-gray-600 mb-5">
              There are many online offers promising wins in Plinko, but most of
              them are ineffective. Here’s what definitely won’t help:
            </p>
            <ul className="space-y-3">
              {ineffectiveMethods.map((method, index) => (
                <li
                  key={index}
                  className="p-3 border border-red-300 rounded-lg bg-red-50 text-red-700"
                >
                  {method}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 mt-5">
              If someone claims to have a “working” method to win the game but
              requires you to pay to access it, ask yourself: why this person
              doesn’t use the method himself if it actually works? The reality
              is that there are no working methods, and the goal of sellers is
              to make money off you.
            </p>
          </div>
          <SectionHeader
            icon={gem}
            text={t("What Makes Plinko So Exciting?")}
          />
          <p className="leading-[1.85em]  font-roboto tracking-wide text-[#2E3246]">
            {t(
              "The thrill of watching the ball bounce its way down the Plinko board is something every player will enjoy. Every time the ball hits a peg, it creates a new possibility for where it might land, keeping players engaged and excited."
            )}
          </p>
        </div>
        <div>
          <SectionHeader icon={statistics} text={t("Plinko Alternatives")} />
          <p className="leading-[1.85em] mb-4 font-roboto tracking-wide text-[#2E3246]">
            {t(
              "In addition to the standard version of Plinko, there are numerous variations you can explore:"
            )}
          </p>
          <ul className="flex flex-col gap-3">
            {plinkoAlternatives.map((alt, index) => (
              <ListItem
                key={index}
                icon={tick}
                title={t(alt.title)}
                description={t(alt.description)}
              />
            ))}
          </ul>
          <p className="text-[#2E3246] mt-[28px]">
            {t(
              "These variations add even more excitement and challenge to the game, offering something new for every player."
            )}
          </p>
        </div>
      </div>
      <div>
        <SectionHeader icon={settings} text={t("Game Technology")} />
        <p className="leading-[1.85em] mb-4 font-roboto tracking-wide text-[#2E3246]">
          {t(
            "Online platforms use advanced technology to ensure a fair and enjoyable Plinko experience:"
          )}
        </p>
        <ul className="flex flex-col gap-3">
          {gameTechnology.map((tech, index) => (
            <ListItem
              key={index}
              icon={tick}
              title={t(tech.title)}
              description={t(tech.description)}
            />
          ))}
        </ul>
        <p className="text-[#2E3246] mt-[28px]">
          {t(
            "These features not only enhance the overall gaming experience but also help build trust between the platform and players."
          )}
        </p>
      </div>

      <div>
        <SectionHeader
          icon={trophy}
          text={t("Why Choose Online Casino Platforms for Playing Plinko?")}
        />
        <p className="leading-[1.85em] mb-4 font-roboto tracking-wide text-[#2E3246]">
          {t(
            "Compared to other online Plinko casinos, many platforms offer additional benefits:"
          )}
        </p>
        <ul className="flex flex-col gap-3">
          {onlineCasinoBenefits.map((benefit, index) => (
            <ListItem
              key={index}
              icon={tick}
              title={t(benefit.title)}
              description={t(benefit.description)}
            />
          ))}
        </ul>
        <p className="text-[#2E3246] mt-[28px]">
          {t(
            "These features combine to create a comprehensive and enjoyable gaming experience."
          )}
        </p>
      </div>
    </div>
  );
};

export default SecondPart;
