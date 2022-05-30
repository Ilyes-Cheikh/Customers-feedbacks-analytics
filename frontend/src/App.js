import './App.css';
import AdminPage from "./Pages/Admin_Interface/AdminPage";
import HomePage from "./Pages/User_Interface/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TelephonePage from './Pages/User_Interface/TelephonePage';
import TablettePage from './Pages/User_Interface/TablettePage';
import OneProductPage from './Components/OneProductPage';
import AccessoriesPage from './Pages/User_Interface/AccesoriesPage';
import ComputerPage from './Pages/User_Interface/ComputerPage';
import ComposantPage from './Pages/User_Interface/ComposantPage';
import LoginPage from './Pages/User_Interface/LoginPage';
import useToken from './Components/useToken';
import ProfilePage from './Pages/User_Interface/ProfilePage';
import AdminCategoriePage from './Components/AdminCategoriePage';
import AdminCategOrd from './Components/AdminCategOrd';
import AddProduct from './Pages/Admin_Interface/AddProduct';
import AdminAcc from './Components/AdminAcc';
import ListeCommande from './Components/ListeCommande';
function App() {
  const { token, removeToken, setToken } = useToken();
  return (
    <div className="App">
      <Router>
        <Route exact path="/admin">
          <AdminPage />
        </Route>
        <Route exact path="/admin/addproduct">
          <AddProduct/>
        </Route>
        <Route exact path="/admin/ordinateurs">
          <AdminCategOrd/>
        </Route>
        <Route exact path="/admin/accessoirs">
          <AdminAcc/>
        </Route>
        <Route exact path="/admin/composant">
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/ordinateurs">
          <ComputerPage />
        </Route>
        <Route exact path="/telephones">
          <TelephonePage />
        </Route>
        <Route exact path="/tablettes">
          <TablettePage />
        </Route>
        <Route exact path="/composants">
          <ComposantPage />
        </Route>
        <Route exact path="/accessoires">
          <AccessoriesPage />
        </Route>
        <Route exact path="/produits/:id_produit">
          <OneProductPage />
        </Route>
        <Route exact path="/login">
        <LoginPage setToken={setToken} />
      </Route>
      <Route exact path="/profile">
      <ProfilePage/>
      </Route>
      <Route exact path="/Panier">
      <ListeCommande/>
      </Route>
      </Router>

    </div>
  );
}

export default App;
