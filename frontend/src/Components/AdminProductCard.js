import "../Assets/CSS/AdminProductCard.css"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Button from 'react-bootstrap/Button'
import { Modal, Form } from "react-bootstrap";
import axios from "axios";
import Swal from 'sweetalert2';
import {React, useState} from 'react';
import 'reactjs-popup/dist/index.css';


export default function AdminProductCard(props) {
    const [stock, setStock] = useState(0);
    const [fetchstock,setFetchstock] = useState(0);
    const update_stock = () =>{
        var Stockform = new FormData();
        Stockform.append('stock',stock) 
        axios({
            method: "put",
            url: `http://127.0.0.1:5000/produit/update/${props.id_produit}`,
            data: Stockform,
            headers: { "Content-Type": "" },
          }).then((res)=>{
              console.log("succes")
          })
          Swal.fire({
            title: 'Le stock a été modifié avec succes !',
            icon: 'succes',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: "D'accord",

        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
        })
          handleClose();

    }
    const handleStockChange = (e) =>{
        setStock(e.target.value)
    }
    const delete_function = () => {
        axios.delete(`http://127.0.0.1:5000/produit/delete/${props.id_produit}`).then((res) => {
            console.log(res.data)
            Swal.fire({
                title: 'Le produit a été supprimé avec succes !',
                icon: 'succes',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: "D'accord",

            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            })
        }).catch((err) => {
            console.log(err)
            alert("error !!")
        })
    }

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onLoginFormSubmit = (e) => {
        e.preventDefault();
        handleShow();
    };
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
                                    <br />
                                    <div className="stat_card">
                                        <div className="stat_value">
                                            {props.stock}
                                        </div>
                                        <div className="stat_label">
                                            En stock
                                        </div>
                                    </div>
                                </div>
                                <div className="prog_bar_container">
                                    <div className="prog_bar">
                                        <div style={{ width: 134, height: 134 }}>
                                            <CircularProgressbar value={props.satisfaction_rate * 100} text={Math.trunc(props.satisfaction_rate * 100) + `%`} />
                                        </div>
                                        <div className="prog_bar_label"> Taux de staisfaction</div>
                                    </div>
                                </div>

                            </div>
                            <div className="buttons">
                                <div className="one_button">
                                    <Button variant="danger" onClick={delete_function}> Supprimer ce produit </Button>
                                </div>
                                <div className="one_button">
                                    <Button variant="info" onClick={handleShow} style={{ width: "196px", marginTop: "2%" }}> Modifier le stock</Button>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton style={{ backgroundColor: "#6a6a6a" }}>
                                            <Modal.Title style={{ color: "white", fontFamily: 'Info' }}> Modification du stock </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body >
                                            <Form onSubmit={onLoginFormSubmit}>
                                                <Form.Group >
                                                    <Form.Label style={{ color: 'black', fontFamily: 'Info', fontSize: '25px' }}> Quantité de stock</Form.Label>
                                                    <input 
                                                        placeholder="Entrer la quantité"
                                                        value={stock}
                                                        onChange={
                                                            handleStockChange
                                                        }
                                                    />
                                                </Form.Group>
                                                <br />
                                                <Button variant="primary" type="submit" onClick={update_stock}>
                                                     Enregistrer les données 
                                                </Button>
                                            </Form>
                            
                                        </Modal.Body>
                            
                                    </Modal>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}