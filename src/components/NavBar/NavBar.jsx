// npm modules
import { NavLink } from 'react-router-dom'

// assets
import resistance from '../../assets/resistance.jpeg'

// css
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <nav>
      <img className='logo' src={resistance} alt="A 20-sided die" />
      <NavLink to='/starships'>STAR WARS STARSHIPS</NavLink>
      </nav>
    </header>
  )
}

export default NavBar