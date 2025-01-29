import "./Sidebar.css"
import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <nav className="sidebar">
       <div 
      
       className="navbar-chevron-icon-container">
    <img src="./sidebar/icons/chevron-arrow-left.svg" alt="" />
       </div>
       <div className="section-1">
        <div className="header">
            <div className="logo-img">
                <img src="./sidebar/images/company-logo.svg" alt="company-logo" />
          
            </div>
            <h3 className="logo-name">Water</h3>
        </div>
     <ul className="main-nav-link-lists">
   
<li className="main-nav-link-item dashboard"> 
<NavLink to="/dashboard" className="main-nav-link active" >
<img src="./sidebar/icons/dashboard.svg" alt="" />
<span>
Dashboard
</span>
</NavLink>
{/* Dashboard sub menu-list */}

<ol className="dashboard-sub-menu-list">
    {/* item-1 */}
<li className="sub-menu-list-item">
<NavLink to="/dashboard/orders" className="dashboard-sub-menu-link" activeClassName="active"> 
<img src="./sidebar/icons/orders.svg" alt="" />
<span> orders</span>
</NavLink>
</li>
{/* item-2 */}
<li className="sub-menu-list-item item-2">
<NavLink to="/dashboard/orders" className="dashboard-sub-menu-link" activeClassName="active" > 
<img src="./sidebar/icons/menu.svg" alt="" />
<span> Menu</span>

</NavLink>
<img src="./sidebar/icons/chevron-down.svg" alt="" className="chevron-down-icon"/>

{/* sub-menu-list-2 */}
<ol className="sub-menu-list-2">
<li className="sub-menu-list-2-item">
<NavLink className="sub-menu-list-2-item-link" activeClassName="active">
Products
</NavLink>
</li>
<li className="sub-menu-list-2-item">
<NavLink className="sub-menu-list-2-item-link">
Collections

</NavLink>
</li>
</ol>
</li>

{/* item-3 */}
</ol>
</li>

{/* customers specific navigations list-sections */}
<li>
<NavLink to="/customers" className="main-nav-link" >
<img src="./sidebar/icons/customers.svg" alt="" />
<span>
Customers
</span>
</NavLink>
{/* customers specific sub menu-list */}
<ol className="customers-sub-menu-list">
<li className="customers-sub-menu-list-item">
    <NavLink className="customers-sub-menu-list-link" >
        <img src="./sidebar/icons/builder.svg" alt="" />
        <span>Builder</span>
    </NavLink>
</li>
{/* 2nd */}
<li className="customers-sub-menu-list-item">
    <NavLink className="customers-sub-menu-list-link">
        <img src="./sidebar/icons/location.svg" alt="" />
        <span>Location</span>
    </NavLink>
</li>
{/* third */}
<li className="customers-sub-menu-list-item">
    <NavLink className="customers-sub-menu-list-link">
       <img src="./sidebar/icons/employees.svg" alt="" />
        <span>Employees</span>
    </NavLink>
</li>
{/* fourth */}
<li className="customers-sub-menu-list-item">
    <NavLink className="customers-sub-menu-list-link">
        <img src="./sidebar/icons/integration.svg" alt="" />
        <span>Integration</span>
    </NavLink>
</li>
{/* fifth */}

<li className="customers-sub-menu-list-item marketing">
    <NavLink className="customers-sub-menu-list-link">
        <img src="./sidebar/icons/marketing.svg" alt="" />
        <span>Marketing</span>
    </NavLink>
    <img src="./sidebar/icons/chevron-down.svg" alt="" className="customers-sub-menu-list-link-chevron-down" />
    {/* marketing sub-menu-list */}
    <ol className="marketing-sub-menu-list">
<li className="marketing-sub-menu-list-item">
    <NavLink>
        Promotion
    </NavLink>
</li>
{/* second */}
<li className="marketing-sub-menu-list-item">
    <NavLink>
        Push notification
    </NavLink>
</li>
<li className="marketing-sub-menu-list-item">
    <NavLink>
        Discounts
    </NavLink>
</li>
    </ol>
</li>
{/* marketing ends */}
</ol>



</li>

{/* Setting item */}

<li>
<NavLink to="/settings" className="main-nav-link" style={{background:"none",color:"grey"}}>
<img src="./sidebar/icons/setting.svg" alt="" />
<span>Setting</span>
</NavLink>
</li>



     </ul>
       </div>
       {/* profile-section */}
        <div className="profile-section">
<div className="profile-img-container">
    <img src="./sidebar/icons/profile-img.svg" alt="" />
</div>
<div className="profile-name">
    <h4>hehe User</h4>
    <p style={{width:"auto"}}>abcxyz@gmail.com</p>
</div>
<div className="profile-logout">
    <img src="./sidebar/icons/logout.svg" alt="" />
</div>
        </div>
        </nav>
  )
}

export default Sidebar;