import dude from "../assets/beard-dude.webp";

const LastOne = () => {
  return (
    <div className="flex justify-start items-center w-full gap-[23px] mt-[35px]">
      <div className="w-[100px] h-[100px] rounded-[50%]">
        <img
          src={dude}
          alt="dude with beard"
          className="rounded-[50%] w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-start items-start gap-[20px] flex-col">
        <span className="font-[400] text-[#2E3246]">
          Plinko Game expert Jason Miller
        </span>
        <span className="font-[400] text-[#2E3246]">
          Published: July 9, 2024 (Updated: November 25, 2024). Estimated
          reading time: 11 minutes
        </span>
      </div>
    </div>
  );
};

export default LastOne;
