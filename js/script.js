//crear un array para almacenar las tareas

var listaTareas = new Array();

//boton para añadir tareas

var boton = document.querySelector('.añadirTarea');

var seccionTareas = document.querySelector('#tareas');


boton.addEventListener('click', añadirTarea) //le añado la funcion al boton

function añadirTarea(event) {
    event.preventDefault();
    //capturo los datos que recibo de los input.
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

    let tareas = new Object();
    tareas.tarea = pTarea;
    tareas.prioridad = pPrioridad;



    listaTareas.push(tareas);

    //console.log(listaTareas); para cmprobar que se acumula


    pintarTarea(tareas);

}


function pintarTarea(pTareas) {

    /*
           switch (pTareas.prioridad) {
               case '1':
                   $('article').css({'background-color': 'red'});
                   break;
               case '2':
                   $('article').css({'background-color': 'green'});
                   break;
               case '3':
                   $('article').css({'background-color': 'blue'});
                   break;
       
           }
           */

    if (pTareas.prioridad == 1) {
        $('article').css({ 'background-color': 'red' });
    } else if (pTareas.prioridad == 2) {
        $('article').css({ 'background-color': 'green' });
    } else if (pTareas.prioridad == 3) {
        $('article').css({ 'background-color': 'blue' });
    }


    seccionTareas.innerHTML += `<article class="${pTareas.prioridad}">
    <div class="eliminar">Eliminar</div>
    <h3>${pTareas.tarea}</h3>
</article>`


}
