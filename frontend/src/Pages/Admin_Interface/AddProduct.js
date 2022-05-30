import { imageListClasses } from "@mui/material";
import { useState, useEffect } from "react";
import ImageUploading from 'react-images-uploading';
import "../../Assets/CSS/AddProduct.css";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Select from 'react-select'
import SideMenu from "../../Components/SideMenu";
import Swal from 'sweetalert2';

export default function AddProduct() {
    const [Nom, setNom] = useState("");
    const [Desc, setDesc] = useState("");
    const [Prix, setPrix] = useState("");
    const [categ, setCateg] = useState(1);
    const [stockp, setStockp] = useState("");
    const [image, setImage] = useState("");
    const [inactive, setInactive] = useState(false);


    const options = [
        { value: 1, label: 'Ordinateur' },
        { value: 2, label: 'Composant informatique' },
        { value: 3, label: 'Souris' },
        { value: 4, label: 'Clavier' },
        { value: 5, label: 'Casque ou écouteur' },
        { value: 6, label: 'Téléphone' },
        { value: 6, label: 'Tablette' },
      ]
    const onImageChange = (e) => {
        let file = e.target.files[0]
        setImage(file)
       
      };

    const add_function = () => {
        var Productform = new FormData();
        Productform.append('nom_produit', Nom) 
        Productform.append('description', Desc) 
        Productform.append('prix_produit', Prix) 
        Productform.append('stock', stockp) 
        Productform.append('categorie_id', '1') 
        Productform.append('image', image) 
        axios({
            method: "post",
            url: `http://127.0.0.1:5000/produit/add`,
            data: Productform,
            headers: { "Content-Type": "" },
          }).then((res)=>{
            Swal.fire({
                title: 'Le produit a été ajouté avec succes !',
                icon: 'succes',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: "D'accord",
    
            })
              console.log("succes")
              console.log(res.data)
      
          }).catch(err =>{
              console.log(err.data)
          })
         

    }
    return (
        <div className="add_product_container">
            <SideMenu onCollapse={(inactive) => {
                console.log(inactive);
                setInactive(inactive);
            }}/>
            <div className="add_product_space">
            <div className="add_text"> Ajouter un produit </div>
            
                <div className="input_area">
                    <label className="l"> Nom</label>
                    <input className="ll" type="text" value={Nom} onChange={(e) => setNom(e.target.value)} />
                </div>
                <div className="input_area">
                    <label className="l"> Description </label>
                    <input className="ll" type="text" value={Desc} onChange={(e) => setDesc(e.target.value)} />
                </div>
                <div className="input_area">
                    <label className="l"> Catégorie </label>
                    <Select options={options}  onChange={(e) => setCateg(e.target.value)}/>
                </div>
                <div className="input_area">
                    <label className="l"> Prix </label>
                    <input className="ll" type="text" value={Prix} onChange={(e) => setPrix(e.target.value)} />
                </div>
                <div className="input_area">
                    <label className="l"> Stock </label>
                    <input className="ll" type="text" value={stockp} onChange={(e) => setStockp(e.target.value)} />
                </div>
                <div className="input_area">
                    <label className="l"> Image</label>
                    <input className="ll" type="file"  onChange={onImageChange} />
                </div>
                <div className="sub">
                <Button type="submit" variant="danger" onClick={add_function}>Ajouter</Button> 
                </div>
      
            </div>
        </div>
    )
}