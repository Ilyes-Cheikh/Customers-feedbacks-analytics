import "../Assets/CSS/AdminProductPage.css";
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams} from "react-router-dom";

export default function AdminProductPage() {
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
        <div className="admin_product_page_container">
            
        </div>
    )
    )