// ───── Referencias al DOM ──────────────────────────
const num1      = document.getElementById('num1');
const num2      = document.getElementById('num2');
const operacion = document.getElementById('operacion');
const btn       = document.getElementById('btn-calcular');
const resultado = document.getElementById('resultado');

// ───── Habilita / deshabilita el botón según reglas ─
function actualizarEstadoBoton() {
  const op = operacion.value;
  const b  = parseFloat(num2.value);

  // Deshabilitar solo si es división Y el segundo número es 0
  if (op === 'dividir' && b === 0) {
    btn.disabled = true;
    resultado.textContent = 'No se puede dividir por 0.';
  } else {
    btn.disabled = false;
    if (resultado.textContent === 'No se puede dividir por 0.') {
      resultado.textContent = '';          // Limpia mensaje preventivo
    }
  }
}

// ───── Lógica de cálculo ───────────────────────────
btn.addEventListener('click', () => {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);

  if (isNaN(a) || isNaN(b)) {
    resultado.textContent = 'Por favor ingrese ambos números.';
    return;
  }

  // Protección adicional (por si cambian números antes de pulsar)
  if (operacion.value === 'dividir' && b === 0) {
    resultado.textContent = 'No se puede dividir por 0.';
    return;
  }

  let res;
  switch (operacion.value) {
    case 'sumar':         res = a + b; break;
    case 'restar':        res = a - b; break;
    case 'multiplicar':   res = a * b; break;
    case 'dividir':       res = a / b; break;
  }

  resultado.textContent = `Resultado: ${res}`;
});

// ───── Eventos que disparan la verificación ─────────
operacion.addEventListener('change', actualizarEstadoBoton);
num2.addEventListener('input', actualizarEstadoBoton);

// Estado inicial
actualizarEstadoBoton();

