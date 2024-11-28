import bag from "/src/assets/icons/cash-of-bag.svg";
import tick from "/src/assets/icons/tick.svg";
import exclaim from "/src/assets/icons/exclamation-mark.svg";
import thumbs from "/src/assets/icons/thumbs-up.svg";
import anothergamble from "/src/assets/another-balling-game.png";
import { ListItem } from "./SecondPart";

const tipsForSuccess = [
  "Setting deposit limits.",
  "Self-imposed time-outs.",
  "Access to support services if gambling becomes a problem.",
];

const desc = [
  `   It’s essential to keep in mind that setting limits is crucial when
        playing any game of chance. Make sure to approach the game with a clear
        strategy and a responsible mindset. Enjoyment should always be the
        priority, so take breaks and avoid chasing losses.`,
  `        If you’re feeling eager to try out Plinko, now is the perfect time to
        explore your options. You can choose a platform, register an account,
        and start playing right away. Remember that every drop of the chip is
        unpredictable, and the next one could be your lucky shot. Just like with
        any form of gambling, it’s wise to read reviews and gather feedback on
        the platform and game version you intend to play. This way, you’ll be
        better equipped to evaluate your overall gaming experience.`,
  `        As you play, pay attention to the structure of the board and how it
        influences the direction of the ball. Understanding the game dynamics
        can help you plan your strategy and optimize your chances of hitting the
        desired pockets. With time and experience, you’ll become more familiar
        with the nuances of the game, enabling you to achieve the goals you’ve
        set and hopefully collect some satisfying winnings along the way.`,
];

const ThirdPart = () => {
  return (
    <div className="mt-[51px] w-full px-4">
      <div className="flex w-full justify-start items-center">
        <button className=" bg-[#F136A7] hover:text-[#F136A7]  gap-1 hover:bg-white flex justify-center items-center transition-all mx-auto m-10 rounded-[100px] text-lg text-white p-4 md:px-10 md:py-6  tracking-wider font-roboto  font-[700] text-[14px] leading-[20px] md:leading-[16px] shadow-[2px_2px_29px_0_#F136A7] ">
          <img src={bag} alt="gift" /> Play Plinko Online
          <img src={bag} alt="gift" />
        </button>
      </div>
      <div>
        <h3 className="flex items-center gap-5 text-xl font-bold text-[28px] leading-[34px] my-5 text-[#151515]">
          <img src={exclaim} alt="lightning" /> Responsible Gaming
        </h3>
        <p className="leading-[1.85em] mb-4 font-roboto tracking-wide text-[#2E3246]">
          Many platforms offer services and tools to help players stay in
          control, such as:
        </p>
        <ul className="*:text-[#2E3246] flex flex-col gap-3">
          {tipsForSuccess.map((tip, index) => (
            <ListItem key={index} icon={tick} description={tip} />
          ))}
        </ul>
      </div>
      <p className="text-[#2E3246] mt-[28px]">
        Always remember: games should be fun, not a means to make money.
      </p>
      <div>
        <h3 className="flex items-center gap-5 text-xl font-bold text-[28px] leading-[34px] my-5 text-[#151515]">
          <img
            draggable="false"
            role="img"
            className="emoji"
            alt="🎰"
            height={30}
            width={30}
            src={thumbs}
          />
          Summary: Is Plinko Right for You?
        </h3>
        <p className="leading-[1.85em]  font-roboto tracking-wide text-[#2E3246]">
          Plinko brings together excitement, chance, and strategy, creating a
          unique mix of fun and unpredictability. This seemingly simple game can
          be adjusted to suit different playing styles, providing options to
          play risk-free or to aim for potentially significant wins, depending
          on your preferences. With the right approach, players can maximize
          their enjoyment and make the most out of each session.
        </p>
      </div>
      <div className="flex w-full justify-start items-center">
        <img
          src={anothergamble}
          alt="bowling game"
          width={1000}
          className="mx-auto mt-[53px] mb-[40px] rounded-[5px]"
        />
      </div>
      {desc.map((i, idx) => (
        <p
          className="leading-[1.85em] my-4 font-roboto tracking-wide text-[#2E3246]"
          key={idx}
        >
          {i}
        </p>
      ))}
    </div>
  );
};

export default ThirdPart;
