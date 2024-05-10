import Navigation from "../Navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo1.png";
import phone from "/public/phone.svg";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <Link className="logo-link" href="\">
          <Image
            className="header-img-logo"
            src={logo}
            alt="AS MAX GROUP furniture assembly"
          />
        </Link>
        <button
          className="menu-btn js-open-menu"
          type="button"
          aria-label="Open menu button">
          <svg className="menu-btn-icon" width="28" height="28">
            <use href="icons.svg#icon-hamburger"></use>
          </svg>
        </button>
        <Navigation />
        <div className="right-side">
          <ul className="social-list">
            <li className="social-item">
              <a
                className="social-list-item-link"
                href="https://www.facebook.com/MaxAssemblyGroupPolska"
                target="_blank"
                rel="noopener noreferrer"
                arial-label="facebook">
                <svg className="svg-icon" width="24" height="24">
                  <use href="icons.svg#icon-facebook" />
                </svg>
              </a>
            </li>
            <li className="social-item">
              <a
                className="social-list-item-link"
                href="https://www.linkedin.com/company/as-max-group/"
                target="_blank"
                rel="noopener noreferrer"
                arial-label="linkedin">
                <svg className="svg-icon" width="24" height="24">
                  <use href="icons.svg#icon-linkedin" />
                </svg>
              </a>
            </li>
            <li className="social-item">
              <a
                className="social-list-item-link"
                href="https://www.instagram.com/as_max_group"
                target="_blank"
                rel="noopener noreferrer"
                arial-label="instagram">
                <svg className="svg-icon" width="24" height="24">
                  <use href="icons.svg#icon-instagram"></use>
                </svg>
              </a>
            </li>
          </ul>
          <div className="header-contact">
            <Image
              className="contact-img"
              src={phone}
              alt="phone"
              width={"47"}
              height={"47"}
            />
            <div className="contact-info">
              <p className="header-contact-text">zadzwoń do nas</p>
              <a className="header-contact-phone" href="48500430901">
                +48 500 430 901
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
