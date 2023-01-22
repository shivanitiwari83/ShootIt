import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light accent-border">
      <div className="container justify-content-between">
        {/* Left elements */}
        <div className="d-flex">
          {/* Brand */}
          <a
            className="navbar-brand me-2 mb-1 d-flex align-items-center"
            href="#"
          >
            <img
              src="logo.png"
              height={30}
              alt="Shoot It"
              loading="lazy"
              style={{ marginTop: 2 }}
            />
          </a>
          <p className="h3 mt-1">SHOOT IT</p>
        </div>
        <ul className="navbar-nav flex-row d-none d-md-flex">
          <li className="nav-item me-3 me-lg-1 active">
            <NavLink className="nav-link" to="/main/home" data-mdb-toggle="tooltip" title="Home Page">
              <i className="fas fa-home fa-lg" />
            </NavLink>
          </li>
          <li className="nav-item me-3 me-lg-1 active">
            <NavLink className="nav-link" to="/main/login" data-mdb-toggle="tooltip" title="Login Page">
              <i class="fa-solid fa-arrow-right-to-bracket fa-lg"></i>
            </NavLink>
          </li>
          <li className="nav-item me-3 me-lg-1 active">
            <NavLink className="nav-link" to="/main/browse" data-mdb-toggle="tooltip" title="Browse Equipments">
              <i class="fas fa-shopping-bag fa-lg "></i>
            </NavLink>
          </li>
          <li className="nav-item me-3 me-lg-1 active">
            <NavLink className="nav-link" to="/main/contact" data-mdb-toggle="tooltip" title="Contact Us">
                <i class="fas fa-phone fa-lg fa-fw"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
