import { useState } from 'react';

function App() {
  // 1. A single state object to hold all form data.
  const [formData, setFormData] = useState({
    username: '',
    comments: '',
    topic: 'react', // Default value for the dropdown
    isSubscribed: true // Default value for the checkbox
  });

  // 2. A single, generic event handler to update the state object.
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    
    // Update the state based on the input's name attribute.
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // 3. An event handler for form submission.
  const handleSubmit = (event) => {
    // Prevent the default browser page refresh.
    event.preventDefault(); 
    
    // In a real app, you'd send this data to a server.
    // For now, we'll just log it to the console.
    console.log("Form submitted with data:", formData);
    alert(`Form Submitted!\nUsername: ${formData.username}\nTopic: ${formData.topic}`);
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    maxWidth: '400px',
    alignItems:'center',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  };

  const inputStyles = {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>User Registration Form</h1>
      <form onSubmit={handleSubmit} style={formStyles}>
        {/* Text Input */}
        <label>
          Username:
          <input
            style={inputStyles}
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>

        {/* Textarea */}
        <label>
          Comments:
          <textarea
            style={inputStyles}
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </label>

        {/* Select Dropdown */}
        <label>
          Favorite Topic:
          <select
            style={inputStyles}
            name="topic"
            value={formData.topic}
            onChange={handleChange}
          >
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </select>
        </label>

        {/* Checkbox */}
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="checkbox"
            name="isSubscribed"
            checked={formData.isSubscribed}
            onChange={handleChange}
          />
          Subscribe to newsletter
        </label>

        <button type="submit" style={{ ...inputStyles, backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;