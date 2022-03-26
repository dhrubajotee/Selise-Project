import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  let activeStyle = {
    backgroundColor: "#b2dfdb",
    color:"black"
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </Link>
            </li>
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  {/* <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link> */}
                  <NavLink
                    to={item.path}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
