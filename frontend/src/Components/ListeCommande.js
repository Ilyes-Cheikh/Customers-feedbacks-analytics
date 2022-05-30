import react,{useEffect, useState} from 'react'
import '../Assets/CSS/ListeCommande.css'
import Navbar from './Navbar'
import Swal from 'sweetalert2'
export default function ListeCommande() {
    const [commande,setCommande]=useState(JSON.parse(localStorage.getItem('commande')))
  
    let somme=0;
    useEffect(() => {
        let unmounted = false
        if (!unmounted) {
            
            setCommande(JSON.parse(localStorage.getItem('commande')))
           
            
        }
        return () => { unmounted = true }
    }, [])
    const handleremove= (item) =>{
        var index = commande.indexOf(item);
        commande.splice(index, 1);
        localStorage.setItem('commande', JSON.stringify(commande));
        window.location.reload();
    }
    const handleConfirmer = () =>{
        Swal.fire({
          
            title: "Votre commande a été passée avec succes !",
            icon: "success"
           } )
    }
    return (
        <div className='panierpage'>
            <Navbar/>
          
            <div class="shopping-cart">
            {commande.map((item) => {
             
               somme += item.prix;
               console.log(somme)
               return(
                <div className="product">
                    <div className="product-image">
                        <img src={`/uploads/${item.image}`}/>
                    </div>
                    <div className="product-details">
                       
                        <p className="product-description">{item.nom}</p>
                    </div>
                    <div className="product-price">{item.prix} Dt </div>
               
                    <div class="product-removal">
                        <button className="remove-product" onClick={() => handleremove(item)}>
                            Supprimer ce produit
                        </button>
                    </div>
                
                </div>
                
               )
            })
         
            }
               

             
                <h2>prix total : {somme} Dt </h2>
                <button class="checkout" onClick={handleConfirmer}>Confirmer</button>

            </div>
        </div>
    )

}