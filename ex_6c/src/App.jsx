import { useState } from 'react';

function App() {
  // 1. A state variable to store the number of clicks.
  // We initialize it to 0.
  const [clickCount, setClickCount] = useState(0);

  // 2. This is our EVENT HANDLER function.
  // It will be executed every time the button is clicked.
  const handleClick = () => {
    // It updates the state by adding 1 to the current count.
    setClickCount(clickCount + 1);
    console.log("Button was clicked! New count:", clickCount + 1);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '40px' }}>
      <h1>Responding to Events</h1>

      {/* This heading displays the current value of our state */}
      <h2>Button Clicks: {clickCount}</h2>

      {/* 3. We attach the event handler to the button's `onClick` prop. */}
      {/* When this button is clicked, the `handleClick` function will run. */}
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Click Me!
      </button>
    </div>
  );
}

export default App;