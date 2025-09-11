import "./index.css";

import { Outlet } from "react-router-dom";

import Header from "../components/header/Header";

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <main className="content">
        <div className="content-inner">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
