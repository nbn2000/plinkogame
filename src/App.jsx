import { useState } from "react";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import About from "./sections/About";
import Head from "./sections/Head";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const pages = {
    home: <Head />,
    about: <About />,
  };
  return <RootLayout>{pages[currentPage]}</RootLayout>;
}

export default App;
