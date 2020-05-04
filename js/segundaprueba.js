//crear un array para almacenar las tareas

var listaTareas = new Array();

listaTareas = [
    {
        'idTarea': 1,
        'tarea': 'Estudiar JavaScript',
        'prioridad': 'urgente'
    },
    {
        'idTarea': 2,
        'tarea': 'Hacer la comida',
        'prioridad': 'diaria'
    },
    {
        'idTarea': 3,
        'tarea': 'Pegarme un tiro',
        'prioridad': 'urgente'
    }

];


var idTarea = 3;

var seccionTareas = document.querySelector('#tareas');

function pintarUnaTarea(pObjetoTarea){
    seccionTareas.innerHTML += `<article id="${pObjetoTarea.idTarea}" class="${pObjetoTarea.prioridad}">
    <div class="eliminar">Eliminar</div>
    <h3>${pObjetoTarea.tarea}</h3>
    </article>`
}



function pintarTareas(pListaTareas) {

    for (tarea of listaTareas) {

        pintarUnaTarea(tarea)

    }

    botonEliminar(pIdTarea)
    
}
pintarTareas(listaTareas);

var boton = document.querySelector('.añadirTarea');

boton.addEventListener('click', añadirTarea);

function añadirTarea(event) {
    event.preventDefault();

    let tarea = document.querySelector('#nuevaTarea').value;
    let prioridad = document.querySelector('#agregarTarea').value;
  

    if (tarea != "" && prioridad != "") {
        //si es distinto de vacío, le digo que me guarde la tarea en otra funcion y que me deje los campos vacíos.
        guardarTarea(tarea, prioridad);

        document.querySelector('#nuevaTarea').value = "";
        document.querySelector('#agregarTarea').value = "";

    } else {
        //si no, le digo que debe rellenar los campos vacíos.
        alert('Debes rellenar los campos vacíos');

    }

}

function guardarTarea(pTarea, pPrioridad) {

    idTarea++;

    let tarea = new Object();
    
    tarea.idTarea = idTarea;
    tarea.tarea = pTarea;
    tarea.prioridad = pPrioridad;
    



    listaTareas.push(tarea);

    pintarUnaTarea(tarea);
}


//filtrado





//boton eliminar

var eliminar = document.querySelector('.eliminar');

eliminar.on('click', botonEliminar);

function botonEliminar(event){
    seccionTareas.removeChild(pIdTarea)
}