import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/";
import TopButton from "./TopButton";
import GoToTop from "./GoToTop";

const RootLayout = ({ children }) => {
  GoToTop();
  return (
    <main className=" relative w-full">
      <TopButton />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default RootLayout;
