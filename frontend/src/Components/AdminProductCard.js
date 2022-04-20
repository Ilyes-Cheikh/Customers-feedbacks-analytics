import "../Assets/CSS/AdminProductCard.css"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function AdminProductCard(props) {
    return (
        <div className="total_wrapper">
            <div className="twrapper">
                <div className="left_part">
                    <div className="prod_img_space">
                        <img className="prod_img" src={`/uploads/${props.image}`} />
                    </div>
                </div>
                <div className="right_part">
                    <div className="prod_title"> {props.nom_produit} </div>
                    <div className="right_part_blcok2">
                    <div className="prod_desc">
                        <div className="prod_desc_text">
                            {props.description}
                        </div>
                        <div className="prod_desc_prix">
                            {props.prix_produit} DT
                        </div>
                    </div>
                    <div className="statistics_per_produit">
                    <div className="prod_stat">
                        <div className="stat_cards">
                            <div className="stat_card">
                                <div className="stat_value">
                                    {props.comments_number}
                                </div>
                                <div className="stat_label">
                                    commentaires
                                </div>
                            </div>
                            <br/>
                            <div className="stat_card">
                                <div className="stat_value">
                                    4000
                                </div>
                                <div className="stat_label">
                                    achetés/an
                                </div>
                            </div>
                        </div>
                        <div className="prog_bar_container">
                            <div className="prog_bar">
                                <div style={{ width: 134, height: 134 }}>
                                    <CircularProgressbar value={props.satisfaction_rate*100} text={props.satisfaction_rate*100 + `%`} />
                                </div>
                                <div className="prog_bar_label"> Taux de staisfaction</div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}