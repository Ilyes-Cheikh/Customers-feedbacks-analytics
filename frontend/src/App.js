import './App.css';
import Axios from 'axios';
import {useEffect, useState} from 'react'
import AdminPage from "./Pages/AdminPage";
import ClientPage from "./Pages/ClientPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TelephonePage from './Pages/TelephonePage';
import TablettePage from './Pages/TablettePage';
import OneProductPage from './Components/OneProductPage';
import AccessoriesPage from './Pages/AccesoriesPage';
import ComputerPage from './Pages/ComputerPage';
import ComposantPage from './Pages/ComposantPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LoginPage from './Pages/LoginPage';
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
      </Router>
     
     
      <Router>  
     
        <Navbar/>
        <Route exact path="/"> 
        <ClientPage/>
        </Route>
        <Route exact path="/ordinateurs">
        <ComputerPage/>
        </Route>
        <Route exact path="/telephones">
          <TelephonePage/>
        </Route>
        <Route exact path="/tablettes">
        <TablettePage/>
        </Route>
        <Route exact path="/composants">
        <ComposantPage/>
        </Route>
        <Route exact path="/accessoires">
          <AccessoriesPage/>
        </Route>
        <Route exact path="/produits/:id_produit">
          <OneProductPage/>
        </Route>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
      </Router>

    </div>
  );
}

export default App;
