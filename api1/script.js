/* 
const respuesta = await fetch(
    `https://rickandmortyapi.com/api/character/${idAleatorio}`
);
const datos = await respuesta.json();
console.log(datos);

document.getElementById("personajeImg").src = datos.image;

document.getElementById("nombre").textContent = datos.name;

        
        cargarPersonaje(); */




const boton = document.querySelector("#botonPersonaje");

boton.addEventListener("click", async function () {

const idAleatorio = Math.floor(Math.random() * 826) + 1;

let respuesta = await fetch(`https://rickandmortyapi.com/api/character/${idAleatorio}`);

let datos = await respuesta.json();

document.querySelector("#imagenPersonaje").src = datos.image;

document.querySelector("#nombrePersonaje").textContent = datos.name;
});

