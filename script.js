const tareaInput = document.querySelector('#tarea');
const botonPost = document.querySelector('#btn-post');
const contenedorTareas = document.querySelector('#contenedor-post');
const botonEliminar1 = document.getElementById("eliminarTarea1")
const botonEliminar2 = document.getElementById("eliminarTarea2")
const botonEliminar3 = document.getElementById("eliminarTarea3")

function crearPublicacion(tarea){
    const postUser = document.createElement('div');
    const nuevaTarea = document.createElement('h4');
    nuevaTarea.textContent = tarea;
    postUser.appendChild(nuevaTarea);
    contenedorTareas.appendChild(postUser)
}

botonPost.addEventListener('click', function(e){
    event.preventDefault() //evita que cuando apretemos publicar haga cualquier cosa si no que solo haga lo que nosotros le hemos definido hacer.
    const valornuevaTarea = tareaInput.value;

    crearPublicacion(valornuevaTarea);

    tareaInput.value = '' //estos dos hacen que cuando se borre el mensaje escrito en los input del frontend

})

const formulario = document.querySelector("form");
const inputPrincipal = document.getElementById("tarea");

const tarea1 = document.getElementById("Tarea1");
const tarea2 = document.getElementById("Tarea2");
const tarea3 = document.getElementById("Tarea3");

let contador = 1;

formulario.addEventListener('submit', function(e) {

    e.preventDefault();

    if(contador === 1){
        tarea1.value = inputPrincipal.value;
    }

    else if(contador === 2){
        tarea2.value = inputPrincipal.value;
    }

    else if(contador === 3){
        tarea3.value = inputPrincipal.value;
    }

    contador++;

    inputPrincipal.value = "";
});

botonEliminar1.addEventListener('click', function(e){
    event.preventDefault() //evita que cuando apretemos publicar haga cualquier cosa si no que solo haga lo que nosotros le hemos definido hacer.
    tarea1.value.remove();

})


//const formulario = document.getElementById("formulario");
 
const input = document.getElementById("tareaInput");
 
const listaTareas = document.getElementById("listaTareas");
 
 
// Evento submit
formulario.addEventListener("submit", function(event){
 
    event.preventDefault();
 
    agregarTarea();
 
});
 
 
// Función agregar tarea
function agregarTarea(){
 
    const texto = input.value.trim();
 
    // Validar vacío
    if(texto === ""){
 
        alert("Escribe una tarea");
 
        return;
    }
}

/*     //codigo valentina
     // Crear div tarea
    const tarea = document.createElement("div");
 
    tarea.classList.add("tarea");
 
 
    // Crear texto
    const textoTarea = document.createElement("p");
 
    textoTarea.textContent = texto;
 
 
    // Crear botón
    const btnEliminar = document.createElement("button");
 
    btnEliminar.textContent = "Eliminar";
 
    btnEliminar.classList.add("btnEliminar");
 
 
    // Evento eliminar
    btnEliminar.addEventListener("click", function(){
 
        tarea.remove();
 
    });
 
 
    // Agregar elementos al div
    tarea.appendChild(textoTarea);
 
    tarea.appendChild(btnEliminar);
 
 
    // Mostrar tarea en pantalla
    listaTareas.appendChild(tarea);
 
 
    // Limpiar input
    input.value = ""; */
 
