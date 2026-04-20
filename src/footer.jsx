import React, { useState } from 'react';
import "./css/styles.css";

function Footer({ companyName = "E-Wallet", year = 2026 }) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <footer className="footer">
      <p>© {year} {companyName}. All rights reserved.</p>
      
      <div className="footer-actions">
        <button 
          className="btn-link" 
          onClick={() => setIsSubscribed(!isSubscribed)}
        >
          {isSubscribed ? "Abonné à la newsletter !" : "S'abonner à la newsletter"}
        </button>
      </div>
    </footer>
  );
}

export default Footer;
