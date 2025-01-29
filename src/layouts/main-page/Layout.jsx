import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Layout.css"; // CSS for layout styling

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
