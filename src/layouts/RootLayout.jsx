import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/";
import { I18nextProvider } from "react-i18next";
import i18n from "../locales";
import TopButton from "./TopButton";
import GoToTop from "./GoToTop";

const RootLayout = ({ children }) => {
  GoToTop();
  return (
    <main className=" relative w-full">
      <I18nextProvider i18n={i18n}>
        <TopButton />
        <Navbar />
        <div className="bg-[#f1f3f4] mt-[80px] p-14 my-10">
          <div className="container mx-auto ">
            <h2 className="max-w-[1000px] text-[50px] font-roboto font-bold  leading-[55px]  ">
              Plinko Game: The Ultimate Guide to Online Gambling Fun
            </h2>
          </div>
        </div>

        <div className="container">{children}</div>
        <Footer />
      </I18nextProvider>
    </main>
  );
};

export default RootLayout;
