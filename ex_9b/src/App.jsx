import { useState } from 'react';

function InputComponent({ onTextChange }) {
  return (
    <div className="component-box">
      <h2>Input Component</h2>
      <p>Type here to update the state in the parent.</p>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => onTextChange(e.target.value)} 
      />
    </div>
  );
}

function DisplayComponent({ displayText }) {
  return (
    <div className="component-box">
      <h2>Display Component</h2>
      <p>The text from the other component appears here:</p>
      <p className="display-text">{displayText}</p>
    </div>
  );
}

function App() {
  const [sharedText, setSharedText] = useState('');

  const handleTextChange = (newText) => {
    setSharedText(newText);
  };

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Sharing Data Between Siblings</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <InputComponent onTextChange={handleTextChange} />
        <DisplayComponent displayText={sharedText} />
      </div>
    </div>
  );
}



export default App;