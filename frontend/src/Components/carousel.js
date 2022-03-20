import im1 from '../Assets/im1.jpg';
import im2 from '../Assets/im2.jpg';
import im3 from '../Assets/im3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import '../Assets/CSS/slider.css';

export default function Slider(){
    return(
        <Carousel >
        <Carousel.Item>
            <img 
                className="d-block w-100"
                src={im1}
                alt="First slide"
               
            />
            <Carousel.Caption style={{fontSize:"3rem"}}>
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

            <Carousel.Caption style={{fontSize:"3rem"}}>
                <div>JUSQU'A -70 % </div>
                <div>Obtenez les meilleurs soldes chez nous!</div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={im3}
                alt="Third slide"
              
            />

            <Carousel.Caption style={{fontSize:"3rem"}}>
                <div>On Livre</div>
                <div> sur toute la tunisie.</div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}