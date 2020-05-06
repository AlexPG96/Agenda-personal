//crear un array para almacenar las tareas

var listaTareas = new Array();

listaTareas = [
    {
        'idTarea': 0,
        'tarea': 'Estudiar JavaScript',
        'prioridad': 'diaria'
    },
    {
        'idTarea': 1,
        'tarea': 'Hacer la comida',
        'prioridad': 'mensual'
    },
    {
        'idTarea': 2,
        'tarea': 'Pegarme un tiro',
        'prioridad': 'urgente'
    }

];


var idTarea = 2;

var seccionTareas = document.querySelector('#tareas');

function pintarUnaTarea(pObjetoTarea) {
    seccionTareas.innerHTML += `<article class="${pObjetoTarea.prioridad}">
    <div id="${pObjetoTarea.idTarea}" class="eliminar">Eliminar</div>
    <h3>${pObjetoTarea.tarea}</h3>
    </article>`
}



function pintarTareas(pListaTareas) {

    for (tarea of listaTareas) {

        pintarUnaTarea(tarea)

    }
    var listaBotones = document.querySelectorAll('.eliminar');

    for (eliminar of listaBotones) {
        eliminar.addEventListener('click', botonEliminar);
    }


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

//filtrar por nombre
//creo un nuevo array para almacenar la lista filtrada por nombre de tarea

var listaFiltrada = new Array();

var buscar = document.querySelector('#buscarTarea');

buscar.addEventListener('keydown', (event) => {
    let buscarTarea = event.target.value
    //console.log(buscarTarea) se guardan las letras.

    listaFiltrada = listaTareas.filter(function (tarea) {
        let tituloTarea = tarea.tarea.toLowerCase()

        return tituloTarea.includes(buscarTarea);
    })

    pintarTareasFiltradas(listaFiltrada); //creo una funcion que llamo mas adelante para pintar el nuevo array
})

//filtrar prioridad
//creo un nuevo array para almacenar la lista filtrada por prioridad
var listaPrioridad = new Array();

var prioridad = document.querySelector('#buscarPrioridad');

prioridad.addEventListener('change', function (event) {
    let filtroPrioridad = event.target.value;
    console.log(filtroPrioridad) //se muestra la prioridad.

    listaPrioridad = listaTareas.filter(function (tarea) {
        tarea.prioridad.includes(filtroPrioridad)
    })

    pintarTareasFiltradas(listaPrioridad); //creo una funcion para pintar el nuevo array
})


//esta funcion pinta las tareas YA FILTRADAS.

function pintarTareasFiltradas(pListaFiltro) {

    seccionTareas.innerHTML = "";

    if (pListaFiltro.length != ""){
        //si el imput NO está vacio, pinte las tareas que pasan el filtro

        pListaFiltro.forEach(pObjetoTarea => {
            seccionTareas.innerHTML += `<article class="${pObjetoTarea.prioridad}">
                                            <div id="${pObjetoTarea.idTarea}" class="eliminar">Eliminar</div>
                                            <h3>${pObjetoTarea.tarea}</h3>
                                        </article>`
        })

    } else {
        //le digo que SI el imput queda vacio, deje todas las tareas.
        pintarUnaTarea(tarea);
    }

    //y añado la funcion de eliminar para que pueda eliminar las tareas aunque esten filtradas. FUNCIONA.
    var listaBotones = document.querySelectorAll('.eliminar');

    for (eliminar of listaBotones) {
        eliminar.addEventListener('click', botonEliminar);
    }

}

//boton eliminar


function botonEliminar(event) {
    //console.log(event.target.id);

    //borro del array con un splice, metiendole el id como primer parametro. Solo borra las existentes, no las que creo.
    listaTareas.splice(event.target.id, 1);

    let articleBorrar = event.target.parentNode;
    //console.log(articleBorrar)
    seccionTareas.removeChild(articleBorrar);
}