import '../styles/App.scss';

function App() {
  return (
    <>
      <header className="header">
        <img
          className="logo"
          src="./images/logoadalab.png"
          alt="Imagen del logo de Adalab"
          title="Logo de Adalab"
        />
        <nav className="nav">
          <ul className="menu">
            <li className="item1">
              <a className="etiqueta" title="Ir a Blog" href="Equipo">
                Blog
              </a>
            </li>
            <li className="item1">
              <a className="etiqueta" title="Ir a Contacto" href="Contacto">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <h1 className="title">Creando diversidad digital</h1>
      </main>
    </>
  );
}

export default App;
