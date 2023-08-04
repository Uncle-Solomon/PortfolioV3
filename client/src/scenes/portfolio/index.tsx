// import portfoliogray from "../../assets/portfoliogray.png";
// import portfolio from "../../assets/portfolio.svg";
// import { portfolioBlack } from "../../assets/portfolioBlack.png";

import Project from "./Project";

type Props = {};

function Portfolio({}: Props) {
  return (
    <div className="min-h-screen mb-4 mt-16">
      <div className="flex justify-center items-baseline  gap-4">
        <h1 className="text-white text-4xl font-patua text-center font-bold mb-12 flex items-center justify-center gap-x-4">
          Recent Projects
        </h1>
      </div>
      <div className="">
        <ul className="flex flex-row flex-wrap justify-evenly gap-x-24 gap-y-24 mb-24">
          <Project />
          <Project />
          <Project />
          <Project />
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
