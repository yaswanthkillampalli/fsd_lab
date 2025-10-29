import { Link, Outlet } from 'react-router-dom';

function App() {
  const navStyle = {
    display: 'flex',
    gap: '20px',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ccc'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold'
  };

  return (
    <div>
      {/* 1. Navigation using the <Link> component */}
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/profile" style={linkStyle}>Profile</Link>
      </nav>

      <hr />

      {/* 2. A placeholder for the routed page content */}
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;