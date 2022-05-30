import im1 from '../Assets/images/imag2.jpg';
import im2 from '../Assets/images/imag.jpg';
import im3 from '../Assets/images/im1.jpg';
import Carousel from 'react-bootstrap/Carousel';
import '../Assets/CSS/slider.css';

export default function Slider(){
    return(
        <Carousel >
        <Carousel.Item>
            <img 
                className="d-block w-100"
                src={im3}
                alt="First slide"
               
            />
            <Carousel.Caption style={{fontSize:"3rem" , textShadow:"1px 5px 3px  black"}}>
                <div>Profitez de nos services, </div>
                <div>obtenez tout en un seul click.</div>
                <p></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={im2}
                alt="Second slide"
              
            />

            <Carousel.Caption style={{fontSize:"3rem" , textShadow:"1px 5px 3px black"}}>
                <div>JUSQU'A -70 % </div>
                <div>Obtenez les meilleurs soldes chez nous!</div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={im1}
                alt="Third slide"
              
            />

            <Carousel.Caption style={{fontSize:"3rem" , textShadow:"1px 5px 3px  black"}}>
                <div>On Livre</div>
                <div> sur toute la tunisie.</div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}