import Logo from "../../assets/logo.png";
import LangugaDropdown from "../languga-dropdown";
import useLocales from "/src/hooks/useLocales";
import LinkButton from "/src/components/LinkButton";

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
        <LinkButton to="/" className="md:hidden block !py-2 md:!py-2">
          {t("Play Now!")}
        </LinkButton>

        <span className="text-[#7f8c8d] text-xs font-[400] leading-[1.45em]">
          Copyright 2024 © plinkogame.cc
        </span>
      </div>
    </div>
  );
};

export default MenuModal;
