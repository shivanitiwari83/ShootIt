import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            Shoot It
          </a>
          {/* Search form */}
          
        </div>
        {/* Left elements */}
        {/* Center elements */}
        <ul className="navbar-nav flex-row d-none d-md-flex">
          <li className="nav-item me-3 me-lg-1 active">
            <NavLink className="nav-link" to="/main/home">
              <span>
                <i className="fas fa-home fa-lg" />
              </span>             
            </NavLink>
          </li>
          
          
          <li className="nav-item me-3 me-lg-1">
            <NavLink className="nav-link" to="/main/browse">
              <span>
                <i className="fas fa-shopping-bag fa-lg" />
              </span>
            </NavLink>
          </li>
          <li className="nav-item me-3 me-lg-1">
            <NavLink className="nav-link" to="/main/contactus">
              <span>
                <i className="fas fa-users fa-lg" />
              </span>
             
            </NavLink>
          </li>
        </ul>
        {/* Center elements */}
        {/* Right elements */}
        <ul className="navbar-nav flex-row">
        <form className="input-group w-auto mx-auto my-auto d-none d-sm-flex">
            <input
              autoComplete="off"
              type="search"
              className="form-control rounded"
              placeholder="Search"
              style={{ minWidth: 125 }}
            />
            <span className="input-group-text border-0 d-none d-lg-flex">
              <i className="fas fa-search" />
            </span>
          </form>
          <li className="nav-item me-3 me-lg-1">
            <a className="nav-link d-sm-flex align-items-sm-center" href="#">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                className="rounded-circle"
                height={22}
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
              <strong className="d-none d-sm-block ms-1">ID</strong>
            </a>
          </li>
          
        </ul>
        {/* Right elements */}
      </div>
    </nav>
  );
};

export default Header;
