import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src='/additional/tomato.webp' alt='' height='45px' width='45x'></img>
        </div>
        <div className='nav-elements'>
          <ul>
            <li>
                <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Restaurants">Restaurants</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;