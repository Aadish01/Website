import { NavLink } from 'react-router-dom'
import './navbar.css'
import { useState } from 'react';

const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
<div className="container">
        <div className="logo">
          <img src='/additional/tomato.webp' alt='' height='45px' width='45x'></img>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <img src='/additional/hamburger.svg' alt='' height='30px' width='30px'></img>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Restaurants">Restaurants</NavLink>
            </li>
            <li>
              <NavLink to="/Signup">SignUp</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;