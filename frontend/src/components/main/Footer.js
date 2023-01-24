import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
       <>
  {/* Footer */}
  <footer className="text-center text-lg-start bg-light text-muted">
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      {/* Left */}
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-twitter" />
        </a>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-google" />
        </a>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-instagram" />
        </a>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-linkedin" />
        </a>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-github" />
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
            <i class="fa-solid fa-book me-3"></i>
            SHOOTIT
            </h6>
            <p>
            SHOOTIT provides the service of buying and renting the professional
            shooting equipments.The purpose of developing of this project to
            provides on-line service of shooting professionals to buy or rent 
            the equipment as per their need. This project is based on single 
            page web application. ex: - Gmail, Facebook, Github, Flipkart, etc.

            </p>
          </div>
          {/* Grid column */}
         
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
                
              <a href="#!" className="text-reset">
                SignUp
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Login
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                AboutUs
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3" />Airport, Lucknow, U.P. 226008
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
                shivanitiwari09112001@gmail.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> +91 8303945618
            </p>
            <p>
              <i className="fas fa-print me-3" /> +91 9140717469
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      © 2023 Copyright:
      <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
        Shootit.com
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>
 
    </div>
  )
}

export default Footer;