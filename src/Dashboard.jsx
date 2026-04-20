import React, { useState } from 'react';
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./Sidebar";
import Overview from "./Overview";
import Cards from "./Cards";

import "./css/styles.css";

function Dashboard({ userName = "Ayoub" }) {
  const [showNotification, setShowNotification] = useState(true);

  return (
    <>
      <Header />

      <main className="dashboard-main">
        <div className="dashboard-container">
          <Sidebar userRole="Admin" />

          <div className="dashboard-content">
            {showNotification && (
              <div className="alert-banner">
                <span>Bienvenue, {userName} ! Vous avez 3 nouvelles transactions.</span>
                <button onClick={() => setShowNotification(false)}>X</button>
              </div>
            )}
            
            <Overview />
            <Cards initialUserName={userName} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;
