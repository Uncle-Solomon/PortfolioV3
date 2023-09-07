import Project from "./Project";
import projects from "../../assets/projects.json";

type Props = {};

function Portfolio({}: Props) {
  return (
    <div className="min-h-screen mt-4 md:-mt-28 lg:-mt-48 mb-4 ">
      <div className="flex justify-center items-baseline  gap-4">
        <h1 className="dark:text-white transition-all duration-500 text-black font-light text-4xl font-patua text-center dark:font-bold mb-12 flex items-center justify-center gap-x-4">
          Recent Projects
        </h1>
      </div>
      <div className="">
        <ul className="flex flex-row flex-wrap justify-evenly gap-x-16 gap-y-16">
          {projects.map((project, index) => (
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
          {/* <Project />
          <Project />
          <Project /> */}
        </ul>
      </div>
      <div className="flex justify-center mt-8">
        <button className="py-4 px-4 font-montserrat bg-white rounded-md text-primary-dark text-sm hover:scale-105 transition duration-500">
          Load More ...
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
