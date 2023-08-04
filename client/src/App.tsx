import Contact from "./scenes/contact";
import Hero from "./scenes/hero";
import NavBar from "./scenes/navbar";
import Portfolio from "./scenes/portfolio";
import ToolBox from "./scenes/toolbox";

function App() {
  return (
    <div className=" bg-primary-dark">
      <div className="max-w-[1200px] mx-auto items-center px-4 py-2">
        <NavBar />
        <Hero />
        <ToolBox />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
