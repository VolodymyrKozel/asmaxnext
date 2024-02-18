const Navigation = () => {
  return (
    <nav className="nav is-open js-menu-container">
      <button
        className="menu-btn-close js-close-menu"
        type="button"
        aria-label="Close menu button"
      >
        <svg className="menu-btn-icon" width="28" height="28">
          <use href="./img/icons.svg#icon-close"></use>
        </svg>
      </button>
      <ul className="menu-list">
        <li className="menu-item">
          <a className="menu-link header-link" href="#">
            O nas
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link header-link" href="#">
            USŁUGI
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link header-link" href="#">
            Flota
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link header-link" href="#">
            Współpracuj z nami
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link header-link" href="#">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
