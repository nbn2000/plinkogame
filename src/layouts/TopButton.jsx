import { useEffect, useState } from "react";
import ArrowUp from "../assets/icons/arrow-up.svg";

const TopButton = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShow(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (!isShow) return <></>;
  return (
    <div className="fixed bottom-[1rem] z-[50] right-[1rem] ">
      <button
        className=" w-[40px] h-[40px] flex items-center justify-center  rounded-[15px] text-[#036ae9]"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img src={ArrowUp} alt="arrow up" />
      </button>
    </div>
  );
};

export default TopButton;
