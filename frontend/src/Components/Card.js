import '../Assets/CSS/Card.css'
import Button from 'react-bootstrap/Button';

export default function Card(props) {
  return (
    <div className='card_wrap'>
      <div className="card">
        <div className="container">
          <div className="card_content">
            <img className='card_img' src={`/uploads/${props.image}`} />
            
            <div className="overlay">
              <div className="items head">
                 {props.description.length > 100 ? <p> { props.description.substring(0, 95) + '...'} </p> : <p>{props.description}</p> }
              </div>
              <div className="items boutton">
              <a  href={`http://localhost:3000/produits/${props.id_produit}`}  target='_blank'>
                <Button className="card_button" variant="succes"  >Read more </Button>
                </a>
              </div>  
            </div>
            <div className='product_title_price'>
              <div className='product_title'> {props.nom_produit} </div>
              <div className='product_price'> {props.prix_produit}  DT  </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>

  )
}