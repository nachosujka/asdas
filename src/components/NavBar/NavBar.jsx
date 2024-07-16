import CardWidget from'../CardWidget/CardWidget'

const NavBar = () =>{
  return(
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>Sujka
      <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
        <li className='nav-item'><a href="#" className='nav-link active'>Productos</a></li>
    <li className='nav-item'><a href="#" className='nav-link'>Contacto</a></li>
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