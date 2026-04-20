import React, { useState } from 'react';

function Overview({ 
  userName = "Ayoub", 
  balance = "12,500", 
  income = "+4,200", 
  expenses = "-1,800", 
  cardCount = "2" 
}) {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  return (
    <section className="dashboard-section active">
      <div className="section-header">
        <h2>Bonjour, {userName} </h2>
        <p>{new Date().toLocaleDateString()}</p>
      </div>

      <div className="summary-cards">
        <div className="summary-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Solde disponible</span>
            <button 
              onClick={() => setIsBalanceVisible(!isBalanceVisible)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}
            >
              {isBalanceVisible ? "👁️" : "🙈"}
            </button>
          </div>
          <h3>{isBalanceVisible ? `${balance} MAD` : "**** MAD"}</h3>
        </div>

        <div className="summary-card">
          <span>Revenus</span>
          <h3>{income} MAD</h3>
        </div>

        <div className="summary-card">
          <span>Dépenses</span>
          <h3>{expenses} MAD</h3>
        </div>

        <div className="summary-card">
          <span>Cartes</span>
          <h3>{cardCount}</h3>
        </div>
      </div>

      <div className="quick-actions">
        <button className="action-btn">Transférer</button>
        <button className="action-btn">Recharger</button>
        <button className="action-btn">Demander</button>
      </div>
    </section>
  );
}

export default Overview;
