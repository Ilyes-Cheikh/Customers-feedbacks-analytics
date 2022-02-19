import '../Assets/CSS/Card.css'
import pc from '../Assets/pc.jpg'
import Button from 'react-bootstrap/Button';

export default function Card() {
  return (
    <div className='card_wrap'>
      <div class="card">
        <div class="container">
          <div className="card_content">
            <img src={pc} style={{ width: "100%" }} />
            
            <div class="overlay">
              <div class="items"></div>
              <div class="items head">
                <p>PC mouch normal cuhefzefipzv hfzejfzejfz jifpzjigpaipjzg njjohmh jojoimhuu </p>
              </div>
              
              <div class="items boutton">
                <Button variant="primary" style={{ backgroundColor: "#b2b0ae", width: "60%", borderRadius: "12px" }} >Read more </Button>
              </div>
            </div>
            <div className='product_title_price'>
              <div className='product_title'> pc mouch normal</div>
              <div className='product_price'> 200dt</div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>

  )
}