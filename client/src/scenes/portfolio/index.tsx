import { useState } from "react";
import Project from "./Project";
import projects from "../../assets/projects.json";

type Props = {};

function Portfolio({}: Props) {
  const [displayedProjects, setDisplayedProjects] = useState(5); // Number of initially displayed projects
  const totalProjects = projects.length; // Total number of projects

  const loadMoreProjects = () => {
    // Increase the number of displayed projects by, for example, 5
    setDisplayedProjects(displayedProjects + 1);
  };

  const showLessProjects = () => {
    // Decrease the number of displayed projects by 5 or go back to the initial 5
    setDisplayedProjects(Math.max(5, displayedProjects - 1));
  };

  return (
    <div className="min-h-screen mt-4 md:-mt-28 lg:-mt-48 mb-4">
      <div className="flex justify-center items-baseline gap-4">
        <h1 className="dark:text-white transition-all duration-500 text-black font-light text-4xl font-patua text-center dark:font-bold mb-12 flex items-center justify-center gap-x-4">
          Recent Projects
        </h1>
      </div>
      <div className="">
        <ul className="flex flex-row flex-wrap justify-evenly gap-x-16 gap-y-16">
          {projects.slice(0, displayedProjects).map((project, index) => (
            <Project
              key={index}
              name={project.name}
              description={project.description}
              frameworks={project.frameworks}
              image={project.image}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
            />
          ))}
        </ul>
      </div>
      {displayedProjects < totalProjects && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMoreProjects}
            className="py-4 px-4 font-montserrat bg-white rounded-md text-primary-dark text-sm hover:scale-105 transition duration-500"
          >
            Load More ...
          </button>
        </div>
      )}
      {displayedProjects > 5 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={showLessProjects}
            className="py-4 px-4 font-montserrat bg-white rounded-md text-primary-dark text-sm hover:scale-105 transition duration-500"
          >
            Show Less ...
          </button>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
