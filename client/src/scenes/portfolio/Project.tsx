import { FiArrowUpRight } from "react-icons/fi";
import web1 from "../../assets/web1.png";

type Props = {};

function Project({}: Props) {
  return (
    <li className="relative h-[320px] w-[550px] bg-white ">
      <div className="p-5 absolute z-30 flex h-[320px] w-full flex-col items-center justify-center whitespace-normal bg-primary-dark text-center text-white opacity-0 transition-all duration-200 hover:opacity-80 font-montserrat">
        <p className="text-2xl">A Name</p>
        <p className="mt-6">A brief description</p>
        <div>
          <button className=" mt-20 hover:scale-105 transition-all duration-500 inline-block mx-2 p-2 bg-white rounded-lg text-xs  text-black gap-1">
            Live Demo <FiArrowUpRight className="inline-block" />
          </button>
          <button className=" mt-20 hover:scale-105 transition-all duration-500 inline-block mx-2 p-2 bg-white rounded-lg text-xs  text-black gap-1">
            Github Repo <FiArrowUpRight className="inline-block" />
          </button>
        </div>
      </div>
      <img alt="" src={web1} className="h-[320px] w-[550px]" />
    </li>
  );
}

export default Project;
