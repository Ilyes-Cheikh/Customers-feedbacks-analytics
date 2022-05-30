import React, { useState , useEffect} from 'react'
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from 'react-bootstrap/Button';
import Userimg from '../Assets/images/user.jpg'
import axios from 'axios';
import ManageUser from './ManageUser';
import Swal from 'sweetalert2'
import moment from 'moment'
function Comment(props) {
    const  [comments,setComments]= useState([])
    const [isloaded, setIsLoaded] = useState(false)
    const [commentaire,setCommentaire] = useState('')
    const {getCurrentUser, saveUser, removeUser} = ManageUser()
    const currentUser = getCurrentUser()
    useEffect(() => {
    if (!isloaded) {
      axios.get(`http://127.0.0.1:5000/comment/get/joinuser/ ${props.id_produit}`).then((data) => {
        console.log(data.data)
        setComments(data.data)
        setIsLoaded(true)
      }).catch(console.log('error'))
    }
  }, [])

  const handleCommentChange = (e) => {
      setCommentaire(e.target.value)
  }

  const handleComment = () => {
    var Comment = new FormData(); 
        Comment.append('comment_text',commentaire)
        Comment.append('user_id',currentUser.user_id)
        Comment.append('produit_id',props.id_produit)
      
        axios({
            method: "post",
            url: "http://localhost:5000/comment/add",
            data: Comment,
            headers: { "Content-Type": "" },
          })
            .then((response) => {
            console.log("succes")
            Swal.fire({
               
                icon: 'success',
                title: 'Votre commentaire a été ajouté avec succès',
                showConfirmButton: true,
                confirmButtonText : "D'accord"
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload();
                  
                }})
              
              
            })
            .catch((erreur)  => {
              console.log("fail")
                
              console.log(erreur.response.data.msg)
              Swal.fire({
                title: 'Erreur!',
                text: "Réessayer d'ajouter votre commentaire",
                icon: 'error',
                showDenyButton: true,
                showConfirmButton: false,
                denyButtonText: `Réessayer`,

              })
            });
  }

  return (
    <div style={{ padding: 14, opacity: "0.8" }} className="App" >
      <Paper style={{ padding: "40px 20px" }}>
        {comments.map((item) => {
          console.log(item.comment_date)
          return(
            <div>
            <Grid container wrap="wrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={Userimg} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h5 style={{ margin: 0, textAlign: "left" }}>{item.username}</h5>
            <p style={{ textAlign: "left", fontSize: "15px" }}>
              {item.comment_text}
            </p>
            <p style={{ textAlign: "left", color: "gray", fontSize: "15px" }}>
              Commenaire ajouté le {moment(item.comment_date).format('DD/MM/YYYY') }
            </p>
          </Grid>
        </Grid>
         <Divider variant="fullWidth" style={{ margin: "10px 0px 20px", background: 'black' }} />
         </div>
          );
        })}
      
        
       
        {currentUser && currentUser!== "" && currentUser!== undefined ?
        <div style={{ display: "flex", alignItems: "end" }}>
          <TextField id="filled-basic" label="Ecrire un commentaire" variant="standard"
            style={{ width: "100%" }}
            multiline={true}
            rows={1}
            rowsMax={10}
            margin="normal"
            onChange={handleCommentChange}
          />
          
          <Button  onClick={handleComment} style={{ marginBottom: "0.89%" }}  >
            <i  className="bi bi-send"></i>
          </Button>
        </div> :

        <h7> Connectez-vous pour écrire des commentaires </h7>
      
        }
      </Paper>

    </div>
  )
}

export default Comment