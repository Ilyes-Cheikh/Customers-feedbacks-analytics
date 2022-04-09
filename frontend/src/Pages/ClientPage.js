import '../Assets/CSS/ClientPage.css';
import Axios from 'axios';
import {useEffect, useState} from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Home from "./HomePage";
import TelephonePage from './TelephonePage';
import TablettePage from './TablettePage';
import OneProductPage from '../Components/OneProductPage';
import HomePage from './HomePage';
import AccessoriesPage from './AccesoriesPage';
import ComputerPage from './ComputerPage';
import ComposantPage from './ComposantPage';
import { Router , Route} from 'react-router-dom';

function ClientPage() {
  const [produits,setProduits] = useState([])
  const [produit,setProduit] = useState([])
  const [prix,setPrix] = useState(0)


  useEffect(() => {
    let unmounted = false
    if (!unmounted) {
        Axios.get("http://localhost:5000/produit/get").then(
            (data) => {
                console.log(data)
                setProduits(data.data)
            }
        )
    }
    return () => { unmounted = true }
}, [])

 console.log(produits)
  produits.map(produit => (
    console.log(produit.nom_produit)
  ))

  return (
    <div className="ClientPage">
      <Navbar/>
      <HomePage/>
     
      <Footer/>
    </div>
  );
}

export default ClientPage;
