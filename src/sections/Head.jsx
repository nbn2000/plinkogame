import gamble from "../assets/icons/bingo-777.svg";
import remote from "../assets/icons/playstation-remote.svg";
import tick from "../assets/icons/tick.svg";
import phone from "../assets/icons/phone.svg";

export default function Head() {
  return (
    <div className="mt-24 w-full px-4">
      <p className="leading-[1.85em] p-[1.5em] font-roboto tracking-wide text-[#2E3246]">
        The game of Plinko has become highly popular in the online gaming
        industry, and there are several exciting versions of this classic slot
        game across different platforms. This detailed guide provides everything
        you need to know to start playing Plinko, whether you have been gambling
        online for a long time or are just beginning your online casino journey.
        By following this guide, you’ll discover how to set specific goals for
        your Plinko sessions and get more out of your gameplay.
      </p>
      <div className="flex justify-start items-center">
        <button className="whitespace-nowrap bg-[#F136A7] hover:text-[#F136A7] hover:bg-white transition-all mx-auto m-10 rounded-[100px] text-lg text-white px-10 py-6 tracking-wider font-roboto  font-[700] text-[14px] leading-[16px] shadow-[2px_2px_29px_0_#F136A7] ">
          ⭐ Play Plinko for Real Money! ⭐
        </button>
      </div>
      <img
        src="/images/first.jpg"
        alt="description of the image"
        className="mx-auto rounded-xl"
      />
      <div>
        <h3 className="flex items-center gap-5 text-xl font-bold text-[28px] leading-[34px] my-5 text-[#151515]">
          <img
            draggable="false"
            role="img"
            className="emoji"
            alt="🎰"
            height={30}
            width={30}
            src={gamble}
          />
          What is Plinko?
        </h3>
        <p className="leading-[1.85em]  font-roboto tracking-wide text-[#2E3246]">
          Plinko has gained popularity since its debut on the TV show “The Price
          is Right.” The concept is simple: a board filled with pegs, at the top
          of which balls or chips are dropped, and winnings are awarded based on
          where the ball lands. This game is straightforward yet exciting, as
          the unpredictable bounces of the ball make for a thrilling experience
          every time.
        </p>
        <img
          src="/images/second.jpg"
          alt="description of the image"
          className="mx-auto rounded-xl"
        />
      </div>
      <div>
        <h3 className="flex items-center gap-5 text-xl font-bold text-[28px] leading-[34px] my-5 text-[#151515]">
          <img
            draggable="false"
            role="img"
            className="emoji"
            alt="🎰"
            height={30}
            width={30}
            src={remote}
          />
          Plinko: Taking the Classic Game to New Heights
        </h3>
        <p className="leading-[1.85em]  font-roboto tracking-wide text-[#2E3246]">
          Online versions of Plinko have brought new life to this popular game.
          Various platforms have taken the thrill of the original game and
          enhanced it for gamblers by adding more features and gameplay options.
        </p>
      </div>
      <div>
        <h3 className="flex items-center gap-5 text-xl font-bold text-[28px] leading-[34px] my-5 text-[#151515]">
          What’s Exciting and Unique When Playing Plinko Online?
        </h3>
        <ul className="*:text-[#2E3246] flex flex-col gap-3">
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">Custom Game Board:</strong>
              Players can select the number of pegs and rows, customizing the
              game according to their preferences. You can even adjust the edges
              of the board to create a unique playing field.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">Risk Levels:</strong>
              These are adjustable based on your playing style. You can choose a
              low-risk setting or increase it for a more high-action game.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">Autoplay Option:</strong>
              If you want to watch the game without actively playing, you can
              enable the autoplay function.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">Multipliers:</strong>
              Multiple exciting multipliers can increase your winnings, making
              each round even more thrilling.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">Provably Fair:</strong>
              Many platforms ensure that each game is credible by employing
              blockchain technology, allowing players to verify the fairness of
              every game.
            </p>
          </li>
        </ul>
      </div>
      <p className="text-[#2E3246] mt-[28px]">
        While Plinko is primarily a game of chance, knowing how to use your
        options and features can enhance your overall playing experience and
        increase your chances of success.
      </p>
      <div className="mt-[38px] w-full">
        <div className="w-full mb-[28px]">
          <h3 className="flex items-center  text-xl font-bold text-[28px] leading-[34px] my-5 text-[#151515]">
            <img
              draggable="false"
              role="img"
              className="emoji"
              alt="🎰"
              height={30}
              width={30}
              src={phone}
            />
            How to Play Plinko
          </h3>
          <p className="leading-[1.85em]  font-roboto tracking-wide text-[#2E3246]">
            Playing Plinko for real money is simple, but mastering the game
            requires some time and strategic thinking. Follow these step-by-step
            instructions to play like a pro:
          </p>
        </div>
        <ol className="*:text-[#2E3246] flex flex-col gap-3">
          <li className="flex justify-start items-start gap-2">
            1.
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">Set Your Bet:</strong>
              Choose the amount of money you want to bet for each drop.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            2.
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">Customize Your Board:</strong>
              Decide how many pins and rows you want to set up on your Plinko
              board.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            3.
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">
                Choose Your Risk Level:
              </strong>
              Adjust the risk settings according to your gambling preferences.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            4.
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">Drop the Ball:</strong>
              Release the ball and watch as it bounces through the pegs down the
              board.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            5.
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">Collect Your Winnings:</strong>
              Each time the ball lands in a winning pocket, funds are
              automatically credited to your account.
            </p>
          </li>
        </ol>
      </div>
      <p className="text-[#2E3246] mt-[28px]">
        By following these steps, you’ll be well on your way to enjoying the
        excitement of Plinko and potentially winning real money.
      </p>
    </div>
  );
}
