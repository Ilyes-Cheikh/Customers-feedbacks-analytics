import "../../Assets/CSS/AdminPage.css";
import SideMenu, { menuItems } from "../../Components/SideMenu";
import Stat from "./Stat";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function AdminPage() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />
        <div className="categ_component">
        <Stat />
        </div>
    </div>
  );
}

export default AdminPage;
