import { Link } from "react-router-dom";

const LinkButton = ({ children, to, className }) => {
  return (
    <Link
      to={to}
      className={`bg-gradient-to-r flex justify-center items-center gap-1 from-purple-600 to-pink-500 transition-all rounded-lg md:text-lg text-white px-3 md:px-6 py-2 md:py-4 tracking-wider font-roboto font-bold text-[12px] md:text-[14px] shadow-[2px_2px_29px_0_#F136A7] ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
