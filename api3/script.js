
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