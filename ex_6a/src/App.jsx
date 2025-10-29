import { useState } from 'react';

function UserProfile(props) {
  return (
    <div style={{ border: '1px solid grey', padding: '10px', borderRadius: '5px' }}>
      <h2>Username: {props.name}</h2>
      <p>Status: <strong>{props.status}</strong></p>
    </div>
  );
}

function App() {
  const [status, setStatus] = useState("Online");

  const handleToggleStatus = () => {
    const newStatus = status === "Online" ? "Away" : "Online";
    setStatus(newStatus);
  };

  return (
    <main>
      <h1>State and Props Example</h1>
      <p>The parent `App` component holds the "status" in its state.</p>

      <UserProfile name="Bhavya" status={status} />

      <button onClick={handleToggleStatus} style={{ marginTop: '10px' }}>
        Toggle Status
      </button>
    </main>
  );
}

export default App;