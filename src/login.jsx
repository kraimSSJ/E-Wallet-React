import { useState } from "react";

import "./css/styles.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    console.log("Login:", email, password);
  };

  return (
    <main>
      <section className="hero">
        {/* LEFT SIDE */}
        <div className="hero-content">
          <h1>Connexion</h1>
          <p>
            Accédez à votre E-Wallet en toute sécurité et gérez vos transactions en toute confiance.
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Adresse e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                👁
              </span>
            </div>

            <button type="submit" className="btn btn-primary">
              Se connecter
            </button>
          </form>

          <p style={{ marginTop: "15px", fontSize: "0.9rem" }}>
            Vous n’avez pas encore de compte ?
            <a href="#" style={{ color: "#3b66f6", fontWeight: 600 }}>
              {" "}S’inscrire
            </a>
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-image">
          <img src="src/assets/e-Wallet6.gif" alt="Illustration de connexion" />
        </div>
      </section>
    </main>
  );
}

export default Login;