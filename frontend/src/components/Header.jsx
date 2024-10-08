import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
  <nav className="navbar navbar-expand-lg bg-olive ">
    <div className="container d-flex justify-content-between align-items-center">
      <Link className="navbar-brand text-white dancing-script-brand fs-2" to="/">
        Trash to Cash
      </Link>
      <div className="collapse navbar-collapse justify-content-center">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link px-3 active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-3" to="/about">
              About Us  
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-3" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-3" to="/sellwaste">
              Sell Waste
            </Link>
          </li>
        </ul>
      </div>
    <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </ul>
    </div>

  </nav>
</div>

    )      
}
