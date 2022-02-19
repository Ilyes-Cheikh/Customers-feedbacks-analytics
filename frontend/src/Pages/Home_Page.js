import Carousel from 'react-bootstrap/Carousel';
import '../Assets/CSS/Home_Page.css';
import Card from '../Components/Card.js'
import im1 from '../Assets/im1.jpg';
import im2 from '../Assets/im2.jpg';
import im3 from '../Assets/im3.jpg';

export default function Home() {
    return (
        <div className="home_page_container">
            <div className="pub_slider">
                <Carousel style={{ width: '100%', height: '92vh' }}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={im1}
                            alt="First slide"
                            style={{ width: '100%', height: '92vh' }}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={im2}
                            alt="Second slide"
                            style={{ width: '100%', height: '92vh' }}
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={im3}
                            alt="Third slide"
                            style={{ width: '100%', height: '92vh' }}
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        

        
            <div className='offers_space'>
                <div className='cards_line'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                </div>
        </div>
    )
}
