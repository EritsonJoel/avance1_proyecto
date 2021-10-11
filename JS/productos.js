

 const cursosDS= localStorage.getItem('cursosss')
 const cursosA = JSON.parse(cursosDS)

const productos = document.getElementById('productos')




cursosA.forEach((prod) =>{
    const div = document.createElement('div')

    div.className = 'card-img-top',
    div.style="width: 18rem",


    div.innerHTML = ` 

    <img src=${prod.img}  class='card-img-top' alt="..">
    

    <div class= "card-body">
    
    <div class= "card-body">
    <h5 class="card-title grande">${prod.nombre}</h5>
    <p class="card-text rojo">Precio: $${prod.nombre2}</p>
    <p class="card-text rojo">Precio: $${prod.inversión}</p>
    <a href="#" class="btn btn-info">Go somewhere</a>
    
    </div>
    
    
    `
    productos.appendChild(div);

})