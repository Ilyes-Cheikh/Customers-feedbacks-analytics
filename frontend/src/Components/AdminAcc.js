import { useState} from 'react';
import AdminCategoriePage from './AdminCategoriePage';
import SideMenu from './SideMenu';
import "../Assets/CSS/AdminCateg.css"

export default function AdminAcc(){
    const [inactive, setInactive] = useState(false);

    return(
        <div className="admin_product_page_container">
        <SideMenu onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
        }} />
        <div className='admin_categ'>
                    <AdminCategoriePage id_categorie={3} />
                    <AdminCategoriePage id_categorie={4} />
        </div>
        </div>
    )
}