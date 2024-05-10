import Link from "next/link";

const Navigation = () => {
  return (
    /*     <nav className="nav is-open js-menu-container">
      <Link href={'/products'}>Products</Link>

    </nav> */
    <nav className="nav is-open js-menu-container">
      <button
        className="menu-btn-close js-close-menu"
        type="button"
        aria-label="Close menu button">
        <svg className="menu-btn-icon" width="28" height="28">
          <use href="icons.svg#icon-close"></use>
        </svg>
      </button>
      <ul className="menu-list">
        <li className="menu-item">
          <a className="menu-link header-link" href="onas">
            O nas
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link header-link" href="uslugi">
            USŁUGI
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link header-link" href="/flota">
            Flota
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link header-link" href="/wspolpracujznami">
            Współpracuj z nami
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link header-link" href="/kontakt">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
