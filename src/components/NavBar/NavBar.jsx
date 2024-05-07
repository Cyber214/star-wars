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
      <img className='logo' src={resistance} alt="Starwars Resistance Logo" />
      <NavLink to='/starships'>STAR WARS STARSHIPS</NavLink>
      </nav>
    </header>
  )
}

export default NavBar