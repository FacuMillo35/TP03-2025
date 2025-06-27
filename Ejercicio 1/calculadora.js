const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operacion = document.getElementById('operacion');
const btn = document.getElementById('btn-calcular');
const resultado = document.getElementById('resultado');

function actualizarEstadoBoton() {
  if (operacion.value === 'dividir') {
    btn.disabled = true;
    resultado.textContent = 'La división está deshabilitada.';
  } else {
    btn.disabled = false;
    resultado.textContent = '';
  }
}

operacion.addEventListener('change', actualizarEstadoBoton);

btn.addEventListener('click', () => {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);

  if (isNaN(a) || isNaN(b)) {
    resultado.textContent = 'Por favor ingrese ambos números.';
    return;
  }

  let res;
  switch (operacion.value) {
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

  resultado.textContent = res !== undefined ? `Resultado: ${res}` : '';
});

// Inicializar estado al cargar la página
document.addEventListener('DOMContentLoaded', actualizarEstadoBoton);
