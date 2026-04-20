import React, { useState } from 'react';

function Center({ 
  heroTitle = "E-Wallet", 
  heroText = "Gérez vos finances facilement et en toute sécurité." 
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main className="hero">
      <div className="hero-content">
        <h1>{isLoggedIn ? "Bienvenue !" : heroTitle}</h1>
        <p>
          {isLoggedIn ? "Heureux de vous revoir. Votre portefeuille est à jour." : heroText}
        </p>

        <div className="buttons">
          <button 
            className="btn btn-primary" 
            onClick={() => setIsLoggedIn(true)}
          >
            {isLoggedIn ? "Mon Profil" : "Login"}
          </button>
          
          <button 
            className="btn btn-secondary" 
            onClick={() => setIsLoggedIn(false)}
          >
            {isLoggedIn ? "Déconnexion" : "Sign in"}
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src="src/assets/e-Wallet6.gif" alt="E-Wallet Illustration" />
      </div>
    </main>
  );
}

export default Center;
