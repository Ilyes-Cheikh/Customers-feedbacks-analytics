import { useState,useEffect } from 'react';
import Axios from 'axios';
import Card from '../Components/Card';
import ReactPaginate from 'react-paginate';

export default function Pagination(props){

    const [data,setData] = useState([]);
    const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0)
  const perPage = 3;
  const getData = async() => {
    const res = await Axios.get(`http://localhost:5000/produit/getbycategorie/${props.id_categorie}`)
    const data = res.data;
              const slice = data.slice(offset, offset + perPage)
              const postData = slice.map((data, key) =>
<<<<<<< HEAD
                            <Card nom_produit={data.nom_produit} id_produit={data.id_produit} description={data.description} image={data.image} prix_produit={data.prix_produit} />
=======
                            <Card id_produit={data.id_produit} nom_produit={data.nom_produit} description={data.description} image={data.image} prix_produit={data.prix_produit} />
>>>>>>> 34ae49ec8fe088585389c5c7c3b2bf0ac6ee63d4

                    )
                 
              setData(postData)
              setPageCount(Math.ceil(data.length / perPage))
}

const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage * perPage)
};

useEffect(() => {
    getData()
  }, [offset])  
   
    return(
        <div className='pagination_container'>
             <div className='prod'>
                       {data}
                       </div>
                       <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
        </div>
    )
}