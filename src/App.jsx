import "./App.css";
import RootLayout from "./layouts/RootLayout";
import About from "./sections/About";
import Head from "./sections/Head";
import Accordion from "./sections/Acordion";
import SecondPart from "./sections/SecondPart";

function App() {
  return (
    <RootLayout>
      <Head />
      <SecondPart />
      <Accordion />
      <About />
    </RootLayout>
  );
}

export default App;
