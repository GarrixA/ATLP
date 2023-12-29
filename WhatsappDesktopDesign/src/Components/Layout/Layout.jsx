import Contents from "../Contents/Contents";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="layout flex flex-row justify-between" style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <Sidebar />
        <Contents/>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
