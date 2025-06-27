const { useState } = React;

function App() {
  // Controla cuál botón está habilitado: "izquierdo" o "derecho"
  const [habilitado, setHabilitado] = useState('izquierdo');

  return (
    <div className="container">
      <button
        disabled={habilitado !== 'izquierdo'}
        onClick={() => setHabilitado('derecho')}
      >
        izquierdo
      </button>
      <button
        disabled={habilitado !== 'derecho'}
        onClick={() => setHabilitado('izquierdo')}
      >
        derecho
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
