import "../Assets/CSS/AdminPage.css";
import SideMenu, { menuItems } from "../Components/SideMenu";
import Wave from "react-wavify";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function AdminPage() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`contain ${inactive ? "inactive" : ""}`}>
          
          {menuItems.map((menu, index) => (
            <>
            
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
              <Wave
        className="wavee" fill="var(--blue-ciel)" options={{
          height: 20,
          amplitude: 50,
          speed: .04,
          points: 2
        }}
      />
                {<menu.component/>}
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                : null}
            </>
          ))}
        </div>
      </Router>
    </div>
  );
}

export default AdminPage;
