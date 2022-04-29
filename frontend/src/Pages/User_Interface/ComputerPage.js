import "../../Assets/CSS/Header.css";
import "../../Assets/CSS/CategoryPage.css";
import perif from '../../Assets/images/ppp.jpg';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Pagination from "../../Components/Pagination";
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

export default function ComputerPage() {
  return (
    <div className="categoryPageContainer">
      <Navbar />
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
      <Footer />
    </div>
  );
}
