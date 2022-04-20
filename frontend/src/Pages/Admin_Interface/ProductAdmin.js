import React from 'react'
import AdminCategoriePage from '../../Components/AdminCategoriePage';
import '../../Assets/CSS/ProductAdmin.css'

function ProductAdmin() {
  return (
    <div className='product_admin_container'>
      < div className='tab_panel_container'>
          <AdminCategoriePage id_categorie={1} />
      </div>
    </div>
  )
}

export default ProductAdmin