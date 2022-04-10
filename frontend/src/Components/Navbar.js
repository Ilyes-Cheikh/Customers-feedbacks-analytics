import {React , useState}  from 'react'
import "../Assets/CSS/Navbar.css"
import logobleu from "../Assets/logobluelow.png"
import logoblanc from "../Assets/logowhite.png"
import pcportable from "../Assets/materiels_maint.png"
import smartphonestablettes from"../Assets/smartphones-tablettes.png"
function Navbar() {
  const [charger, setCharger] = useState(false)
    const handleCharger = (val)=>{
        setCharger(val)
    }
  const [moved, setMoved] = useState(false)
  window.addEventListener('scroll', function (e) {
      if (window.scrollY > 0) {
          setMoved(true)
      }
      else {
          setMoved(false)
      }
  })
  return (
    <div>
        <div  className='header'  >
      <a href="#" className="logo"><img src={logoblanc}/></a>
      <nav>
        <ul className="menu-items">
          <li><a href="#" className="menu-item">Acceuil</a></li>
          <li>
            <a href="#" className="menu-item">Informatique</a>
            <div className="mega-menu">
              <div className="content">
              <div className="col">
                  <section>
                  <a href="#" className='categorie-img'><img src={pcportable}/></a>
                  </section>
                </div>
                <div className="col">

                  <section >
                    <h2>Ordinateur</h2>
                    <ul className="mega-links">
                      <li> 
                        <a href="#">PC portable</a></li>
                      <li><a href="#">PC de bureau</a></li>
                    </ul>
                      
                    
                   
                  </section>
                </div>
                
                <div className="col">
                  <section>
                    <h2>Accessoires et Périphériques</h2>
                    <ul className="mega-links">
                      <li><a href="#">Casque & Écouteurs</a></li>
                      <li><a href="#">Souris</a></li>
                      <li><a href="#">Clavier</a></li>
                     
                      
                    </ul>
                  </section>
                </div>
                <div className="col">
                  <section>
                    <h2>Composant Informatique</h2>
                    <ul className="mega-links">
                      <li><a href="#">Disque dur </a></li>
                  
                      <li><a href="#">Carte graphique</a></li>
                     
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#" className="menu-item">Telephone & Tablette</a>
            <div className="mega-menu">
              <div className="content">
              <div className="col">
                  <section>
                  <a href="#" className='categorie-img'><img src={smartphonestablettes}/></a>
                  </section>
                </div>
                <div className="col">

                  <section >
                    <h2>Téléphone</h2>

                    <ul className="mega-links">
                      <li><a href="#">Smartphone</a></li>
                     
                      
                    </ul>
                      
                    
                    
                    
                  </section>
                </div>
                
                <div className="col">
                  <section>
                    <h2>Tablette</h2>
                    <ul className="mega-links">
                      <li><a href="#">Tablette</a></li>
                      <li><a href="#">Tablette graphique</a></li>
                   
                      
                    </ul>
                  </section>
                </div>
            
              </div>
            </div>
          </li>
       
          <li>
            <a href="#" className="menu-item">Blog</a>
            <div className="mega-menu blog">
              <div className="content">
                <div className="col">
                  <a href="#" className="img-wrapper"
                    ><span className="img"
                      ><img
                        src="https://picsum.photos/400?random=2"
                        alt="Random Image" /></span
                  ></a>
                  <h2>Title</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                    quibusdam deserunt quis.
                  </p>
                  <a href="#" className="read-more">read more...</a>
                </div>
                <div className="col">
                  <a href="#" className="img-wrapper"
                    ><span className="img"
                      ><img
                        src="https://picsum.photos/400?random=3"
                        alt="Random Image" /></span
                  ></a>
                  <h2>Title</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                    quibusdam deserunt quis.
                  </p>
                  <a href="#" className="read-more">read more...</a>
                </div>
                <div className="col">
                  <a href="#" className="img-wrapper"
                    ><span className="img"
                      ><img
                        src="https://picsum.photos/400?random=4"
                        alt="Random Image" /></span
                  ></a>
                  <h2>Title</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                    quibusdam deserunt quis.
                  </p>
                  <a href="#" className="read-more">read more...</a>
                </div>
              </div>
            </div>
          </li>
          <li><a href="#" className="menu-item">About</a></li>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default Navbar