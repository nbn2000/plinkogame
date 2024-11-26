import { useState } from "react";
import Logo from "../../assets/logo.png";
import { Menu, Cancel } from "../../svg";
import MenuModal from "./MenuModal";
import LangageDropDown from "../languga-dropdown";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    setAnimation(true);
    const time = setTimeout(() => {
      setAnimation(false);
      clearTimeout(time);
    }, 400);
  };
  return (
    <nav className="w-full h-[80px] fixed bg-white top-0 left-0  shadow-[0_10px_40px_0_rgba(109,141,173,0.25)]">
      <div className="mx-auto px-4 flex flex-row  justify-between items-center gap-4  max-w-[1400px]">
        <div className="w-max py-5 pr-5">
          <img src={Logo} alt="logo" className="w-full" />
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="hidden md:block">
            <LangageDropDown />
          </div>
          <button className=" bg-[#F136A7] rounded-[100px] text-white px-5 py-3 font-[700] text-[14px] leading-[16px] shadow-[2px_2px_29px_0_#F136A7] hidden md:block">
            Play Now!
          </button>
          <div className="relative md:hidden">
            <button
              className={`bg-primary w-max h-max p-1  text-black text-primary rounded-sm ${
                animation && "animate-spin"
              }`}
              onClick={handleClick}
            >
              {open ? (
                <Cancel className="bg-transparent text-black " />
              ) : (
                <Menu className="bg-primary text-black" />
              )}
            </button>
            <MenuModal open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
