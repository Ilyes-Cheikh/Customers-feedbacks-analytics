import React from 'react'
import "../Assets/CSS/Footer.css"
import "../Assets/CSS/root.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Wave from "react-wavify";
import GoogleMapReact from 'google-map-react';
import whitelogo from "../Assets/images/logowhitelow.png"
const location = {
    address: "École Nationale des Sciences de l'Informatique",
    lat: 36.813651,
    lng: 10.063750,
  }
  
const defaultProps = {
    center: {
      lat: 36.813651,
      lng: 10.063750
    },
    zoom: 15
  };
  const LocationPin = ({ text }) => (
    <div className="pin">
      
      <p className="pin-text">{text}</p>
    </div>
  )

  function Footer() {
    return (
      <div>
        <Wave
        className="wave" fill="var(--blue-ciel)" options={{
          height: 20,
          amplitude: 50,
          speed: .2,
          points: 2
        }}
      />
  <footer className="footer-section">
    
      <div className="footer-container">
        
          {/*< div className="footer-cta pt-5 pb-5">
          
             <div className="row">
                  <div className="col-xl-4 col-md-4 mb-30">
                      <div className="single-cta">
                          <i className="fas fa-map-marker-alt"></i>
                          <div className="cta-text">
                              <h4>Find us</h4>
                              <span>1010 Avenue, sw 54321, chandigarh</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-md-4 mb-30">
                      <div className="single-cta">
                          <i className="fas fa-phone"></i>
                          <div className="cta-text">
                              <h4>Call us</h4>
                              <span>9876543210 0</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-md-4 mb-30">
                      <div className="single-cta">
                          <i className="far fa-envelope-open"></i>
                          <div className="cta-text">
                              <h4>Mail us</h4>
                              <span>mail@info.com</span>
                          </div>
                      </div>
                  </div>
      </div>
          </div>*/}
          <div className="footer-content pt-5 pb-5">
              <div className="row">
                  <div className="col-xl-4 col-lg-4 mb-50">
                      <div className="footer-widget">
                          <div className="footer-logo">
                              <a href="index.html"><img src={whitelogo} className="img-fluid" alt="logo"/></a>
                          </div>
                          <div className="footer-text">
                              <p>Vous recherchez des conseils, des bons plans ou encore un service après-vente de qualité, Techno Wave et ses collaborateurs, tous passionnés par l’informatique et l’univers High Tech, sauront répondre à vos besoins, que ce soit sur internet ou dans l’un de nos magasins près de chez vous.</p>
                          </div>
                          <div className="footer-social-icon">
                              <span>Follow us</span>
                              <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                              <a href="#"><i className="fab fa-instagram instagram-bg"></i></a>
                              <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                              
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-30 ">
                      <div className="footer-widget">
                         
                          <ul>
                              <li><a href="#">Acceuil</a></li>
                              <li><a href="#">Accéssoire et périphérique</a></li>
                              <li><a href="#">Ordinateur</a></li>
                              <li><a href="#">Téléphone</a></li>
                              <li><a href="#">Tablette</a></li>
                              <li><a href="#">Composant informatique</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-50" >
                      <div className="footer-widget">
                      <div className >
                              <h3 style={{color:'white'}}>Trouvez-nous</h3>
                              <p style={{color:'white'}}>Campus Universitaire de la Manouba، Manouba 2010</p>
                          </div>
                      <div className='map'>
                          
                      <iframe src="https://maps.google.com/maps?q=ensi%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

      </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
  </footer>
  </div>
                )
}

                export default Footer