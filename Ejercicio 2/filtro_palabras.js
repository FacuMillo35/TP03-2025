// Lista predefinida de palabras
const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];

const input = document.getElementById('filtro');
const btn = document.getElementById('btn-filtrar');
const lista = document.getElementById('lista');
const mensaje = document.getElementById('mensaje');

// Función para mostrar elementos en la lista
function mostrarLista(arr) {
  lista.innerHTML = '';
  arr.forEach(palabra => {
    const li = document.createElement('li');
    li.textContent = palabra;
    lista.appendChild(li);
  });
}

// Mostrar todas las palabras al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  mostrarLista(palabras);
});

btn.addEventListener('click', () => {
  const texto = input.value.trim();

  if (texto === '') {
    mensaje.textContent = 'Por favor ingrese algún texto para filtrar.';
    return;
  }

  mensaje.textContent = '';
  const resultado = palabras.filter(p => p.toLowerCase().includes(texto.toLowerCase()));

  if (resultado.length === 0) {
    mensaje.textContent = 'No se encontraron coincidencias.';
    lista.innerHTML = '';
  } else {
    mostrarLista(resultado);
  }
});
