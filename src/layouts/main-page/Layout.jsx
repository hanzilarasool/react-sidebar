import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Layout.css"; // CSS for layout styling
import { useState } from "react";
const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="layout">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className={`${isCollapsed? "collapsed-sidebar-page-content":"page-content"}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
