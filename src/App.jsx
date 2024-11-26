import "./App.css";
import RootLayout from "./layouts/RootLayout";
import About from "./sections/About";
import Head from "./sections/Head";
import Accordion from "./sections/Acordion";

function App() {
  return (
    <RootLayout>
      <Head />
      <Accordion />
      <About />
    </RootLayout>
  );
}

export default App;
