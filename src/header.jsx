import React, { useState } from "react";
import "./css/styles.css";

function Header({ companyName = "E-Wallet" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <a href="#" className="logo">
          <img src="src/assets/e-wallet-logo.avif" alt={`${companyName} Logo`} />
        </a>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>Features</a></li>
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>

        <button 
          className="menu-icon" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Fermer" : "Menu"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
