import './App.css';
import Axios from 'axios';
import {useEffect, useState} from 'react'
import AdminPage from "./Pages/AdminPage";
import ClientPage from "./Pages/ClientPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [produits,setProduits] = useState([])
  const [produit,setProduit] = useState([])
  const [prix,setPrix] = useState(0)


  

  return (
    <div className="App">
      <Router>  
      <Route exact path="/admin"> 
        <AdminPage/>
        </Route>
        <Route exact path="/"> 
        <ClientPage/>
        </Route>
      </Router>

    </div>
  );
}

export default App;
