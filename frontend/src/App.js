import './App.css';
import Axios from 'axios';
import {useEffect, useState} from 'react'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home_Page";
import TelephonePage from './Pages/TelephonePage';
import TablettePage from './Pages/TablettePage';
import OneProductPage from './Components/OneProductPage';
import AccessoriesPage from './Pages/AccesoriesPage';
import ComputerPage from './Pages/ComputerPage';
import ComposantPage from './Pages/ComposantPage';

function App() {
  const [produits,setProduits] = useState([])
  const [produit,setProduit] = useState([])
  const [prix,setPrix] = useState(0)


  useEffect(() => {
    let unmounted = false
    if (!unmounted) {
        Axios.get("http://localhost:5000/get").then(
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
    <div className="App">
      <Navbar/>
      <ComposantPage/>
    </div>
  );
}

export default App;
