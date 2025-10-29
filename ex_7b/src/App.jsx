// src/App.jsx

// 1. Here is our data: an array of objects.
// In a real application, this data would likely come from an API call.
const todoItems = [
  { id: 1, task: 'Learn about rendering lists' },
  { id: 2, task: 'Understand the "key" prop' },
  { id: 3, task: 'Build something awesome! ✨' },
  { id: 4, task: 'Take a short break' }
];

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', margin: '30px' }}>
      <h1>My To-Do List</h1>

      <ul>
        {/*
          2. We use the .map() method inside JSX curly braces {}.
          This iterates over each `todo` in the `todoItems` array
          and transforms it into an <li> element.
        */}
        {todoItems.map(todo => (
          // 3. The `key` prop is crucial for lists!
          // It must be a unique identifier for each item.
          <li key={todo.id}>
            {todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;