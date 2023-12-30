
import { Outlet } from "react-router-dom";

const Contents = () => {
  return (
    <div className="content bg-[#fafafa] flex-[2] h-screen absolute right-0 w-[65%]">
      
      <Outlet/>
    </div>
  );
};

export default Contents;
