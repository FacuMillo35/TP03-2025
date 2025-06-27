const btn = document.getElementById('cargar');
const lista = document.getElementById('lista-tareas');
const errorDiv = document.getElementById('error');

btn.addEventListener('click', async () => {
  lista.innerHTML = '';
  errorDiv.textContent = '';

  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!respuesta.ok) throw new Error('Error al obtener los datos');

    const tareas = await respuesta.json();
    // Filtrar las tareas completadas
    const completadas = tareas.filter(t => t.completed === true);

    // Mostrar cada tarea usando forEach
    completadas.forEach(t => {
      const li = document.createElement('li');
      li.textContent = `#${t.id}: ${t.title}`;
      lista.appendChild(li);
    });
  } catch (err) {
    errorDiv.textContent = err.message;
  }
});
