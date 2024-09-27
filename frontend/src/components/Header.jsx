import React from 'react'

export const Header = () => {
    return (
        <div>
  <nav className="navbar navbar-expand-lg bg-olive ">
    <div className="container d-flex justify-content-between align-items-center">
      <a className="navbar-brand text-white dancing-script-brand fs-2" href="#">
        Trash to Cash
      </a>
      <div className="collapse navbar-collapse justify-content-center">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link px-3 active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Register
            </a>
          </li>
        </ul>
    </div>

  </nav>
</div>

    )      
}
