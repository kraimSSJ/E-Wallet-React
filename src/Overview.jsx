function Overview() {
  return (
    <section className="dashboard-section active">
      <div className="section-header">
        <h2>Bonjour, Ayoub 👋</h2>
        <p>{new Date().toLocaleDateString()}</p>
      </div>

      <div className="summary-cards">
        <div className="summary-card">
          <span>Solde disponible</span>
          <h3>12,500 MAD</h3>
        </div>

        <div className="summary-card">
          <span>Revenus</span>
          <h3>+4,200 MAD</h3>
        </div>

        <div className="summary-card">
          <span>Dépenses</span>
          <h3>-1,800 MAD</h3>
        </div>

        <div className="summary-card">
          <span>Cartes</span>
          <h3>2</h3>
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