import { useState , useEffect} from 'react';
import axios from 'axios';
function ManageUser() {
            
        
        

  
  function saveUser(token){
    axios({
        method: "GET",
        url: "http://localhost:5000/profile",
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
        .then((response) => {
            const res = response.data
            console.log(res)
            localStorage.setItem('currentUser', JSON.stringify(res))
            
            

        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }
    function getCurrentUser(){
    var user = JSON.parse(localStorage.getItem('currentUser'))
    return user
  }

  

  function removeUser() {
    localStorage.removeItem("currentUser");
    ;
  }

  return {
    getCurrentUser,
    saveUser,
    removeUser
  }

}

export default ManageUser;