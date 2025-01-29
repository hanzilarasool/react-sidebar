import { useState } from "react";
import "./Sidebar.css"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Sidebar({isCollapsed,setIsCollapsed}) {
const navigate=useNavigate();
// useStates to control open close sidebar
// const [isCollapsed, setIsCollapsed] = useState(false);
  const [openSublist, setOpenSublist] = useState(null);


//   functions to handleSidebar open closed functionality
const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSublist = (sublist) => {
    setOpenSublist(openSublist === sublist ? null : sublist);
  };


  return (
    <nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
       <div 
      
       className="navbar-chevron-icon-container" onClick={()=>toggleSidebar()}>
    <img src="./sidebar/icons/chevron-arrow-left.svg" alt="" />
       </div>
       <div className="section-1">
        <div className="header">
            <div className="logo-img">
                <NavLink>
                <img src="./sidebar/images/company-logo.svg" alt="company-logo" />
                </NavLink>
          
            </div>
            {!isCollapsed && <h3 className="logo-name">Water</h3>}
            {/* <h3 className="logo-name">Water</h3> */}
        </div>
     <ul className="main-nav-link-lists">
   
<li className="main-nav-link-item dashboard"> 
<NavLink className="main-nav-link active" >
<img src="./sidebar/icons/dashboard.svg" alt="" />
{!isCollapsed && <span>Dashboard</span>}
</NavLink>
{/* Dashboard sub menu-list */}

<ol className="dashboard-sub-menu-list">
    {/* item-1 */}
<li className="sub-menu-list-item">
<NavLink to="/orders" className="dashboard-sub-menu-link" > 
<img src="./sidebar/icons/orders.svg" alt="" />
<span> orders</span>
</NavLink>
</li>
{/* item-2 */}
<li className="sub-menu-list-item item-2">
<NavLink className="dashboard-sub-menu-link" onClick={() => toggleSublist("menu")}  > 
<img src="./sidebar/icons/menu.svg" alt="" />
<span> Menu</span>

</NavLink>
<img src="./sidebar/icons/chevron-down.svg" alt="" className="chevron-down-icon" style={{transform:openSublist==="menu"?"rotate(0deg)":"rotate(180deg)",transition:"transform 0.3s ease"}} />

{/* sub-menu-list-2 */}
{openSublist === "menu" && (
                    <ol className="sub-menu-list-2">
                      <li className="sub-menu-list-2-item">
                        <NavLink
                        to="products"
                        className="sub-menu-list-2-item-link">
                          Products
                        </NavLink>
                      </li>
                      <li className="sub-menu-list-2-item">
                        <NavLink 
                        to="/collection"
                        className="sub-menu-list-2-item-link">Collections</NavLink>
                      </li>
                    </ol>
                  )}



</li>

{/* item-3 */}
</ol>
</li>

{/* customers specific navigations list-sections */}
<li className="main-nav-link-item">
<NavLink   className={({ isActive }) => (isActive ? "main-nav-link no-blue-active" : "main-nav-link")}  >
<img src="./sidebar/icons/customers.svg" alt="" />
<span>
Customers
</span>
</NavLink>
{/* customers specific sub menu-list */}
<ol className="customers-sub-menu-list">
<li className="customers-sub-menu-list-item">
    <NavLink to="/builder" className="customers-sub-menu-list-link" >
        <img src="./sidebar/icons/builder.svg" alt="" />
        <span>Builder</span>
    </NavLink>
</li>
{/* 2nd */}
<li className="customers-sub-menu-list-item">
    <NavLink to="/location" className="customers-sub-menu-list-link">
        <img src="./sidebar/icons/location.svg" alt="" />
        <span>Location</span>
    </NavLink>
</li>
{/* third */}
<li className="customers-sub-menu-list-item">
    <NavLink to="/employees" className="customers-sub-menu-list-link">
       <img src="./sidebar/icons/employees.svg" alt="" />
        <span>Employees</span>
    </NavLink>
</li>
{/* fourth */}
<li className="customers-sub-menu-list-item">
    <NavLink to="/integration" className="customers-sub-menu-list-link">
        <img src="./sidebar/icons/integration.svg" alt="" />
        <span>Integration</span>
    </NavLink>
</li>
{/* fifth */}

<li className="customers-sub-menu-list-item marketing" onClick={() => toggleSublist("marketing")}>
    <NavLink className="customers-sub-menu-list-link">
        <img src="./sidebar/icons/marketing.svg" alt=""  />
        <span>Marketing</span>
    </NavLink>
    <img src="./sidebar/icons/chevron-down.svg" alt="" className="customers-sub-menu-list-link-chevron-down" style={{transform:openSublist==="marketing"?"rotate(0deg)":"rotate(180deg)",transition:"transform 0.3s ease"}} />

    {/* marketing sub-menu-list */}
    {openSublist === "marketing" && (
                    <ol className="marketing-sub-menu-list" >
                      <li className="marketing-sub-menu-list-item">
                        <NavLink to="/promotion">Promotion</NavLink>
                      </li>
                      <li className="marketing-sub-menu-list-item">
                        <NavLink to="/push-notification">Push notification</NavLink>
                      </li>
                      <li className="marketing-sub-menu-list-item">
                        <NavLink to="/discounts">Discounts</NavLink>
                      </li>
                    </ol>
                  )}
</li>
{/* marketing ends */}
</ol>



</li>

{/* Setting item */}

<li>
<NavLink to="/settings" className="main-nav-link" style={{background:"none",color:"grey"}}>
<img src="./sidebar/icons/setting.svg" alt="" />
{!isCollapsed && <span>Setting</span>}
</NavLink>
</li>



     </ul>
       </div>
       {/* profile-section */}
        <div className="profile-section">
<div className="profile-img-container">
    <img src="./sidebar/icons/profile-img.svg" alt="" />
</div>
{!isCollapsed && (
    <>
          <div className="profile-name">
            <h4 className="sidebar-username">hehe User</h4>
            <p className="sidebar-email">abcxyz@gmail.com</p>
          </div>
          <div className="profile-logout" style={{cursor:"pointer"}} onClick={()=>window.confirm("You 'll be no more logged in here?")}>
    <img src="./sidebar/icons/logout.svg" alt="" />
</div>
          </>
        )}

        </div>
        </nav>
  )
}

export default Sidebar;
