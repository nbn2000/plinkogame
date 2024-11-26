import gift from "../assets/icons/gift.svg";

const SecondPart = () => {
  return (
    <div className="mt-[51px] w-full">
      <div className="flex w-full justify-start items-center">
        <button className=" bg-[#F136A7] hover:text-[#F136A7] gap-1 hover:bg-white flex justify-center items-center transition-all mx-auto m-10 rounded-[100px] text-lg text-white px-10 py-6 tracking-wider font-roboto  font-[700] text-[14px] leading-[16px] shadow-[2px_2px_29px_0_#F136A7] ">
          <img src={gift} alt="gift" /> Best First Deposit Bonus
          <img src={gift} alt="gift" />
        </button>
      </div>
    </div>
  );
};

export default SecondPart;
