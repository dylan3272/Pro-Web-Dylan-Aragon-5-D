// Función para agregar tareas
function agregarTarea() {
    const entradaTarea = document.getElementById('entrada-tarea');
    const textoTarea = entradaTarea.value.trim();
    

    // Crear un nuevo elemento de lista (li)
    const tarea = document.createElement('li');
    tarea.textContent = textoTarea;

    tarea.onclick = function() {
        tareaElemento.style.textDecoration = 'line-through';
    };

    // Agregar la nueva tarea a la lista
    document.getElementById('lista-tareas').appendChild(tarea);
}
