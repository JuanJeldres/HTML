//practicar peticiones get


function mostrarDatos (name, email, phone){
    const contenedornombre = document.getElementById('nombre')  //agregar mail, telefono para solo utilizar este div
    const contenedoremail = document.getElementById('mail')
    const contenedortelefono = document.getElementById('telefono')
    const datostotal = document.createElement('p')
    datostotal.textContent = name, phone, email
    contenedornombre.appendChild(datostotal)
}

fetch('https://jsonplaceholder.typicode.com/users/1', {method: 'GET'}) //poner metodo get esta de mas si
.then(Response => Response.json())
.then(datos => {
    
        mostrarDatos(datos.name)
        mostrarDatos(datos.email)
        mostrarDatos(datos.phone)
        
    }).catch (error => console.log)

    //VICTORIA PERSONAL, lo hice yo 
//ahora GET

//await