import React,{useState,useEffect}from "react"
import '../../Assets/CSS/LoginPage.css'
import { useHistory } from 'react-router-dom';
import ManageUser from "../../Components/ManageUser";
import axios  from "axios"
import Swal from 'sweetalert2'
export default function LoginPage(props) {

    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [address,setAddress]=useState("")
    const [mobile,setMobile]=useState("")
    const[loginemail,setLoginemail]= useState("")
    const [loginpassword, setLoginpassword] = useState("")



    let history = useHistory()
    const token = localStorage.getItem('token')
  //Register Form Handlers

    const handleUsernameChange = (e) =>{
        setUsername(e.target.value)
    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }
    const handleAddressChange = (e) =>{
        setAddress(e.target.value)
    }
    const handleMobileChange = (e) =>{
        setMobile(e.target.value)
    }
  
    //User Register Handler
    const handleRegisterSubmit = ()  =>  {
 
    var formData = new FormData(); 
    formData.append('username',username)
    formData.append('email',email)
    formData.append('password',password)
    formData.append('address',address)
    formData.append('mobile',mobile)
    axios({
        method: "post",
        url: "http://localhost:5000/user/register",
        data: formData,
        headers: { "Content-Type": "" },
      })
        .then((response) => {
           if (response.status === 200) {
          console.log("la requête s'est envoyée avec succès ! ");
          console.log(response.data.error);
           alert(JSON.stringify(response.data))
           }  
        })
        .catch((error) => {
            console.log("une erreur s'est produite")
            console.log(error.response.data)
            
            Swal.fire({
                title: 'Erreur!',
                text: error.response.data.erreur,
                icon: 'error',
                showDenyButton: true,
                showConfirmButton: false,
                denyButtonText: `Réessayer`,

              })
        });
    }
    //getting the token
    

    //User Login Handler
    const handleLoginSubmit = () => {  
        var LoginForm = new FormData(); 
        LoginForm.append('email',loginemail)
        LoginForm.append('password',loginpassword)
        console.log(LoginForm.get('email'))
        console.log(LoginForm.get('password'))
        axios({
            method: "post",
            url: "http://localhost:5000/token",
            data: LoginForm,
            headers: { "Content-Type": "" },
          })
            .then((response) => {
            console.log("succes")
            console.log(response.data)
            props.setToken(response.data.access_token)
            Swal.fire({
               
                icon: 'success',
                title: 'Vous êtes connecté(e) avec succès',
                showConfirmButton: false,
                timer: 2000
              })
         
            history.push('/')
            })
            .catch((erreur)  => {
              console.log("fail")
                
              console.log(erreur.response.data.msg)
              Swal.fire({
                title: 'Erreur!',
                text: erreur.response.data.msg,
                icon: 'error',
                showDenyButton: true,
                showConfirmButton: false,
                denyButtonText: `Réessayer`,

              })
            });
    }

    return (
        <div className="loginpage">
            <div className="main">
        
            <input type="checkbox" id="chk" aria-hidden="true" />
                <div className="signup">
                   
                    
                        <label  htmlFor="chk" aria-hidden="true" >Inscrivez-vous</label>
                        <input  type="text" value={username ?? ""} placeholder="Nom d'utlisateur" required="True" onChange={handleUsernameChange} />
                        <input   type="email" value={email ?? ""} placeholder="Email" required="True" onChange={handleEmailChange} />
                        <input type="password"  value={password ?? ""} placeholder="Mot de passe" required="True"  onChange={handlePasswordChange}/>
                        <input   value={address ?? ""} placeholder="Adresse" required="True" onChange={handleAddressChange}/>
                        <input  value={mobile ?? ""} placeholder="Numero de téléphone" required="True"  onChange={handleMobileChange}/>
                        <button className="loginButton" onClick={handleRegisterSubmit}>S'inscrire</button>
                        
                    
                </div>
                  <div className="login">
                        
                        <label  htmlFor="chk" aria-hidden="true" >Connectez-vous</label>
                        <div>
                        <input type="text"  placeholder="Email"  value={loginemail ?? ""} required="True"onChange={(e)=> {setLoginemail(e.target.value)}} />
                        <input type="password"  placeholder="Mot de passe"   value={loginpassword ?? ""} required="True"  onChange={(e)=>{setLoginpassword(e.target.value)}}/>
                        <button  className="loginButton" onClick={handleLoginSubmit}>Connecter</button>
                        </div>
                       
                </div> 
                
            </div>
        </div>

    )
}