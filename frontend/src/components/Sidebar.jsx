import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ setActiveComponent }) => {
  return (
    <div className="bg-olive text-light sidebar position-fixed d-none d-md-block p-3" style={{ width: '250px', height: '100vh' }}>
      <Link
            className="navbar-brand text-white dancing-script-brand fs-2"
            to="/"
          >
            Trash to Cash
          </Link>
      <ul className="nav flex-column mt-3">
        <li className="nav-item">
          <button className="nav-link text-light" onClick={() => setActiveComponent('userInfo')}>
            User Info
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link text-light" onClick={() => setActiveComponent('agentInfo')}>
            Agent Info
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link text-light" onClick={() => setActiveComponent('offers')}>
            Offers
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link text-light" onClick={() => setActiveComponent('collectionInfo')}>
            Collection Info
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
