
import '../Assets/CSS/Home_Page.css';
import Card from '../Components/Card.js'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState,useEffect } from 'react';
import Axios from 'axios';
import Slider from '../Components/carousel';
import CircularCard from '../Components/CircularCard';
import pc from '../Assets/pc2.jpg';
import acc from '../Assets/accessories.jpg';
import tab from '../Assets/tabletta.jpg';
import ssd from '../Assets/ssd.jpg';
import tl from '../Assets/teleph.jpg';
export default function Home() {
    const [produits,setProduits] = useState([])
   
const useStyles = makeStyles({
    gridContainer: {
        paddingTop:"5%",
        width:"100%",
        paddingLeft:"2%"
,    }
})
  
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
  const classes = useStyles();
    return (
        <div className="home_page_container">
            <div className="pub_slider">
                <Slider/>
            </div>
            <div className='categorie_space'>
                <div className='categories_text'> Nos catégories </div>
                <div className="circular_card_wrapper">
                <div className='circular_card_background'>
                
                <CircularCard img={acc} title=" Accéssoire et périphérique" link="/accessoires"/>
                  <CircularCard img={pc} title="Ordinateur" link="/ordinateurs"/>
                  <CircularCard img={tl}  title="Téléphone" link="/telephones"/>
                  <CircularCard img={tab}  title="Tablette" link="tablettes"/>
                  <CircularCard img={ssd}  title=" Composant informatique" link="/composants"/>
                </div>
                </div>
                </div>
            <div className='offers_space'>
                <div className='space_text'> Découvrez les offres du jour </div>
                <Grid container spacing={5} className={classes.gridContainer} >
                    {produits.map((produit, key) =>
                        <Grid item xs={6} sm={3}  >

                            <Card nom_produit={produit.nom_produit} description={produit.description} image={produit.image} prix_produit={produit.prix_produit}  id_produit={produit.id_produit}/>
                        </Grid>
                    )}
                </Grid>
                </div>

               
        </div>
    )
}
