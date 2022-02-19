import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import {useEffect, useState} from 'react'
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
         {produits.map(produit => (
    <div>
   
    <img src={`/uploads/${produit.image}`} />
    <h1>{ produit.nom_produit }</h1>
    <h3> {produit.description}</h3>
    <h2>{ produit.prix_produit} DT</h2>
    </div>
  ))}
     
    </div>
  );
}

export default App;
