import "./App.css";
import RootLayout from "./layouts/RootLayout";
import LastOne from "./sections/LastOne";
import Head from "./sections/Head";
import Accordion from "./sections/Acordion";
import SecondPart from "./sections/SecondPart";
import ThirdPart from "./sections/ThirdPart";

function App() {
  return (
    <RootLayout>
      <Head />
      <SecondPart />
      <ThirdPart />
      <Accordion />
      <LastOne />
    </RootLayout>
  );
}

export default App;
