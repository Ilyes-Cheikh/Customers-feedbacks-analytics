
import '../Assets/CSS/Home_Page.css';
import Card from '../Components/Card.js'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState,useEffect } from 'react';
import Axios from 'axios';
import Slider from '../Components/carousel'

export default function Home() {
    const [produits,setProduits] = useState([])
   
const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "5vw",
        paddingRight: "5vw",
        paddingTop:"5%",
        width:"100%",
        
    }
})
  
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
  const classes = useStyles();
    return (
        <div className="home_page_container">
            <div className="pub_slider">
                <Slider/>
            </div>
        
            <div className='offers_space'>
                <div className='space_text'> Découvrez les offres du jour </div>
                <Grid container spacing={5} className={classes.gridContainer} >
                    {produits.map((produit, key) =>
                        <Grid item xs={6} sm={3}  >
                            <Card nom_produit={produit.nom_produit} description={produit.description} image={produit.image} prix_produit={produit.prix_produit} />
                        </Grid>
                    )}
                </Grid>
                </div>
        </div>
    )
}
