function Cards() {
  return (
    <section className="dashboard-section">
      <div className="section-header">
        <h2>Mes cartes</h2>
        <button className="btn btn-secondary">Ajouter</button>
      </div>

      <div className="cards-grid">
        <div className="card-item">
          <div className="card-preview">
            <p>**** **** **** 4242</p>
            <p>AYOUB</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;