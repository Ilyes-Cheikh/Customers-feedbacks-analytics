import '../../Assets/CSS/Header.css';
import '../../Assets/CSS/CategoryPage.css'
import tab from '../../Assets/Images/pppf.jpg'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Pagination from '../../Components/Pagination';
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

export default function ComposantPage() {
  return (
    <div className='categoryPageContainer'>
      <Navbar />
      <div className='the_header' style={{ background: `url(${tab}) `, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
      >
        <div className='header_title'> Composant Informatique </div>
        <div className='header_overlay'></div>
      </div>
      < div className='tab_panel_container'>
        <div className='tab_panel'>
          <Tabs defaultActiveKey='disque' >
            <Tab eventKey="disque" title="Disque dur" className='mytab'>
              <Pagination />
            </Tab>
            <Tab eventKey="carte" title="Carte graphique" className='mytab'>
              <Pagination />
            </Tab>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  )
}