import Logo from "../../assets/logo.png";
import LangugaDropdown from "../languga-dropdown";
import useLocales from "/src/hooks/useLocales";

const MenuModal = ({ open }) => {
  const { t } = useLocales();
  if (!open) return null;
  return (
    <div
      className={`sm:w-[300px] mt-[20px] w-[70%] shadow-[-14px_3px_21px_-7px_rgba(0,0,0,0.46)] bg-white z-50 fixed
       buttom-0 right-0 p-6 ${open ? "show-height" : "hide-height"}`}
    >
      <div className="flex flex-col justify-start items-center gap-[40px] mx-auto ">
        <div className="w-max py-5 pr-5">
          <img src={Logo} alt="logo" className="w-full" />
        </div>
        <LangugaDropdown isMobile />
        <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:text-[#F136A7] transition-all mx-auto hover:bg-white rounded-[100px] text-white py-4 px-6 font-[700] text-[14px] leading-[16px] shadow-[2px_2px_29px_0_#F136A7] md:hidden block">
          {t("Play Now!")}
        </button>
        <span className="text-[#7f8c8d] text-xs font-[400] leading-[1.45em]">
          Copyright 2024 © plinkogame.cc
        </span>
      </div>
    </div>
  );
};

export default MenuModal;
