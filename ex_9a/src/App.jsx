import React, { useState, useEffect } from 'react';

// =============================================
// Method 1: The OLD Way (Class Component)
// =============================================
class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    // State is an object, and `this` must be used.
    this.state = {
      count: 0,
    };
  }

  // Lifecycle method for when the component first renders.
  componentDidMount() {
    document.title = `Class Count: ${this.state.count}`;
  }

  // Lifecycle method for when the component updates.
  // The logic is duplicated!
  componentDidUpdate() {
    document.title = `Class Count: ${this.state.count}`;
  }

  render() {
    return (
      <div className="counter-box">
        <h3>Class Component</h3>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}


// ======================================================
// Method 2: The MODERN Way (Function Component with Hooks)
// ======================================================
function HookCounter() {
  // 1. useState Hook: Adds state to a function.
  // It's simpler: no `this`, no object.
  const [count, setCount] = useState(0);

  // 2. useEffect Hook: Handles side effects.
  // This single hook runs after every render, replacing BOTH
  // componentDidMount and componentDidUpdate for this use case.
  useEffect(() => {
    document.title = `Hooks Count: ${count}`;
  });

  return (
    <div className="counter-box">
      <h3>Function with Hooks</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


// A component to display both counters for comparison
function App() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Class vs. Hooks</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <ClassCounter />
        <HookCounter />
      </div>
    </div>
  );
}



export default App;