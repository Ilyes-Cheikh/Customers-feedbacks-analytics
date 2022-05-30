import {React , useState}  from 'react'
import "../Assets/CSS/Navbar.css"
import logobleu from "../Assets/images/logobluelow.png"
import logoblanc from "../Assets/images/logowhite.png"
import pcportable from "../Assets/images/materiels_maint.png"
import smartphonestablettes from"../Assets/images/smartphones-tablettes.png"
import {Link}  from "react-router-dom"
import useToken from './useToken'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import ManageUser from './ManageUser'
import Swal from 'sweetalert2'
import panier from '../Assets/images/panier.png'
function Navbar() {
  let history = useHistory()
  const { token, removeToken, setToken } = useToken();
  const{getCurrentUser, saveUser, removeUser} = ManageUser()
  
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

  function logOut() {
    Swal.fire({
      title: 'Voulez vous vraiment vous déconnecter?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {

        removeToken()
        removeUser()
        axios({
          method: "POST",
          url:"http://localhost:5000/logout",
        })
        .then((response) => {
          
          console.log(response.data)
          console.log(token)
          Swal.fire({
          
            title: "Vous ête déconnecté(e) avec succès !",
            icon: "success"
           } )
          history.push('/')
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            Swal.fire(
              'Erreur!',
              'une erreur est survenue',
              'Erreur'
            )
            }
        })
      
       
      }
    })
   
  }
  return (
    <div>
        <div  className='header'  >
      <a href="#" className="logo"><img src={logoblanc}/></a>
      <nav>
        <ul className="menu-items">
          <li> <Link to="/" exact className="menu-item">Acceuil</Link></li>
          <li>
          <Link to="/accessoires">Accéssoire et périphérique</Link>
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
          <Link to="/tablettes" className="menu-item">Telephone & Tablette</Link>
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
       
       
          <li><Link to="/ordinateurs" className="menu-item">Ordinateur</Link></li>
         
        </ul>
      </nav>
      {token==null ? 
      <div className="SignButtonDiv">
      <Link  to="/login">
      <button className='SignButton' >  Se connecter / S'inscrire  </button>
     </Link>
      </div> :
      <div className='pan_button'>
        <Link  to="/Panier">
        <img  className="panierimage" src={panier}/>
        </Link>
         <button className='LogoutButton'   onClick={logOut}> Déconnexion  </button>
      </div>
      
      }
    </div>
    </div>
  )
}

export default Navbar