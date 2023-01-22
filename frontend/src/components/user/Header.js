import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-between">
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
          {/* Search form */}
          <form className="input-group w-auto my-auto d-none d-sm-flex">
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
        </div>
        {/* Left elements */}
        {/* Center elements */}
        <ul className="navbar-nav flex-row d-none d-md-flex">
          <li className="nav-item me-3 me-lg-1 active">
            <a className="nav-link" href="#">
              <span>
                <i className="fas fa-home fa-lg" />
              </span>
              <span className="badge rounded-pill badge-notification bg-danger">
                1
              </span>
            </a>
          </li>
          <li className="nav-item me-3 me-lg-1">
            <a className="nav-link" href="#">
              <span>
                <i className="fas fa-flag fa-lg" />
              </span>
            </a>
          </li>
          <li className="nav-item me-3 me-lg-1">
            <a className="nav-link" href="#">
              <span>
                <i className="fas fa-video fa-lg" />
              </span>
            </a>
          </li>
          <li className="nav-item me-3 me-lg-1">
            <a className="nav-link" href="#">
              <span>
                <i className="fas fa-shopping-bag fa-lg" />
              </span>
            </a>
          </li>
          <li className="nav-item me-3 me-lg-1">
            <a className="nav-link" href="#">
              <span>
                <i className="fas fa-users fa-lg" />
              </span>
              <span className="badge rounded-pill badge-notification bg-danger">
                2
              </span>
            </a>
          </li>
        </ul>
        {/* Center elements */}
        {/* Right elements */}
        <ul className="navbar-nav flex-row">
          <li className="nav-item me-3 me-lg-1">
            <a className="nav-link d-sm-flex align-items-sm-center" href="#">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                className="rounded-circle"
                height={22}
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
              <strong className="d-none d-sm-block ms-1">John</strong>
            </a>
          </li>
          <li className="nav-item me-3 me-lg-1">
            <a className="nav-link" href="#">
              <span>
                <i className="fas fa-plus-circle fa-lg" />
              </span>
            </a>
          </li>
          <li className="nav-item dropdown me-3 me-lg-1">
            <a
              className="nav-link dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-comments fa-lg" />
              <span className="badge rounded-pill badge-notification bg-danger">
                6
              </span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Some news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown me-3 me-lg-1">
            <a
              className="nav-link dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-bell fa-lg" />
              <span className="badge rounded-pill badge-notification bg-danger">
                12
              </span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Some news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown me-3 me-lg-1">
            <a
              className="nav-link dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-chevron-circle-down fa-lg" />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Some news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>
        {/* Right elements */}
      </div>
    </nav>
  );
};

export default Header;
