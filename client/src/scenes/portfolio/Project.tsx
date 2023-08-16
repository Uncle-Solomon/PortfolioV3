import { FiArrowUpRight } from "react-icons/fi";

type Props = {
  name: string;
  description?: string;
  frameworks?: string;
  image: string;
  demoLink?: string;
  githubLink: string;
};

function Project({
  name,
  description,
  frameworks,
  image,
  demoLink,
  githubLink,
}: Props) {
  return (
    <li className="relative h-[320px] w-[550px] bg-white ">
      <div className="p-5 absolute z-30 flex h-[320px] w-full flex-col items-center justify-center whitespace-normal bg-primary-dark text-center text-white opacity-0 transition-all duration-200 hover:opacity-[0.92] font-montserrat">
        <p className="text-2xl">{name}</p>
        <p className="mt-6 text-xs text-justify">{description}</p>
        <p className="mt-2.5 text-xs ">Frameworks: {frameworks}</p>

        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href={demoLink}
            className=" mt-20 cursor-pointer hover:scale-105 transition-all duration-500 inline-block mx-2 p-2 bg-white rounded-lg text-xs  text-black gap-1"
          >
            Live Demo <FiArrowUpRight className="inline-block" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={githubLink}
            className=" mt-20 cursor-pointer hover:scale-105 transition-all duration-500 inline-block mx-2 p-2 bg-white rounded-lg text-xs  text-black gap-1"
          >
            Github Repo <FiArrowUpRight className="inline-block" />
          </a>
        </div>
      </div>
      <img alt="" src={image} className="h-[320px] w-[550px]" />
    </li>
  );
}

export default Project;
