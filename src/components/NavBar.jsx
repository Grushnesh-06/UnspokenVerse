import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/UV.jpeg'
import IconButton from '@mui/material/IconButton'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light w-100 custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/" >
          UnspokenVerse
        </Link>
        

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/explore">Explore</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/poets">Poets</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/write">Write</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            
            <li className="nav-item ms-4">
                <form class="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                    <input class="form-control me-2" type="search" placeholder="Search Poem" aria-label="Search"/>
                    <button class="btn btn-outline-dark" type="submit">Search</button>
                </form>
            </li>

            <li className="nav-item ms-3">
  <IconButton
    onClick={() => {
      const theme = document.documentElement.getAttribute('data-theme')
      document.documentElement.setAttribute(
        'data-theme',
        theme === 'dark' ? 'light' : 'dark'
      )
    }}
  >
    <DarkModeIcon className="theme-icon moon" />
    <LightModeIcon className="theme-icon sun" />
  </IconButton>
</li>


          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
