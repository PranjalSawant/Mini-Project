import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
      const [name, value] = cookie.split("=");
      acc[name] = value;
      return acc;
    }, {});
    if (cookies.username) {
      const userName = decodeURIComponent(cookies.username);
      setUserName(userName);
    }
  }, []);

  const handleLogout = () => {
    document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "isAgent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-olive fixed-top">
        <div className="container px-4 d-flex justify-content-between align-items-center">
          <Link
            className="navbar-brand text-white dancing-script-brand fs-2"
            to="/"
          >
            Trash to Cash
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
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
              <li className="nav-item">
                <Link className="nav-link px-3" to="/buywaste">
                  Buy Waste
                </Link>
              </li>

              {/* Add Login and Register inside the collapsible section for mobile */}
              {!userName && (
                <>
                  <li className="nav-item d-lg-none">
                    <Link className="nav-link px-3" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item d-lg-none">
                    <Link className="nav-link px-3" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>

            {/* Only show these outside the collapse on large screens */}
            <ul className="navbar-nav d-none d-lg-flex">
              {userName ? (
                <div className="dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Welcome, {userName}!
                  </span>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link className="dropdown-item" to="/offers">
                        Offers
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="dropdown-item" to="/trackorder">
                        Track Order
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="dropdown-item"
                        to="/login"
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link px-3" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link px-3" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="py-5"></div>
    </>
  );
};
