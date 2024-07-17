import { Link } from 'react-router-dom'
import CardWidget from'../CardWidget/CardWidget'


const NavBar = ({title}) =>{
  return(
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to="/">{title}</Link>
      <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
        <li className='nav-item'>
          <Link to="/category/celular" className='nav-link active'>Celulares</Link>
          </li>
    <li className='nav-item'>
      <Link to="/category/tv" className='nav-link'>Television</Link>
    </li>
    <li className='nav-item'>
      <Link to="/category/tablet" className='nav-link active'>Tablet </Link>
          </li>
    </ul>
    <form  className='d-flex' role='search'>
        <input  className='form-control me-2' typeof='search' placeholder='Buscar productos' aria-label="Search"/>
        <button className='btn btn-outline-dark' typeof='submit' data-bs-theme="dark" >Buscar</button>
      </form>
      <ul className='navbar-nav me-auto mb-2 mb-lg-0'> <li className='nav-item'><a href="#" className='nav-link'>Crea tu cuenta</a></li>
      <CardWidget/>
      </ul></div>
      </div>
    </nav> 
  )
}

export default NavBar