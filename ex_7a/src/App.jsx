import { useState } from 'react';

// A simple component to show when the user is logged in.
function WelcomeMessage() {
  return <h2>Welcome back, User! 👋</h2>;
}

// A simple component to show when the user is logged out.
function LoginPrompt() {
  return <h2>Please log in to continue.</h2>;
}


function App() {
  // 1. State: A boolean to track the user's login status.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Event handler to toggle the login status.
  const handleToggleLogin = () => {
    setIsLoggedIn(!isLoggedIn); // Flips the boolean value
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '40px' }}>
      <h1>Conditional Rendering Demo</h1>

      {/* 2. CONDITIONAL RENDERING using a Ternary Operator */}
      {/* If `isLoggedIn` is true, render WelcomeMessage. Otherwise, render LoginPrompt. */}
      {isLoggedIn ? <WelcomeMessage /> : <LoginPrompt />}

      <button onClick={handleToggleLogin} style={{ padding: '10px 20px', fontSize: '16px' }}>
        {/* The button text also changes conditionally! */}
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
}

export default App;