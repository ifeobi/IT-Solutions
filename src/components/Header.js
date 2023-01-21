import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";
import { Link } from "react-scroll";
import { Link as Li } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="top-contact">
                <ul>
                  <li>
                    <a href="tel:+234 708 836 6937">
                      <i className="fa fa-phone"></i> +234 708 836 6937
                    </a>
                  </li>
                  <li>
                    <a href="mailto:stripetecltd@gmail.com">
                      <i className="fa fa-envelope"></i> stripetecltd@gmail.com
                    </a>
                  </li>

                  <li>
                    <a href="">
                      <i className="fa fa-home"></i> 13 Adisa Estate Gudu FCT
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="top-right-info">
                {/* <ul className="top-social">
                  <li>
                    <a href="" >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul> */}

                <a
                  href="mailto:stripetecltd@gmail.com"
                  className="btn btn-primary"
                >
                  book an appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Li className="navbar-brand" to={"/"}>
                {" "}
                <h2 className="logo">Stripe-tech</h2>{" "}
              </Li>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Li to="/" className="nav-link" href="#">
                      Home
                    </Li>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="about"
                      smooth={true}
                      offset={50}
                      duration={50}
                      className="nav-link"
                      href="#"
                    >
                      ABOUT US
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="services"
                      smooth={true}
                      offset={50}
                      duration={50}
                      className="nav-link"
                      href="#"
                    >
                      SERVICES
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Li to="/blog" className="nav-link">
                      BLOG
                    </Li>
                  </li>

                  {/* <li className="nav-item">
                    <a className="nav-link" href="#">
                      PAGES
                    </a>
                  </li> */}

                  <li className="nav-item">
                    <Link
                      to="contact"
                      smooth={true}
                      offset={50}
                      duration={50}
                      className="nav-link"
                      href="/"
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
