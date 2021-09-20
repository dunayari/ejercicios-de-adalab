import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [macarrones, setMacarrones] = useState(false);
  const [patatas, setPatatas] = useState(false);
  const [nueces, setNueces] = useState(false);
  const [huevos, setHuevos] = useState(false);
  const [cebolla, setCebolla] = useState(false);
  const [cerveza, setCerveza] = useState(false);

  const handleMacarrones = (ev) => {
    setMacarrones(ev.target.checked);
  };
  const handlePatatas = (ev) => {
    setPatatas(ev.target.checked);
  };
  const handleNueces = (ev) => {
    setNueces(ev.target.checked);
  };
  const handleHuevos = (ev) => {
    setHuevos(ev.target.checked);
  };

  const handleCebolla = (ev) => {
    setCebolla(ev.target.checked);
  };
  const handleCerveza = (ev) => {
    setCerveza(ev.target.checked);
  };
  /*const handleTortillaEnCondiciones = (ev) => {
    setPatatas + setHuevos + setCebolla(ev.target.checked);
  };*/
  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas:</h1>
      <form>
        <label htmlFor="macarrones">Macarrones</label>
        <input
          type="checkbox"
          name="macarrones"
          id="macarrones"
          checked={macarrones}
          onChange={handleMacarrones}
        />
        <label htmlFor="patatas">Patatas</label>
        <input
          type="checkbox"
          name="patatas"
          id="patatas"
          checked={patatas}
          onChange={handlePatatas}
        />
        <label htmlFor="nueces">Nueces</label>
        <input
          type="checkbox"
          name="nueces"
          id="nueces"
          checked={nueces}
          onChange={handleNueces}
        />
        <label htmlFor="huevos">Huevos</label>
        <input
          type="checkbox"
          name="huevos"
          id="huevos"
          checked={huevos}
          onChange={handleHuevos}
        />
        <label htmlFor="cebolla">Cebolla</label>

        <input
          type="checkbox"
          name="cebolla"
          id="cebolla"
          checked={cebolla}
          onChange={handleCebolla}
        />

        <label htmlFor="cerveza">Cerveza</label>
        <input
          type="checkbox"
          name="cerveza"
          id="cerveza"
          checked={cerveza}
          onChange={handleCerveza}
        />
      </form>
    </div>
  );
}

export default App;
