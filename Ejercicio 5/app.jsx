const { useState } = React;

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [op, setOp] = useState('sumar');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResultado('Ingrese números válidos');
      return;
    }

    let res;
    switch (op) {
      case 'sumar':
        res = a + b;
        break;
      case 'restar':
        res = a - b;
        break;
      case 'multiplicar':
        res = a * b;
        break;
      default:
        res = undefined;
    }

    setResultado(res !== undefined ? `Resultado: ${res}` : '');
  };

  return (
    <div className="container">
      <h1>Calculadora</h1>
      <label>
        Número 1
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </label>

      <label>
        Número 2
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </label>

      <label>
        Operación
        <select value={op} onChange={(e) => setOp(e.target.value)}>
          <option value="sumar">Suma</option>
          <option value="restar">Resta</option>
          <option value="multiplicar">Multiplicación</option>
          <option value="dividir">División (deshabilitada)</option>
        </select>
      </label>

      <button onClick={calcular} disabled={op === 'dividir'}>
        Calcular
      </button>

      {resultado && <p className="resultado">{resultado}</p>}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
