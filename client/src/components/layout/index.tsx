import { Outlet } from "react-router-dom";
import Header from "./header/Header";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <div className="min-h-full">
          <Header />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
