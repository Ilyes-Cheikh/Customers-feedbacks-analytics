import React,{useState}from "react"
import '../Assets/CSS/LoginPage.css'
import axios  from "axios"
export default function LoginPage() {
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [address,setAddress]=useState('')
    const [mobile,setMobile]=useState('')


    //User add Handler
    const handleSubmit = () =>  {
    let user = new FormData()
    user.append('username',username)
    user.append('email',email)
    user.append('password',password)
    user.append('address',address)
    user.append('mobile',mobile)

    console.log(user)
    axios.post(
        'http://localhost:5000/user/add',
         
        user
       ).then(response => {
   
         console.log(response)
         console.log("user added successfully")
       })
   
   
         .catch(error => {
   
           console.log("an error was occured" , error)
   
         }
         )

    }



    return (
        <div className="loginpage">
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">Inscrivez-vous</label>
                        <input type="text" name="txt" value={username} placeholder="Nom d'utlisateur" required="True" onChange={e => setUsername(e.target.value)} />
                        <input type="email" name="email" value={email} placeholder="Email" required="True" onChange={e => setEmail(e.target.value)} />
                        <input type="password" name="pswd" value={password} placeholder="Mot de passe" required="True"  onChange={e => setPassword(e.target.value)}/>
                        <input type="text" name="adresse"  value={address} placeholder="Adresse" required="True" onChange={e => setAddress(e.target.value)}/>
                        <input type="text" name="mobile" value={mobile} placeholder="Numero de téléphone" required="True"  onChange={e => setMobile(e.target.value)}/>
                        <button onClick={handleSubmit}>S'inscrire</button>
                    </form>
                </div>

                <div className="login">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">Connectez-vous</label>
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input type="password" name="pswd" placeholder="Password" required="" />
                        <button>Connecter</button>
                    </form>
                </div>
            </div>
        </div>

    )
}