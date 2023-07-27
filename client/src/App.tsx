import Hero from "./scenes/hero";
import NavBar from "./scenes/navbar";

function App() {
  return (
    <div className=" bg-primary-dark">
      <div className="max-w-[1200px] mx-auto items-center px-4 py-2">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
