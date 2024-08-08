import { Link, NavLink } from 'react-router-dom'
import CardWidget from'../CardWidget/CardWidget'
import "./NavBar.css"

const NavBar = ({title}) =>{
  return(
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to="/">{title}</Link>
      <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
        <li className='nav-item'>
          <NavLink to="/category/celular" className={({isActive})=> (isActive ? "ActiveOption": "Option" )}>Celulares</NavLink>
          </li>
    <li className='nav-item'>
      <NavLink to="/category/tv" className={({isActive})=> (isActive ? "ActiveOption": "Option" )}>Television</NavLink>
    </li>
    <li className='nav-item'>
      <NavLink to="/category/tablet" className={({isActive})=> (isActive ? "ActiveOption": "Option" )}>Tablet </NavLink>
          </li>
    </ul>
    <form  className='d-flex' role='search'>
        <input  className='form-control me-2' typeof='search' placeholder='Buscar productos' aria-label="Search"/>
        <button className='btn btn-outline-dark' typeof='submit' data-bs-theme="dark" >Buscar</button>
      </form>
      <ul className='navbar-nav me-auto mb-2 mb-lg-0'> <li className='nav-item'><a href="#" className='nav-link'>Crea tu cuenta</a></li>
      <CardWidget />
      </ul></div>
      </div>
    </nav> 
  )
}

export default NavBar