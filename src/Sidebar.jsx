import React, { useState } from 'react';

function Sidebar({ userRole = "Utilisateur" }) {
  const [activeTab, setActiveTab] = useState("Vue d'ensemble");

  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-user-type">Role: {userRole}</div>

      <nav className="sidebar-nav">
        <ul>
          <li 
            className={activeTab === "Vue d'ensemble" ? "active" : ""} 
            onClick={() => setActiveTab("Vue d'ensemble")}
          >
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="fas fa-home"></i>
              <span>Vue d'ensemble</span>
            </a>
          </li>

          <li 
            className={activeTab === "Transactions" ? "active" : ""} 
            onClick={() => setActiveTab("Transactions")}
          >
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="fas fa-exchange-alt"></i>
              <span>Transactions</span>
            </a>
          </li>

          <li 
            className={activeTab === "Mes cartes" ? "active" : ""} 
            onClick={() => setActiveTab("Mes cartes")}
          >
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="fas fa-credit-card"></i>
              <span>Mes cartes</span>
            </a>
          </li>

          <li 
            className={activeTab === "Transferts" ? "active" : ""} 
            onClick={() => setActiveTab("Transferts")}
          >
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="fas fa-paper-plane"></i>
              <span>Transferts</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
