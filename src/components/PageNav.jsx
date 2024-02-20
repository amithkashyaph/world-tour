import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useAuth } from "../contexts/FakeAuthenticationContext";

const PageNav = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink
            to={isAuthenticated ? "/" : "/login"}
            className={styles.ctaLink}
            onClick={() => logout()}
          >
            {isAuthenticated ? "Log out" : "Log in"}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
