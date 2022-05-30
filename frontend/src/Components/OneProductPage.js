import "../Assets/CSS/OneProductPage.css";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Swal from 'sweetalert2'
export default function OneProductPage() {
  let { id_produit } = useParams();
  const [produit, setProduit] = useState({})
  const [isloaded, setIsLoaded] = useState(false)
  const AcheterHandler = () => {
    Swal.fire({
      icon: 'success',
      title: 'Super !',
      text: 'Ce produit est ajouté à votre panier',
  
    })
    var commande = JSON.parse(localStorage.getItem('commande')) || [];
    
    commande.push({image: produit.image , nom: produit.nom_produit, prix : produit.prix_produit});
   
    localStorage.setItem('commande', JSON.stringify(commande));
  }
  useEffect(() => {
    if (!isloaded) {
      axios.get(`http://127.0.0.1:5000/produit/get/${id_produit}`).then((data) => {
        setProduit(data.data)
        setIsLoaded(true)
      }).catch(console.log('error'))
    }
  }, [])


  return (
    <div className="one_product_container">
      <Navbar />
      <div class="product_card">
        <div className="p_c_wrapper">
          <div className="p_c_left_part">
            <div className="prod_img_space">
              <img className="prod_img" src={`/uploads/${produit.image}`} />
            </div>
          </div>
          <div className="right_part">
            <div className="prod_title"> {produit.nom_produit} </div>
            <div className="right_part_blcok2">
              <div className="r_prod_desc">
                <div className="prod_desc_text">
                  {produit.description}
                </div>
                <br />
                <div className="prod_desc_price_button">
                  <div className="prod_desc_price">
                    {produit.prix_produit} DT
                  </div>
                  <div className="prod_desc_buy">
                    <Button style={{ width: " 35%", paddingTop: "1%", marginTop: "0%" }} variant="outline-danger" size="lg" disabled={produit.stock > 0 ? false : true} onClick={AcheterHandler}>Acheter</Button>
                    <div className="stock"> {produit.stock > 0 ? "En stock" : "rupture du stock"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="comments_space_container">
        <div className="comments_space">
          <Comment id_produit={id_produit} />
        </div>
      </div>
      <Footer />
    </div>
  )
}


