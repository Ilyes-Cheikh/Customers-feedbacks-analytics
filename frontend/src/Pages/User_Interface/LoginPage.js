import React,{useState,useEffect}from "react"
import '../../Assets/CSS/LoginPage.css'

export default function LoginPage() {
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [address,setAddress]=useState('')
    const [mobile,setMobile]=useState('')
    
    return (
        <div className="loginpage">
            <div class="main">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div class="signup">
                    <form>
                        <label for="chk" aria-hidden="true">Inscrivez-vous</label>
                        <input type="text" name="txt" value={username} placeholder="Nom d'utlisateur" required="True" onChange={e => setUsername(e.target.value)} />
                        <input type="email" name="email" value={email} placeholder="Email" required="True" onChange={e => setEmail(e.target.value)} />
                        <input type="password" name="pswd" value={password} placeholder="Mot de passe" required="True"  onChange={e => setPassword(e.target.value)}/>
                        <input type="text" name="adresse"  value={address} placeholder="Adresse" required="True" onChange={e => setAddress(e.target.value)}/>
                        <input type="text" name="mobile" value={mobile} placeholder="Numero de téléphone" required="True"  onChange={e => setMobile(e.target.value)}/>
                        <button>S'inscrire</button>
                    </form>
                </div>

                <div class="login">
                    <form>
                        <label for="chk" aria-hidden="true">Connectez-vous</label>
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input type="password" name="pswd" placeholder="Password" required="" />
                        <button>Connecter</button>
                    </form>
                </div>
            </div>
        </div>

    )
}