import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Layout.css"; // CSS for layout styling
import { useState } from "react";
const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hamburgerActive, sethamburgerActive] = useState(false);
  return (
    <div className="layout">

<div className="mobile-header">
    <img onClick={()=>sethamburgerActive((prev)=>!prev)} className="hamburger-menu" src="./sidebar/icons/hamburger.svg" alt="" />
    <span className="mobile-header-text">
      Dashboard
    </span>
      </div>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} hamburgerActive={hamburgerActive} sethamburgerActive={sethamburgerActive} />


      <div className={`${isCollapsed? "collapsed-sidebar-page-content":"page-content"}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
