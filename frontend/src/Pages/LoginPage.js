import React from "react"
import '../Assets/CSS/LoginPage.css'

export default function LoginPage() {



    return (
        <div className="loginpage">
            <div class="main">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div class="signup">
                    <form>
                        <label for="chk" aria-hidden="true">Inscrivez-vous</label>
                        <input type="text" name="txt" placeholder="Nom d'utlisateur" required="" />
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input type="password" name="pswd" placeholder="Mot de passe" required="" />
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