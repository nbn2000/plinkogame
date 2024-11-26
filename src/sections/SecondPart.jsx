import gift from "../assets/icons/gift.svg";
import bowling from "../assets/bowling-game.jpg";
import tick from "../assets/icons/tick.svg";
import lighning from "../assets/icons/yellow-lightning.svg";
import gem from "../assets/icons/gem.svg";
import statistics from "../assets/icons/statistics.svg";
import settings from "../assets/icons/settings.svg";
import trofee from "../assets/icons/trofee.svg";

const SecondPart = () => {
  return (
    <div className="mt-[51px] w-full px-4">
      <div className="flex w-full justify-start items-center">
        <button className="whitespace-nowrap bg-[#F136A7] hover:text-[#F136A7] gap-1 hover:bg-white flex justify-center items-center transition-all mx-auto m-10 rounded-[100px] text-lg text-white px-10 py-6 tracking-wider font-roboto  font-[700] text-[14px] leading-[16px] shadow-[2px_2px_29px_0_#F136A7] ">
          <img src={gift} alt="gift" /> Best First Deposit Bonus
          <img src={gift} alt="gift" />
        </button>
      </div>
      <img
        src={bowling}
        alt="bowling game"
        className="mx-auto mt-[53px] mb-[70px] rounded-[5px]"
      />
      <div>
        <h3 className="flex items-center gap-5 text-xl font-bold text-[28px] leading-[34px] my-5 text-[#151515]">
          <img src={lighning} alt="lightning" /> Tips for Success
        </h3>
        <p className="leading-[1.85em] mb-4 font-roboto tracking-wide text-[#2E3246]">
          Although Plinko is mainly a game of luck, there are a few strategies
          you can use to maximize your enjoyment and potential wins:
        </p>
        <ul className="*:text-[#2E3246] flex flex-col gap-3">
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              Play a few rounds with smaller bets to get familiar with the game.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              Experiment with different risk levels to find your preferred
              style.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              Use the autoplay feature to test different strategies.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              Set a budget for each session and stick to it.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              Take advantage of any available bonuses or promotions on your
              chosen platform.
            </p>
          </li>
        </ul>
      </div>
      <p className="text-[#2E3246] mt-[28px]">
        Just remember to play responsibly and have fun!
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
            src={gem}
          />
          What Makes Plinko So Exciting?
        </h3>
        <p className="leading-[1.85em]  font-roboto tracking-wide text-[#2E3246]">
          The thrill of watching the ball bounce its way down the Plinko board
          is something every player will enjoy. Every time the ball hits a peg,
          it creates a new possibility for where it might land, keeping players
          engaged and excited.
        </p>
      </div>
      <div>
        <h3 className="flex items-center gap-5 text-xl font-bold text-[28px] leading-[34px] my-5 text-[#151515]">
          <img src={statistics} alt="lightning" /> Plinko Alternatives
        </h3>
        <p className="leading-[1.85em] mb-4 font-roboto tracking-wide text-[#2E3246]">
          In addition to the standard version of Plinko, there are numerous
          variations you can explore:
        </p>
        <ul className="*:text-[#2E3246] flex flex-col gap-3">
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">Multiplier Plinko:</strong>
              Specific pockets on the board have multipliers that can boost your
              winnings.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">Progressive Plinko:</strong>A
              version where possible winnings increase with each round.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">Team Plinko:</strong>
              Work together with other players to achieve targets and share in
              the rewards.
            </p>
          </li>
        </ul>
      </div>
      <p className="text-[#2E3246] mt-[28px]">
        These variations add even more excitement and challenge to the game,
        offering something new for every player.
      </p>

      <div>
        <h3 className="flex items-center gap-5 text-xl font-bold text-[28px] leading-[34px] my-5 text-[#151515]">
          <img src={settings} alt="lightning" /> Game Technology
        </h3>
        <p className="leading-[1.85em] mb-4 font-roboto tracking-wide text-[#2E3246]">
          Online platforms use advanced technology to ensure a fair and
          enjoyable Plinko experience:
        </p>
        <ul className="*:text-[#2E3246] flex flex-col gap-3">
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">
                Random Number Generators (RNG):
              </strong>
              Ensure that each ball drop is random and unpredictable.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">Provably Fair Systems:</strong>
              Players can verify the fairness of each game’s outcome using
              blockchain technology.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">Responsive Design:</strong>
              Makes playing Plinko effective on any device and screen
              orientation.
            </p>
          </li>
        </ul>
      </div>
      <p className="text-[#2E3246] mt-[28px]">
        These features not only enhance the overall gaming experience but also
        help build trust between the platform and players.
      </p>

      <div>
        <h3 className="flex items-center gap-5 text-xl font-bold text-[28px] leading-[34px] my-5 text-[#151515]">
          <img src={trofee} alt="lightning" /> Why Choose Online Casino
          Platforms for Playing Plinko?
        </h3>
        <p className="leading-[1.85em] mb-4 font-roboto tracking-wide text-[#2E3246]">
          Compared to other online Plinko casinos, many platforms offer
          additional benefits:
        </p>
        <ul className="*:text-[#2E3246] flex flex-col gap-3">
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">Variety of Games:</strong>
              Besides Plinko, there’s a wide selection of other games to
              explore.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">
                Promotions and Bonuses:
              </strong>
              Special offers are available for both new and existing players.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">Secure Transactions:</strong>
              The latest technology ensures the safety of your money and
              personal information.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">Customer Support:</strong>
              Quick and easy assistance for any issues that arise.
            </p>
          </li>
          <li className="flex justify-start items-start gap-2">
            <img src={tick} alt="tick" />{" "}
            <p className="text-[#2E3246]">
              <strong className="text-[#2E3246]">Mobile Availability:</strong>
              Play Plinko on the go using a mobile application or mobile version
              of the website.
            </p>
          </li>
        </ul>
      </div>
      <p className="text-[#2E3246] mt-[28px]">
        These features combine to create a comprehensive and enjoyable gaming
        experience.
      </p>
    </div>
  );
};

export default SecondPart;
