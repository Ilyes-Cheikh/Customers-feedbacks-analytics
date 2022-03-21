import  '../Assets/CSS/Header.css';
import '../Assets/CSS/CategoryPage.css'
import perif from '../Assets/z.jpg'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Pagination from '../Components/Pagination';

export default function AccessoriesPage(){
    return(
        <div className='categoryPageContainer'>
            <div className='the_header' style={{   background: `url(${perif}) ` , backgroundSize:"cover" , backgroundRepeat:"no-repeat" }}
             >
                <div className='header_title'> Accessoires et périphérique </div>
                <div className='header_overlay'></div>
            </div>
           < div className='tab_panel_container'>
               <div className='tab_panel'>
               <Tabs  defaultActiveKey='souris' >
  <Tab eventKey="souris" title="Souris" className='mytab'>
<Pagination id_categorie={3}/>
  </Tab>
  <Tab eventKey="clavier" title="Clavier" className='mytab'>
<Pagination id_categorie={4}/>
  </Tab>
  <Tab eventKey="casques" title="Casque et écouteurs" className='mytab'>
<Pagination id_categorie={5}/>
  </Tab>
</Tabs>
</div>
           </div>
        </div>
    )
}