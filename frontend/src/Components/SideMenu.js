import React, { useEffect, useState } from "react";
import logo from "../Assets/logowhite.png";
import user from "../Assets/user.jpg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Stat from "../Pages/Stat";
import MenuItem from "./MenuItem";
import ProductAdmin from "../Pages/ProductAdmin";
/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
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
  { name: "Design", to: `/admin/design`, iconClassName: "bi bi-vector-pen",    component:Stat},
  {
    name: "Content 2",
    exact: true,
    to: `/admin/content-2`,
    iconClassName: "bi bi-speedometer2",
    component:Stat,

    subMenus: [
      { name: "Courses", to: "/admin/content-2/courses",    component:Stat    },
      { name: "Videos", to: "/admin/content-2/videos",    component:Stat    },
    ],
  },
  { name: "Design 2", to: `/admin/design-2`, iconClassName: "bi bi-vector-pen",component:Stat},
  { name: "Design 3", to: `/admin/design-3`, iconClassName: "bi bi-vector-pen",component:Stat },
  { name: "Design 4", to: `/Ladmin/design-4`, iconClassName: "bi bi-vector-pen",component:Stat },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
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
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
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

          {/* <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <MenuItem
            name={"Content"}
            subMenus={[{ name: "Courses" }, { name: "Videos" }]}
          />
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li> */}
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Rizwan Khan</h5>
          <p>rizwankhan@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
