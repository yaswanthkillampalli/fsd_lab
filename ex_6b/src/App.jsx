import CssCard from './CssCard.jsx';
import SassCard from './SassCard.jsx';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Styling Demo</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CssCard />
        <SassCard />
      </div>
    </div>
  );
}

export default App;