import React, { useState , useEffect} from 'react'
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from 'react-bootstrap/Button';
import Userimg from '../Assets/images/user.jpg'
import axios from 'axios';

function Comment(props) {
    const  [comments,setComments]= useState([])
    const [isloaded, setIsLoaded] = useState(false)
  
  
    useEffect(() => {
    if (!isloaded) {
      axios.get(`http://127.0.0.1:5000/comment/getbyproduit/ ${props.id_produit}`).then((data) => {
        console.log(data.data)
        setComments(data.data)
        setIsLoaded(true)
      }).catch(console.log('error'))
    }
  }, [])



  return (
    <div style={{ padding: 14, opacity: "0.8" }} className="App" >
      <Paper style={{ padding: "40px 20px" }}>
        {comments.map((item) => {
          return(
            <div>
            <Grid container wrap="wrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={Userimg} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h5 style={{ margin: 0, textAlign: "left" }}>{item.user_id}</h5>
            <p style={{ textAlign: "left", fontSize: "15px" }}>
              {item.comment_text}
            </p>
            <p style={{ textAlign: "left", color: "gray", fontSize: "15px" }}>
              posted 1 minute ago
            </p>
          </Grid>
        </Grid>
         <Divider variant="fullWidth" style={{ margin: "10px 0px 20px", background: 'black' }} />
         </div>
          );
        })}
      
        
       
       
        <div style={{ display: "flex", alignItems: "end" }}>
          <TextField id="filled-basic" label="Ecrire un commentaire" variant="standard"
            style={{ width: "100%" }}
            multiline={true}
            rows={1}
            rowsMax={10}
            margin="normal"
          />
          <Button  style={{ marginBottom: "0.89%" }}  >
            <i className="bi bi-send"></i>
          </Button>
        </div>
      </Paper>

    </div>
  )
}

export default Comment