import gamble from "/src/assets/icons/bingo-777.svg";
import remote from "/src/assets/icons/playstation-remote.svg";
import tick from "/src/assets/icons/tick.svg";
import phone from "/src/assets/icons/phone.svg";
import useLocales from "/src/hooks/useLocales";

const ContentBlock = ({ icon, title, children }) => (
  <div>
    <h3 className="flex items-center gap-5 text-xl font-bold text-[28px] leading-[34px] my-5 text-[#151515]">
      {icon && <img src={icon} alt="" height={30} width={30} />}
      {title}
    </h3>
    <div className="leading-[1.85em] font-roboto tracking-wide text-[#2E3246]">
      {children}
    </div>
  </div>
);

const List = ({ items }) => (
  <ul className="flex flex-col gap-3">
    {items.map(({ icon, content }, index) => (
      <li key={index} className="flex items-start gap-2">
        {icon && <img src={icon} alt="icon" />}
        <p className="text-[#2E3246]">{content}</p>
      </li>
    ))}
  </ul>
);

const OrderedList = ({ items }) => (
  <ol className="flex flex-col gap-3">
    {items.map(({ step, content }, index) => (
      <li key={index} className="flex items-start gap-2">
        <span>{step}</span>
        <p className="text-[#2E3246]">{content}</p>
      </li>
    ))}
  </ol>
);

export default function Head() {
  const { t } = useLocales();
  const plinkoFeatures = [
    {
      icon: tick,
      content: (
        <>
          {t(
            "{{strong}} Players can select the number of pegs and rows, customizing the game according to their preferences.",
            { strong: <strong>{t("Custom Game Board:")}</strong> }
          )}
        </>
      ),
    },
    {
      icon: tick,
      content: (
        <>
          {t(
            "{{strong}} These are adjustable based on your playing style. Choose low-risk or high-action games.",
            { strong: <strong>{t("Risk Levels:")}</strong> }
          )}
        </>
      ),
    },
    {
      icon: tick,
      content: (
        <>
          {t(
            "{{strong}} Watch the game without actively playing by enabling autoplay.",
            { strong: <strong>{t("Autoplay Option:")}</strong> }
          )}
        </>
      ),
    },
    {
      icon: tick,
      content: (
        <>
          {t(
            "{{strong}} Exciting multipliers increase your winnings for more thrilling rounds.",
            { strong: <strong>{t("Multipliers:")}</strong> }
          )}
        </>
      ),
    },
    {
      icon: tick,
      content: (
        <>
          {t(
            "{{strong}} Blockchain technology ensures each game’s fairness, verifiable by players.",
            { strong: <strong>{t("Provably Fair:")}</strong> }
          )}
        </>
      ),
    },
  ];

  const howToPlaySteps = [
    { step: "1.", content: t("Set your bet amount for each drop.") },
    { step: "2.", content: t("Customize your board with pins and rows.") },
    {
      step: "3.",
      content: t("Choose your risk level to match your preferences."),
    },
    {
      step: "4.",
      content: t("Drop the ball and watch it bounce through the pegs."),
    },
    {
      step: "5.",
      content: t("Collect winnings when the ball lands in a winning pocket."),
    },
  ];

  return (
    <div className="mt-[40px] w-full px-4">
      <p className="leading-[1.85em] font-roboto tracking-wide text-[#2E3246]">
        {t(
          "The game of Plinko has become highly popular in the online gaming industry, and there are several exciting versions of this classic slot game across different platforms. This guide provides everything you need to know to start playing Plinko."
        )}
      </p>
      <div className="flex justify-center items-center">
        <button className="bg-[#F136A7] hover:text-[#F136A7] hover:bg-white transition-all m-10 rounded-[100px] text-lg text-white px-10 py-6 tracking-wider font-roboto font-bold text-[14px] shadow-[2px_2px_29px_0_#F136A7]">
          ⭐ {t("Play Plinko for Real Money!")} ⭐
        </button>
      </div>
      <img
        src="/images/first.jpg"
        alt="Plinko gameplay"
        className="mx-auto rounded-xl"
      />

      <ContentBlock icon={gamble} title={t("What is Plinko?")}>
        <p>
          {t(
            "Plinko originated on the TV show “The Price is Right.” Players drop balls onto a board with pegs, aiming for winnings where the balls land. Its unpredictable gameplay makes it thrilling and exciting."
          )}
        </p>
        <img
          src="/images/second.jpg"
          alt="Plinko board"
          className="mx-auto rounded-xl"
        />
      </ContentBlock>

      <ContentBlock
        icon={remote}
        title={t("Plinko: Taking the Classic Game to New Heights")}
      >
        <p>
          {t(
            "Online Plinko versions enhance the original game with more features and options, offering players greater excitement."
          )}
        </p>
      </ContentBlock>

      <ContentBlock
        title={t("What’s Exciting and Unique When Playing Plinko Online?")}
      >
        <List items={plinkoFeatures} />
      </ContentBlock>

      <ContentBlock icon={phone} title={t("How to Play Plinko")}>
        <p>{t("Follow these steps to master Plinko:")}</p>
        <OrderedList items={howToPlaySteps} />
      </ContentBlock>
    </div>
  );
}
