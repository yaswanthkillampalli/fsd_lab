import React from 'react'; // 'React' must be in scope for class components

// COMPONENT 1: A simple FUNCTION component
// This is the modern and most common way to write a component.
function Header() {
  return <h1>Welcome to My App! 🚀</h1>;
}

// COMPONENT 2: A simple CLASS component
// This is the older way. It's a class that extends React.Component.
class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p><strong>User:</strong> Jane Doe</p>
        <p><strong>Role:</strong> Administrator</p>
      </div>
    );
  }
}

// COMPONENT 3: The main APP component (the parent)
// It nests the other two components inside its return statement.
function App() {
  return (
    <main>
      {/* Nesting the Header component */}
      <Header />

      <hr />

      {/* Nesting the UserProfile component */}
      <h2>User Information:</h2>
      <UserProfile />
    </main>
  );
}

export default App;