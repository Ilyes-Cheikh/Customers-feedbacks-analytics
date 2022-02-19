import './App.css';
<<<<<<< HEAD
import Axios from 'axios';
import {useEffect, useState} from 'react'
=======
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home_Page";
>>>>>>> 1b20a6961fa287ca21e3badc9c17cf5c2ad28e7a
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
<<<<<<< HEAD
         {produits.map(produit => (
    <div>
   
    <img src={`/uploads/${produit.image}`} />
    <h1>{ produit.nom_produit }</h1>
    <h3> {produit.description}</h3>
    <h2>{ produit.prix_produit} DT</h2>
    </div>
  ))}
     
=======
      <Navbar/>
      <Home/>
>>>>>>> 1b20a6961fa287ca21e3badc9c17cf5c2ad28e7a
    </div>
  );
}

export default App;
