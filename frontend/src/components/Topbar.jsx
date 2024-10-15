import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-olive">Admin Dashboard</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="text-olive" to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
