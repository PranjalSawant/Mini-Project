import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ setActiveComponent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar Toggle Button for Mobile */}
      <button
        className="btn btn-olive d-md-none position-fixed"
        style={{ top: '10px', left: '10px', zIndex: 1000 }}
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`bg-olive text-light sidebar position-fixed p-3 ${isOpen ? 'd-block' : 'd-none'} d-md-block`}
        style={{ width: '300px', height: '100vh', zIndex: 999 }}
      >
        <Link className="navbar-brand text-white dancing-script-brand fs-2" to="/">
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

      {/* Backdrop for mobile when sidebar is open */}
      {isOpen && <div className="backdrop position-fixed d-md-none" onClick={toggleSidebar} style={{ top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 998 }}></div>}
    </>
  );
};

export default Sidebar;
