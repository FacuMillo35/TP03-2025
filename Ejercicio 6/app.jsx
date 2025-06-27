const { useState } = React;

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [categoria, setCategoria] = useState('');
  const [color, setColor] = useState('');

  const calcularIMC = () => {
    const w = parseFloat(peso);
    const h = parseFloat(altura);

    if (!w || !h || h <= 0) {
      setCategoria('Ingrese datos válidos');
      setColor('var(--red)');
      setImc(null);
      return;
    }

    const calc = w / (h * h);
    const imcRedondeado = calc.toFixed(2);
    setImc(imcRedondeado);

    if (calc < 18.5) {
      setCategoria('Nivel bajo');
      setColor('var(--yellow)');
    } else if (calc < 25) {
      setCategoria('Nivel normal');
      setColor('var(--green)');
    } else if (calc < 30) {
      setCategoria('Sobrepeso');
      setColor('var(--orange)');
    } else {
      setCategoria('Obesidad');
      setColor('var(--red)');
    }
  };

  return (
    <div className="card">
      <h1>Calculadora IMC</h1>

      <label>
        Peso (kg)
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Ej: 70"
        />
      </label>

      <label>
        Altura (m)
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Ej: 1.75"
          step="0.01"
        />
      </label>

      <button onClick={calcularIMC}>Calcular</button>

      {categoria && (
        <div className="mensaje" style={{ background: color }}>
          {imc && <span>IMC: {imc} - </span>}
          {categoria}
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
