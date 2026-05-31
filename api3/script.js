
function mostrarDatos (quote) {
    const contenedormensaje = document.getElementById('frase')
    const mensaje = document.createElement('p')
    mensaje.textContent = quote
    contenedormensaje.appendChild(mensaje)
}


fetch('https://dummyjson.com/quotes/random')
.then(Response => Response.json())
.then(datos => {
        mostrarDatos(datos.quote)       
    }).catch (error => console.log)

const boton = document.getElementById('btn-frase')
boton.addEventListener("click", () => {
    const idAleatorio = Math.floor(Math.random() * 1454) + 1
    console.log(idAleatorio) //el boton tira numero aleatorio hasta el 1430 pero no conecta aun con el id de la frase
    fetch(`https://dummyjson.com/quotes/${idAleatorio}`)
    .then(Response => Response.json())
    .then(datos => {
        console.log(datos);
        mostrarDatos(datos.quote)
    })
})

/* fetch('https://dummyjson.com/quotes')
    .then(response => response.json())
    .then(datos => {
        console.log(datos.total);
    }); */