import { useState } from "react";
import Logo from "../../assets/logo.png";
import { Menu, Cancel } from "../../svg";
import MenuModal from "./MenuModal";
import LangageDropDown from "../languga-dropdown";
import { Link } from "react-router-dom";
import useLocales from "/src/hooks/useLocales";
import LinkButton from "/src/components/LinkButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const { t } = useLocales();
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
      <div className="mx-auto px-4 flex flex-row h-full  justify-between items-center gap-4  max-w-[1400px]">
        <Link to={"/"} className="w-max max-w-[150px]">
          <img src={Logo} alt="logo" className="w-full" />
        </Link>
        <LinkButton to="/" className=" !py-2 md:!py-2">
          {t("Play Now!")}
        </LinkButton>
        <div className="flex justify-center items-center gap-3">
          <div className="hidden md:block">
            <LangageDropDown />
          </div>
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
