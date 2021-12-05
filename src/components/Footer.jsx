import React from "react";
import { Helmet } from "react-helmet";
import "../assets/stylesheets/footer.css";

const Footer = () => {
  let newDate = new Date();
  let year = newDate.getFullYear();
  return (
    <div>
      <footer className="footer">
        <ul className="social-icon">
          <li className="social-icon__item">
            <a className="social-icon__link" href="/">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="/">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://www.linkedin.com/company/hack-club-nitrr/about/"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://www.instagram.com/hack_club_nitrr/"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="#main">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#team">
              Team
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#D">
              Discord
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#D">
              Contact
            </a>
          </li>
        </ul>

        <p>&copy; {year} Hack Club NITRR</p>
      </footer>
      <Helmet>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </Helmet>
    </div>
  );
};

export default Footer;
