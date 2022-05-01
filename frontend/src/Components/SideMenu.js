import React, { useEffect, useState } from "react";
import logo from "../Assets/images/logowhite.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Stat from "../Pages/Admin_Interface/Stat";
import MenuItem from "./MenuItem";
import ProductAdmin from "../Pages/Admin_Interface/ProductAdmin";
/**
 * @author
 * @function SideMenu
 **/

export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/admin",
    iconClassName: "bi bi-speedometer2",
    component:Stat,
  },
  {
    name: "Product",
    exact: true,
    to: `/admin/content`,
    iconClassName: "bi bi-box-seam",
    component:ProductAdmin,

    subMenus: [
      { name: "Courses", to: "/admin/content/courses",    component:Stat    },
      { name: "Videos", to: "/admin/content/videos",     component:Stat    },
    ],
  },
 
  
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo1">
          <img src={logo} alt="webscript" />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i className="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i className="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>
      <br/>
     


      <div className="main-menu">
        <ul className="ull">
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}

        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
