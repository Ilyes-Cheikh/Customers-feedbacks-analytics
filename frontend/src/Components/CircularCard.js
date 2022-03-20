import '../Assets/CSS/CircularCard.css';

export default function CircularCard(props){
    return(
        <div className='circle_card'>
        <div className="circle_container">
            <img className="circle_img" src={props.img}/>
        </div>
        <div className='cirle_title'> {props.title} </div>
        </div>
    )
}