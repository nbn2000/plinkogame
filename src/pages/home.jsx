import LastOne from "../sections/home/LastOne";
import Head from "../sections/home/Head";
import Accordion from "../sections/home/Acordion";
import SecondPart from "../sections/home/SecondPart";
import ThirdPart from "../sections/home/ThirdPart";
import Header from "../sections/home/Header";
const Home = () => {
  return (
    <div className="my-[80px]">
      <Header />
      <div className="container">
        <Head />
        <SecondPart />
        <ThirdPart />
        <Accordion />
        <LastOne />
      </div>
    </div>
  );
};

export default Home;
