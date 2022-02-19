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
      <a href="#" class="logo"><img src={logoblanc}/></a>
      <nav>
        <ul class="menu-items">
          <li><a href="#" class="menu-item">Acceuil</a></li>
          <li>
            <a href="#" class="menu-item">Informatique</a>
            <div class="mega-menu">
              <div class="content">
              <div class="col">
                  <section>
                  <a href="#" className='categorie-img'><img src={pcportable}/></a>
                  </section>
                </div>
                <div class="col">

                  <section >
                    <h2>Ordinateur portable</h2>
                    <ul class="mega-links">
                      <li><a href="#">PC portable</a></li>
                      <li><a href="#">Mac</a></li>
                    </ul>
                      
                    
                    
                    <h2>Ordinateur de bureau</h2>
                    <ul class="mega-links">
                      <li><a href="#">Ecran</a></li>
                      <li><a href="#">PC de bureau</a></li>
                    </ul>
                  </section>
                </div>
                
                <div class="col">
                  <section>
                    <h2>Accessoires et Périphériques</h2>
                    <ul class="mega-links">
                      <li><a href="#">Casque & Écouteurs</a></li>
                      <li><a href="#">Souris</a></li>
                      <li><a href="#">Clavier</a></li>
                      <li><a href="#">Tapis</a></li>
                      <li><a href="#">Webcam</a></li>
                      
                    </ul>
                  </section>
                </div>
                <div class="col">
                  <section>
                    <h2>Composant Informatique</h2>
                    <ul class="mega-links">
                      <li><a href="#">Disque dur interne</a></li>
                      <li><a href="#">Afficheur</a></li>
                      <li><a href="#">Processeur</a></li>
                      <li><a href="#">Carte graphique</a></li>
                      <li><a href="#">Barrette mémoire</a></li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#" class="menu-item">Telephone & Tablette</a>
            <div class="mega-menu">
              <div class="content">
              <div class="col">
                  <section>
                  <a href="#" className='categorie-img'><img src={smartphonestablettes}/></a>
                  </section>
                </div>
                <div class="col">

                  <section >
                    <h2>Telephone</h2>

                    <ul class="mega-links">
                      <li><a href="#">Smartphone</a></li>
                      <li><a href="#">Telephone portable</a></li>
                      <li><a href="#">telephone fixe</a></li>
                      
                    </ul>
                      
                    
                    
                    
                  </section>
                </div>
                
                <div class="col">
                  <section>
                    <h2>Tablette</h2>
                    <ul class="mega-links">
                      <li><a href="#">Tablette</a></li>
                      <li><a href="#">Etui De Protection</a></li>
                      <li><a href="#">Chargeur Et Câble</a></li>
                      <li><a href="#">Film De Protection</a></li>
                      <li><a href="#">Divers</a></li>
                      
                    </ul>
                  </section>
                </div>
                <div class="col">
                  <section>
                    <h2>Accessoires Téléphones</h2>
                    <ul class="mega-links">
                      <li><a href="#">SmartWatch</a></li>
                      <li><a href="#">Etui De Protection</a></li>
                      <li><a href="#">Chargeur Et Câble</a></li>
                      <li><a href="#">Film De Protection</a></li>
                      <li><a href="#">Divers</a></li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#" class="menu-item">Telephone & Tablette</a>
            <div class="mega-menu">
              <div class="content">
                <div class="col">
                  <section>
                    <h2>Featured 1</h2>
                    <a href="#" class="img-wrapper"
                      ><span class="img"
                        ><img
                          src="https://picsum.photos/400?random=1"
                          alt="Random Image" /></span
                    ></a>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </section>
                </div>
                <div class="col">
                  <section>
                    <h2>Featured 2</h2>
                    <ul class="mega-links">
                      <li><a href="#">Item 1</a></li>
                      <li><a href="#">Item 2</a></li>
                      <li><a href="#">Item 3</a></li>
                      <li><a href="#">Item 4</a></li>
                      <li><a href="#">Item 5</a></li>
                    </ul>
                  </section>
                </div>
                <div class="col">
                  <section>
                    <h2>Featured 3</h2>
                    <ul class="mega-links">
                      <li><a href="#">Item 1</a></li>
                      <li><a href="#">Item 2</a></li>
                      <li><a href="#">Item 3</a></li>
                      <li><a href="#">Item 4</a></li>
                      <li><a href="#">Item 5</a></li>
                    </ul>
                  </section>
                </div>
                <div class="col">
                  <section>
                    <h2>Featured 4</h2>
                    <ul class="mega-links">
                      <li><a href="#">Item 1</a></li>
                      <li><a href="#">Item 2</a></li>
                      <li><a href="#">Item 3</a></li>
                      <li><a href="#">Item 4</a></li>
                      <li><a href="#">Item 5</a></li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#" class="menu-item">Blog</a>
            <div class="mega-menu blog">
              <div class="content">
                <div class="col">
                  <a href="#" class="img-wrapper"
                    ><span class="img"
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
                  <a href="#" class="read-more">read more...</a>
                </div>
                <div class="col">
                  <a href="#" class="img-wrapper"
                    ><span class="img"
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
                  <a href="#" class="read-more">read more...</a>
                </div>
                <div class="col">
                  <a href="#" class="img-wrapper"
                    ><span class="img"
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
                  <a href="#" class="read-more">read more...</a>
                </div>
              </div>
            </div>
          </li>
          <li><a href="#" class="menu-item">About</a></li>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default Navbar