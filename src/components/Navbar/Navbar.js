import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const navbar = () => {
  return (
    <nav className="navbar fondo_navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Veterinaria Tama</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Tienda</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contacto</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  </div>
</nav>
  )
}

export default navbar