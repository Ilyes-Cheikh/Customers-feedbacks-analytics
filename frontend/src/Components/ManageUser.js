import { useState , useEffect} from 'react';
import axios from 'axios';
function ManageUser() {

  
  function getUser(){
    var user = JSON.parse(localStorage.getItem('user'))
    return user
  }

  function saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user))

  };

  function removeUser() {
    localStorage.removeItem("user");
    ;
  }

  return {
    getUser,
    saveUser,
    removeUser
  }

}

export default ManageUser;