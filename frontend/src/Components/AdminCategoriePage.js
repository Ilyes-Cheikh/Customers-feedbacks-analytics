import { useState, useEffect } from 'react';
import Axios from 'axios';
import AdminProductCard from './AdminProductCard';

export default function AdminCategoriePage(props) {
  const [getstatistics,setGetstatistics] = useState([])

  const getData = async () => {
    const res = await Axios.get(`http://localhost:5000/produit/getbycategorie/${props.id_categorie}`);
    const data = res.data
    console.log(data)
    const ids = data.map((data, key) => { return (data["id_produit"]) });
    console.log(ids);
    ids.map((id, key) => {
      Axios.get(`http://localhost:5000/comment/get/byidproduit/${id}`).then(
        resp => { setGetstatistics(getstatistics=>[...getstatistics , Object.assign(resp.data, data[key])] )})
    })
    console.log(getstatistics)
  }


  useEffect(() => {
    getData()
  },[])
  return (
    <div className='pagination_container' >
      <div className='prod' style={{ display: "table", paddingLeft: 50 }}>
        {getstatistics.map((data, key) =>
      <AdminProductCard nom_produit={data.nom_produit} description={data.description} image={data.image} prix_produit={data.prix_produit} comments_number={data.comments_number} satisfaction_rate={data.satisfaction_rate} />
    )
  }
      </div>
    </div>
  )
}