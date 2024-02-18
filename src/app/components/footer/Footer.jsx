import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <a className="footer-logo-link" href="/">
            <img
              className="footer-img-logo"
              src="logo-footer.png"
              alt="AS MAX GROUP furniture assembly"
              width="239"
              height="81"
            />
          </a>
          <address className="footer-location">
            <p className="footer-title">AS MAX GROUP</p>
            <p className="footer-address-text">
              ul. Lubczyńska 22a
              <br />
              70-896 Szczecin
            </p>
          </address>
          <address className="footer-address">
            <ul className="footer-address-list">
              <li className="footer-address-item">
                <a
                  className="footer-address-link footer-phone"
                  href="48500430901"
                >
                  +48 500 430 901
                </a>
              </li>
              <li>
                <a
                  className="footer-address-link footer-email"
                  href="mailto:info@asmaxgroup.com"
                >
                  info@asmaxgroup.com
                </a>
              </li>
            </ul>
          </address>
          <ul className="social-list footer-social">
            <li className="social-item">
              <a
                className="social-list-item-link"
                href="https://www.facebook.com/MaxAssemblyGroupPolska"
                target="_blank"
                rel="noopener noreferrer"
                arial-label="facebook"
              >
                <svg
                  className="footer-social-icon svg-icon"
                  width="24"
                  height="24"
                >
                  <use href="icons.svg#icon-facebook"></use>
                </svg>
              </a>
            </li>
            <li className="social-item">
              <a
                className="social-list-item-link"
                href="https://www.linkedin.com/company/as-max-group/"
                target="_blank"
                rel="noopener noreferrer"
                arial-label="linkedin"
              >
                <svg
                  className="footer-social-icon svg-icon"
                  width="24"
                  height="24"
                >
                  <use href="icons.svg#icon-linkedin"></use>
                </svg>
              </a>
            </li>
            <li className="social-item">
              <a
                className="social-list-item-link"
                href="https://www.instagram.com/as_max_group"
                target="_blank"
                rel="noopener noreferrer"
                arial-label="instagram"
              >
                <svg
                  className="footer-social-icon svg-icon"
                  width="24"
                  height="24"
                >
                  <use href="icons.svg#icon-instagram"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <ul className="footer-list">
            <li className="menu-item footer-item">
              <a className="footer-link" href="#">
                O nas
              </a>
            </li>
            <li className="menu-item footer-item">
              <a className="footer-link" href="#">
                USŁUGI
              </a>
            </li>
            <li className="menu-item footer-item">
              <a className="footer-link" href="#">
                Flota
              </a>
            </li>
            <li className="menu-item footer-item">
              <a className="footer-link" href="#">
                Współpracuj z nami
              </a>
            </li>
            <li className="menu-item footer-item">
              <a className="footer-link" href="#">
                Kontakt
              </a>
            </li>
          </ul>
          <p className="footer-copyrights">
            © 2021 - 2024 As Max Group. Wszelkie prawa zastrzeżone. Projekt i
            wykonanie:
            <a
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              href="http://virtualpeople.pl"
            >
              Virtual People
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
