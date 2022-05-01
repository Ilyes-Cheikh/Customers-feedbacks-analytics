import React, { useState, useEffect } from "react"
import axios from "axios"
import '../../Assets/CSS/Profilepage.css'
import userimg from '../../Assets/images/user.jpg'
import ManageUser from "../../Components/ManageUser"
export default function ProfilePage() {
    const {getCurrentUser, saveUser , removeUser} = ManageUser()
        const currentUser = getCurrentUser()
        
    return (
        <div className="profilepage">
            <div className="profile">
                <figure>
                    <img src={userimg} alt="" />
                </figure>
                <header>
                    <h1>{currentUser.username}
                        <small>Client(e) chez Tech Wave </small></h1>
                </header>

        
                <div className="info">
                    <dl>
                        
                        <dt>Email</dt>
                        <dd>{currentUser.email}</dd>
                        <dt>Adresse</dt>
                        <dd>{currentUser.address}</dd>
                        <dt>Numéro de téléphone</dt>
                        <dd>{currentUser.mobile}</dd>
                  
                    </dl>
                </div>

            </div>

        </div>
    )
}