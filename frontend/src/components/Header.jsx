import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  // const navigate = useNavigate();
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
    // Clear
    document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "isAgent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-olive fixed-top">
        <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
          <Link
            className="navbar-brand text-white dancing-script-brand fs-2"
            to="/"
          >
            Trash to Cash
          </Link>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link px-3 active"
                  aria-current="page"
                  to="/"
                >
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
            </ul>
          </div>
          <ul className="navbar-nav mb-2 mb-lg-0">
            {userName ? (
              <>
                <div className="dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    href="#"
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
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </div>
      </nav>
      <div className="py-5"></div>
    </>
  );
};
