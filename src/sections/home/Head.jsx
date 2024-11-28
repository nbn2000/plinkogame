import gamble from "/src/assets/icons/bingo-777.svg";
import remote from "/src/assets/icons/playstation-remote.svg";
import tick from "/src/assets/icons/tick.svg";
import phone from "/src/assets/icons/phone.svg";
import useLocales from "/src/hooks/useLocales";
import Table from "./Table";

const ContentBlock = ({ icon, title, children }) => (
  <div className="my-6">
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
  <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
    {items.map(({ title, content }, index) => (
      <li key={index} className="text-[#2E3246] *:text-[#2E3246]">
        <strong className="text-[#2E3246]">{title} </strong>
        {content}
      </li>
    ))}
  </ul>
);

export default function Head() {
  const { t } = useLocales();
  const plinkoFeatures = [
    {
      icon: tick,
      content: (
        <>
          <strong>Simple Concept: </strong>
          Easy rules and gameplay mechanics make the game accessible to both
          beginners and experienced players.
        </>
      ),
    },
    {
      icon: tick,
      content: (
        <>
          <strong>Transparency with Blockchain: </strong>
          Blockchain technology ensures fair play and guarantees the user date
          security.
        </>
      ),
    },
    {
      icon: tick,
      content: (
        <>
          <strong>Customizable Game Board: </strong>
          Players can choose the number of pegs and rows to create a board which
          perfectly suits their preferences. Additionally, the edges of the
          board can be customized according to individual preferences.
        </>
      ),
    },
    {
      icon: tick,
      content: (
        <>
          <strong>Risk Level Adjustment: </strong>
          Players can set the game’s volatility (risk level) themselves,
          allowing everyone to find their comfort zone.
        </>
      ),
    },
    {
      icon: tick,
      content: (
        <>
          <strong>Multiple Versions and Adaptations: </strong>
          The game is available on various platforms, each adding unique
          features and characteristics.
        </>
      ),
    },
    {
      icon: tick,
      content: (
        <>
          <strong>Autoplay Feature: </strong>
          Want to watch the game without active involvement? Enable autoplay and
          enjoy the process!
        </>
      ),
    },
    {
      icon: tick,
      content: (
        <>
          <strong>Bonus Features: </strong>
          Many online versions offer additional bonuses and features such as win
          multipliers.
        </>
      ),
    },
    {
      icon: tick,
      content: (
        <>
          <strong>Social Aspect: </strong>
          Play Plinko in real-time with other players in online casinos.
        </>
      ),
    },
  ];

  const howToPlaySteps = [
    {
      title: "Set Your Bet: ",
      content: t(
        "Decide the amount you want to spend on each ball drop. Choose a bet that fits your budget."
      ),
    },
    {
      title: "Customize the Game Board: ",
      content: t(
        "Select the number of pegs and rows to create your ideal playing field."
      ),
    },
    {
      title: "Choose the Risk Level: ",
      content: t(
        "Adjust the risk settings—low to high—depending on your gambling style and tolerance for risk."
      ),
    },
    {
      title: "Drop the Ball: ",
      content: t(
        "Release the ball and watch as it bounces off the pegs, making its way to the prize slots."
      ),
    },
    {
      title: "Collect Your Winnings: ",
      content: t(
        "When the ball lands in a prize slot, your winnings will automatically be added to your account. Enjoy your reward and keep playing!"
      ),
    },
  ];

  return (
    <div className="mt-[40px] w-full px-4">
      <p className="leading-[1.85em] font-roboto tracking-wide text-[#2E3246]">
        {t(
          "Plinko has gained immense popularity in the world of online gaming. Various versions of this classic game can be found on many platforms. This comprehensive guide will provide everything you need to know to start playing Plinko, whether you're an experienced player or just beginning your journey into online casinos. With this guide you’ll learn how to set clear goals for your gaming sessions and get the most enjoyment and rewards from this game."
        )}
      </p>
      <Table />

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

      <ContentBlock icon={gamble} title={t("What is Plinko Game?")}>
        <p className="text-[#2E3246] my-6">
          {t(
            "Plinko is a reimagined version of an ancient Japanese game originating in the 1930s in Nagoya. It gained true popularity after its debut on the television show The Price is Right. The essence of the game is as follows: a special board is studded with pegs that form a pyramid. From the top of this pyramid, a ball begins to fall, bouncing off the pegs and unpredictably changing its direction. The player watches as the ball falls, hoping it lands at the edge of the pyramid, thus bringing a significant win. Despite its simplicity, the game is full of excitement and unpredictability, making each ball drop a thrilling event."
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
        title={t("Elevating a Classic Game to New Level")}
      >
        <p className="text-[#2E3246] my-6">
          {t(
            "Today the game is experiencing a third resurgence in popularity, most of all because of the online casinos which have brought it back to life. Modern technologies allow players to enjoy this captivating game online while blockchain technology ensures fairness and reliable data protection for users. The online slot version preserves the original structure while introducing numerous new features and gaming opportunities, making the experience even more engaging and exciting."
          )}
        </p>
      </ContentBlock>

      <ContentBlock title={t("Features and Unique Functions")}>
        <List items={plinkoFeatures} />
        <p className="text-[#2E3246] mt-6">
          {t(
            "Although Plinko is primarily a game of chance, understanding its mechanics and effectively using the available features can significantly improve your experience. This approach not only makes the game more enjoyable but also increases the likelihood of success."
          )}
        </p>
      </ContentBlock>

      <ContentBlock icon={phone} title={t("How to Play Plinko Game")}>
        <p className="text-[#2E3246] my-4">
          {t(
            "Playing Plinko Slot for real money is simple to learn but to become a master takes time and strategic thinking. Here’s a step-by-step guide to help you play like a pro:"
          )}
        </p>
        <OrderedList items={howToPlaySteps} />
        <p className="text-[#2E3246] my-4">
          {t(
            "By following these steps, you will be able to fully enjoy the slot, immerse yourself in the exciting gameplay, and get closer to win money."
          )}
        </p>
      </ContentBlock>
    </div>
  );
}
