import "../Assets/CSS/OneProductPage.css";
import pc from '../Assets/pc1.jpg';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams} from "react-router-dom";

import Comment from "./Comment";
export default function OneProductPage() {
  let { id_produit } = useParams();
  const [produit, setProduit] = useState({})
  const [isloaded,setIsLoaded]= useState(false)

  useEffect(() => {
    if (!isloaded) {
    axios.get(`http://127.0.0.1:5000/produit/get/${id_produit}`).then((data) => {
        setProduit(data.data)
        setIsLoaded(true)
    }).catch(console.log('error'))}
},[])
  return (
    <div className="one_product_container">
      <div class="product_card">
        <div class="thumbnail"><img class="left" src={`/uploads/${produit.image}`}  /></div>
        <div class="right">
          <div className="right_title"> {produit.nom_produit} </div>
          <div className="centred">
            
          </div>
          <div class="separator"></div>
          <p className="parag">{produit.description}</p>
       
  <div classNAme="buy_button">
  
          <Button variant="outline-danger" size="lg">Acheter</Button>
        </div>       
        </div>
        <div className="price_space">
        <div className="the_price">{produit.prix_produit} DT</div>
        </div>
       <Comment/>
        

      </div>

    </div>
  )
}