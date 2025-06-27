const { useState } = React;

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [op,   setOp]   = useState('sumar');
  const [resultado, setResultado] = useState('');

  // ── true ⇢ deshabilitar cuando sea división y num2 = 0 ──
  const deshabilitar = op === 'dividir' && parseFloat(num2) === 0;

  const calcular = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResultado('Ingrese números válidos');
      return;
    }
    if (op === 'dividir' && b === 0) {
      setResultado('No se puede dividir por 0');
      return;
    }

    const res =
      op === 'sumar'        ? a + b :
      op === 'restar'       ? a - b :
      op === 'multiplicar'  ? a * b :
      a / b; // división segura porque b ≠ 0

    setResultado(`Resultado: ${res}`);
  };

  return (
    <div className="container">
      <h1>Calculadora</h1>

      <label>
        Número 1
        <input
          type="number"
          value={num1}
          onChange={e => setNum1(e.target.value)}
        />
      </label>

      <label>
        Número 2
        <input
          type="number"
          value={num2}
          onChange={e => setNum2(e.target.value)}
        />
      </label>

      <label>
        Operación
        <select value={op} onChange={e => setOp(e.target.value)}>
          <option value="sumar">Suma</option>
          <option value="restar">Resta</option>
          <option value="multiplicar">Multiplicación</option>
          <option value="dividir">División</option>
        </select>
      </label>

      <button onClick={calcular} disabled={deshabilitar}>
        Calcular
      </button>

      {resultado && <p className="resultado">{resultado}</p>}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
