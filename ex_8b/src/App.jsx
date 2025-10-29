import { useState } from 'react';

function App() {
  // 1. Initialize state with the current Date object.
  const [time, setTime] = useState(new Date());

  // 2. This event handler will be called when the button is clicked.
  const handleUpdateTime = () => {
    // It updates the state to a *new* Date object representing the current moment.
    console.log("Updating time...");
    setTime(new Date());
  };

  const containerStyles = {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginTop: '50px'
  };

  const timeStyles = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    margin: '20px 0',
    padding: '10px',
    backgroundColor: '#ecf0f1',
    borderRadius: '8px',
    display: 'inline-block'
  };

  const buttonStyles = {
    padding: '10px 25px',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#3498db',
    color: 'white'
  };

  return (
    <div style={containerStyles}>
      <h1>Screen Update Demo</h1>
      <p>The screen updates whenever state changes.</p>
      
      <div style={timeStyles}>
        {/* 3. The UI displays the time formatted from our state variable. */}
        {time.toLocaleTimeString()}
      </div>
      
      <br />

      {/* 4. This button triggers the state update. */}
      <button onClick={handleUpdateTime} style={buttonStyles}>
        Update Time
      </button>
    </div>
  );
}

export default App;