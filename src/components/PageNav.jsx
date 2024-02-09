import React from "react";
import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";

const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
