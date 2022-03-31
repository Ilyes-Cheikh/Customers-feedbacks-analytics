import "../Assets/CSS/OneProductPage.css";
import pc from '../Assets/pc1.jpg';
import Button from 'react-bootstrap/Button';

import Comment from "./Comment";
export default function OneProductPage() {
  return (
    <div className="one_product_container">
      <div class="product_card">
        <div class="thumbnail"><img class="left" src={pc} /></div>
        <div class="right">
          <div className="right_title"> Product title</div>
          <div className="centred">
            <div class="marque">
              <div className="la_marque">Marque</div>
            </div>
          </div>
          <div class="separator"></div>
          <p className="parag">Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...</p>
       
  <div classNAme="buy_button">
  
          <Button variant="outline-danger" size="lg">Acheter</Button>
        </div>       
        </div>
        <div className="price_space">
        <div className="the_price">1200DT</div>
        </div>
       <Comment/>
        

      </div>

    </div>
  )
}