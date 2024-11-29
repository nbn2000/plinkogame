import { useState } from "react";
import Logo from "../../assets/logo.png";
import { Menu, Cancel } from "../../svg";
import MenuModal from "./MenuModal";
import LangageDropDown from "../languga-dropdown";
import { Link } from "react-router-dom";

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
        <Link to={"/"} className="w-1/3 md:w-max py-5 pr-5">
          <img src={Logo} alt="logo" className="w-full" />
        </Link>

        <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:text-[#F136A7] transition-all mx-auto hover:bg-white rounded-md text-white py-4 px-6 font-[700] text-[14px] leading-[16px] shadow-[2px_2px_29px_0_#F136A7] md:hidden block">
          Play Now!
        </button>
        <div className="flex justify-center items-center gap-3">
          <div className="hidden md:block">
            <LangageDropDown />
          </div>
          <button className="whitespace-nowrap bg-[#F136A7] hover:text-[#F136A7] transition-all hover:bg-white rounded-[100px] text-white px-5 py-3 font-[700] text-[14px] leading-[16px] shadow-[2px_2px_29px_0_#F136A7] hidden md:block">
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
