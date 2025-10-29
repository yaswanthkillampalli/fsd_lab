// src/App.jsx

function App() {
  // 1. Define some JavaScript data
  const userName = "Sam";
  const userAge = 28;
  const item = {
    name: "Laptop",
    price: 999
  };

  // 2. Use the data inside the JSX return statement
  return (
    <div>
      {/* You can embed variables directly */}
      <h1>Welcome, {userName}!</h1>

      {/* You can also use expressions */}
      <p>Next year, you will be {userAge + 1} years old.</p>

      {/* Access properties from objects */}
      <h3>Item of the Day: {item.name}</h3>
      <p>Price: ${item.price}</p>

      {/* Even run simple functions */}
      <p>The current year is {new Date().getFullYear()}.</p>
    </div>
  );
}

export default App;