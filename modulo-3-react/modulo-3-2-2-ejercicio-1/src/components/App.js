import '../styles/App.scss';

function App() {
  const handleInput = (ev) => {
    console.log('La última techa pulsada es:', ev.key);
  };
  const handleButton = (ev) => {
    ev.preventDefault();
  };
  return (
    <div>
      <form>
        <input type="text" onKeyUp={handleInput}></input>
      </form>
      <button onClick={handleButton}>Púlsame</button>
    </div>
  );
}

export default App;
