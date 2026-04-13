import Header from "./header";
import Footer from "./footer";
import Sidebar from "./Sidebar";
import Overview from "./Overview";
import Cards from "./Cards";

import "./css/styles.css";

function Dashboard() {
  return (
    <>
      <Header />

      <main className="dashboard-main">
        <div className="dashboard-container">
          <Sidebar />

          <div className="dashboard-content">
            <Overview />
            <Cards />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;