import "../Assets/CSS/Header.css";
import "../Assets/CSS/CategoryPage.css";
import perif from "../Assets/ppp.jpg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Pagination from "../Components/Pagination";
import {Link}  from "react-router-dom"
export default function ComputerPage() {
  return (
    <div className="categoryPageContainer">
      <div
        className="the_header"
        style={{ background: `url(${perif}) `, backgroundSize: "cover" }}
      >
        <div className="header_title"> Ordinateur </div>
        <div className="header_overlay"></div>
      </div>
      <div className="tab_panel_container">
        <div className="tab_panel">
          <Tabs defaultActiveKey="pc">
            <Tab eventKey="pc" title="PC protable" className="mytab">
              <Pagination id_categorie={1} />
            </Tab>
          
            <Tab eventKey="Unité" title="Unité centrale" className="mytab">
            <Pagination id_categorie={2} />
            </Tab>
           
          </Tabs>
        </div>
      </div>
    </div>
  );
}
