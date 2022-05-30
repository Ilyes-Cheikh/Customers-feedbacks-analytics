import React, { useEffect, useState } from "react";
import logo from "../Assets/images/logowhite.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Stat from "../Pages/Admin_Interface/Stat";
import MenuItem from "./MenuItem";
import ProductAdmin from "../Pages/Admin_Interface/ProductAdmin";
import AdminCategoriePage from "../Components/AdminCategoriePage";
import AddProduct from "../Pages/Admin_Interface/AddProduct";
import '../Assets/CSS/Sidebar.css'
import {Link} from "react-router-dom"
/**
 * @author
 * @function SideMenu
 **/
 function PproductAdmin() {
  return (
    <div className='product_admin_container'>
     za3maaa tatla3 menha ? 
    </div>
  )
}
export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/admin",
    iconClassName: "bi bi-speedometer2",
    component:Stat,
  },
  
      { name: "Ordinateurs", to: "/admin/ordinateurs",component:PproductAdmin  },
      { name: "Téléphones", to: "/admin/produits/telephone",     component:Stat    },
      { name: "Tablettes", to: "/admin/produits/tablettes",     component:Stat    },
      { name: "Composants informatiques", to: "/admin/produits/composants",     component:Stat    },
      { name: "Accéssoires et phéripheriques", to: "/admin/produits/acc",     component:Stat    },
    
  ,
 
  
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
     


      <div className="main-menu" style={{overflow:"hidden"}}>
        <ul className="ull">
          <Link to="/admin" className="link_style_is">
        <div className="side_menu_item">
 Dashboard
        </div>
        </Link>
        <Link to="/admin/addproduct" className="link_style_is">
        <div className="side_menu_item">
          Ajouter un produit 
        </div>
        </Link>
        <Link to="/admin/ordinateurs" className="link_style_is">
        <div className="side_menu_item">
            Ordinateurs
        </div>
        </Link>
        <Link to="/admin/accessoirs" className="link_style_is">
        <div className="side_menu_item">
        Accéssoires et périphériques
        </div>
        </Link>
        <Link to="/admin/composant" className="link_style_is">
        <div className="side_menu_item">
            Composants informatique
        </div>
        </Link>
        <Link to="/admin/pcc" className="link_style_is">
        <div className="side_menu_item">
          Télépohnes et tablettes
        </div>
        </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
