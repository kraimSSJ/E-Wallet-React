import React, { useState } from 'react';

function Cards({ title = "Mes cartes", initialUserName = "AYOUB" }) {
  const [cards, setCards] = useState([
    { id: 1, number: "**** **** **** 4242", holder: initialUserName }
  ]);

  const addCard = () => {
    const newCard = {
      id: Date.now(),
      number: "**** **** **** " + Math.floor(1000 + Math.random() * 9000),
      holder: initialUserName
    };
    setCards([...cards, newCard]);
  };

  return (
    <section className="dashboard-section">
      <div className="section-header">
        <h2>{title}</h2>
        <button className="btn btn-secondary" onClick={addCard}>Ajouter</button>
      </div>

      <div className="cards-grid">
        {cards.map((card) => (
          <div className="card-item" key={card.id}>
            <div className="card-preview">
              <p>{card.number}</p>
              <p>{card.holder}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
