import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const TopSidebar = () => {
  return (
    <div className="topSidebar flex flex-row justify-between p-4 items-center">
      <div className="left flex flex-row justify-between">
        <RiCheckboxBlankCircleFill className="text-red-400" />
        <RiCheckboxBlankCircleFill className="text-yellow-400" />
        <RiCheckboxBlankCircleFill className="text-green-600" />
      </div>
      <div className="right flex flex-row justify-between text-[1.8rem] space-x-6 text-slate-500">
        <RiEditBoxLine />
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default TopSidebar;
