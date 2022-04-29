import React, { useState, useEffect } from "react"
import axios from "axios"
import '../../Assets/CSS/Profilepage.css'
import userimg from '../../Assets/images/user.jpg'
import ManageUser from "../../Components/ManageUser"
export default function ProfilePage(props) {
    const {getUser, saveUser , removeUser} = ManageUser()
    const [currentUser, setCurrentUser] = useState({})
        useEffect(() => {
        let unmounted = false
        if (!unmounted) {
            axios({
                method: "GET",
                url: "http://localhost:5000/profile",
                headers: {
                    Authorization: 'Bearer ' + props.token
                }
            })
                .then((response) => {
                    const res = response.data
                    console.log(res)
                    res.access_token && props.setToken(res.access_token)
                    setCurrentUser(res)
                    saveUser(res)

                }).catch((error) => {
                    if (error.response) {
                        console.log(error.response)
                        console.log(error.response.status)
                        console.log(error.response.headers)
                    }
                })
        }
        return () => { unmounted = true }
    }, [])

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