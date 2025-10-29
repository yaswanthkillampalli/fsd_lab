import { useState } from 'react';
import './App.css'; // We'll create this file for styling

function App() {
  // State to hold the list of todo items
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React basics', completed: true },
    { id: 2, text: 'Build a to-do app', completed: false },
  ]);

  // State to hold the value of the input field
  const [inputText, setInputText] = useState('');

  // Handles form submission to add a new todo
  const handleAddTodo = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (!inputText.trim()) return; // Don't add empty todos

    const newTodo = {
      id: Date.now(), // Use a timestamp for a unique ID
      text: inputText,
      completed: false,
    };

    setTodos([...todos, newTodo]); // Add the new todo to the list
    setInputText(''); // Clear the input field
  };

  // Toggles the 'completed' status of a todo item
  const handleToggleComplete = (idToToggle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === idToToggle
          ? { ...todo, completed: !todo.completed }
          // if it's the right one, flip its completed status
          : todo // otherwise, return it unchanged
      )
    );
  };

  // Deletes a todo item from the list
  const handleDeleteTodo = (idToDelete) => {
    setTodos(todos.filter((todo) => todo.id !== idToDelete));
  };

  return (
    <div className="todo-app">
      <h1>To-Do List 📝</h1>

      {/* Form for adding new todos */}
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit">Add Task</button>
      </form>

      {/* List of all todos */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => handleToggleComplete(todo.id)}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;