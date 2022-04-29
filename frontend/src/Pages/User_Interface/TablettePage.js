import '../../Assets/CSS/Header.css';
import '../../Assets/CSS/CategoryPage.css'
import tab from '../../Assets/images/h.jpg'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Pagination from '../../Components/Pagination';
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

export default function TablettePage() {
  return (
    <div className='categoryPageContainer'>
      <Navbar />
      <div className='the_header' style={{ background: `url(${tab}) `, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
      >
        <div className='header_title'> Tablettes </div>
        <div className='header_overlay'></div>
      </div>
      < div className='tab_panel_container'>
        <div className='tab_panel'>
          <Tabs defaultActiveKey='tablette' >
            <Tab eventKey="tablette" title="Tablette" className='mytab'>
              <Pagination />
            </Tab>
            <Tab eventKey="profile" title="Tablette graphique" className='mytab'>
              <Pagination />
            </Tab>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  )
}