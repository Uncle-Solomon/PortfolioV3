import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import FileSaver from "file-saver";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

function NavBar({ darkMode, toggleDarkMode }: Props) {
  const fileUrl = "/AmehSolomonOnyekeResume.pdf";
  const fileName = "Ameh Solomon Onyeke";
  const handleClick = () => {
    FileSaver.saveAs(fileUrl, fileName);
  };
  return (
    <div className="relative flex justify-between items-center mt-4 md:mt-8 lg:mt-12">
      <div>
        <h1 className="dark:text-white transition-all duration-500 text-black text-4xl font-gloria font-bold">
          ASO
        </h1>
      </div>
      <div className="flex items-center justify-between gap-4">
        <button
          className="py-1 px-2 font-montserrat bg-white rounded-md text-primary-dark text-sm hover:scale-105 transition duration-500"
          onClick={handleClick}
        >
          Resume
        </button>
        {darkMode ? (
          <BsFillSunFill
            className="h-8 w-8 text-gray-50 hover:scale-105 transition duration-500"
            onClick={toggleDarkMode}
          />
        ) : (
          <BsFillMoonFill
            className="h-8 w-8 text-gray-50 hover:scale-105 transition duration-500"
            onClick={toggleDarkMode}
          />
        )}
      </div>
    </div>
  );
}

export default NavBar;
