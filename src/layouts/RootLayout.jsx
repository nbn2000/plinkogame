import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/footer/view/index";
import { I18nextProvider } from "react-i18next";
import i18n from "../locales";
import TopButton from "./TopButton";
import GoToTop from "./GoToTop";

const RootLayout = ({ children }) => {
  GoToTop();
  return (
    <main className="container relative w-full">
      <I18nextProvider i18n={i18n}>
        <TopButton />
        <Navbar />
        <>{children}</>
        {/* <Footer /> */}
      </I18nextProvider>
    </main>
  );
};

export default RootLayout;
