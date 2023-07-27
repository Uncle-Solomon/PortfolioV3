type Props = {};

function ToolBox({}: Props) {
  return (
    <div className="h-screen">
      <h1 className="text-white text-4xl font-patua text-center font-bold">
        TOOL BOX
      </h1>
      <div className="flex flex-row flex-wrap justify-evenly gap-x-32 gap-y-24">
        <div className="bg-white h-[300px] w-[300px]"></div>
        <div className="bg-white h-[300px] w-[300px]"></div>
        <div className="bg-white h-[300px] w-[300px]"></div>
        <div className="bg-white h-[300px] w-[300px]"></div>
      </div>
    </div>
  );
}

export default ToolBox;
