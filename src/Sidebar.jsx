function Sidebar() {
  return (
    <aside className="dashboard-sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li className="active">
            <a href="#">
              <i className="fas fa-home"></i>
              <span>Vue d'ensemble</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fas fa-exchange-alt"></i>
              <span>Transactions</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fas fa-credit-card"></i>
              <span>Mes cartes</span>
            </a>
          </li>

          <li>
            <a href="#">
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