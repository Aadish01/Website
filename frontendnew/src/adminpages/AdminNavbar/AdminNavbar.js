import React, { useEffect, useState } from 'react'
import './navbar.css'
import { NavLink, useParams } from 'react-router-dom';
import { useAdmin } from '../../hooks/useAdmin';

function AdminNavbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const { name , id} = useParams();

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

  const { logout } = useAdmin();
  
    const loggout = async () => {
      await logout();
    }
  
  return (
    <nav className="navbar">
      <div className="container">
      <div className="menu-icon" onClick={handleShowNavbar}>
        <img src='/additional/hamburger.svg' alt='' height='30px' width='30px'></img>
        </div>
        <div className="logo">
          <button onClick={loggout} className="button">Logout</button>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
          <li>
              <NavLink to={`/a/${name}/${id}/Admin/Home`}>Home</NavLink>
            </li>
            <li>
              <NavLink to={`/a/${name}/${id}/Admin/Orders`}>Orders</NavLink>
            </li>
            <li>
              <NavLink to={`/a/${name}/${id}/Admin/UpdateMenu`}>Menu</NavLink>
            </li>
            <li>
                <NavLink to={`/a/${name}/${id}/Admin/UpdateRestaurant`}>Restaurant</NavLink>
            </li>
            <li>
                <NavLink to={`/a/${name}/${id}/Admin/UpdateAdds`}>Adds</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default AdminNavbar