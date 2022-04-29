import '../../Assets/CSS/ProductPage.css';
import  '../../Assets/CSS/Header.css'
import p from '../../Assets/images/phh.jpg';
import Pagination from '../../Components/Pagination';
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

export default function TelephonePage(){
    return(
        <div className='Product_page_container'>
            <Navbar/>
             <div className='the_header' style={{   background: `url(${p}) ` , backgroundSize:"cover" , backgroundRepeat:"no-repeat" }}
             >
                <div className='header_title'> Téléphone </div>
                <div className='header_overlay'></div>
            </div>
            <div className="products_space">
                  <Pagination/>
            </div>
            <Footer/>
        </div>
    )
}