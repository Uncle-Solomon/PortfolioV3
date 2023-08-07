import { useState } from "react";
import Contact from "./scenes/contact";
import Hero from "./scenes/hero";
import NavBar from "./scenes/navbar";
import Portfolio from "./scenes/portfolio";
import ToolBox from "./scenes/toolbox";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className={`dark:bg-primary-dark bg-primary-light`}>
        <div className="max-w-[1200px] mx-auto items-center px-4 py-2">
          <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Hero />
          <Portfolio />
          <ToolBox />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
