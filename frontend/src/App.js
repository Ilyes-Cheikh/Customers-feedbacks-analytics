import './App.css';
import Axios from 'axios';
import {useEffect, useState} from 'react'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home_Page";

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
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
