import { BsFillSunFill } from "react-icons/bs";
type Props = {};

function NavBar({}: Props) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-white text-4xl font-gloria font-bold">ASO</h1>
      </div>
      <div className="flex items-center justify-between gap-4">
        <button className="p-1 bg-white rounded-md text-primary-dark text-sm">
          Resume
        </button>
        <BsFillSunFill className="h-8 w-8 text-gray-50" />
      </div>
    </div>
  );
}

export default NavBar;
