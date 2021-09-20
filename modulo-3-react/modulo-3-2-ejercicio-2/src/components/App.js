import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [number, setNumber] = useState(0);

  const handleButton = (ev) => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1>contador{number}</h1>
      <button onClick={handleButton}>Pulsa</button>
    </div>
  );
}

export default App;
