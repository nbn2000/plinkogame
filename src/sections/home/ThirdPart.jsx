import bag from "/src/assets/icons/cash-of-bag.svg";
import exclaim from "/src/assets/icons/exclamation-mark.svg";
import anothergamble from "/src/assets/another-balling-game.png";

import useLocales from "/src/hooks/useLocales";

const ThirdPart = () => {
  const { t } = useLocales();
  return (
    <div className="mt-[51px] w-full px-4">
      <div className="flex w-full justify-start items-center">
        <button className=" bg-[#F136A7] hover:text-[#F136A7]  gap-1 hover:bg-white flex justify-center items-center transition-all mx-auto m-10 rounded-[100px] text-lg text-white p-4 md:px-10 md:py-6  tracking-wider font-roboto  font-[700] text-[14px] leading-[20px] md:leading-[16px] shadow-[2px_2px_29px_0_#F136A7] ">
          <img src={bag} alt="gift" /> {t("Play Plinko Online")}
          <img src={bag} alt="gift" />
        </button>
      </div>
      <div>
        <h3 className="flex items-center gap-5 text-xl font-bold text-[28px] leading-[34px] my-5 text-[#151515]">
          <img src={exclaim} alt="lightning" /> {t("Responsible Gambling")}
        </h3>
        <p className="leading-[1.85em] mb-4 font-roboto tracking-wide text-[#2E3246]">
          {t(
            "A responsible approach to gambling means being aware of your actions and spending while playing. It’s essential to set time and budget limits and avoid chasing losses. Remember that gambling is, first and foremost, entertainment, not a way to earn money. Play wisely and only for enjoyment."
          )}
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
    </div>
  );
};

export default ThirdPart;
