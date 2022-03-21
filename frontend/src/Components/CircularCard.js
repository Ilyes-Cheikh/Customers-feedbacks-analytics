import '../Assets/CSS/CircularCard.css';
import {Link}  from "react-router-dom"
export default function CircularCard(props){
    return(
        <div className='circle_card'>
        <div className="circle_container">
            <Link to={props.link} >
            <img className="circle_img" src={props.img}/>
           </Link>
        </div>
        <div className='cirle_title'> {props.title} </div>
        </div>
    )
}