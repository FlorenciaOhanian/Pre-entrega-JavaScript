class Producto {
    constructor(id, nombre, color, tamaño, exterior, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.tamaño = tamaño;
        this.exterior = exterior;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const romano1 = new Producto("romano", "Nombre: Romano", "Colores: Verde, blanco y negro", "Tamaño: 50x50cm", true, 200, "img/romano.jpg")
const mallorqui1 = new Producto("mallorqui", "Nombre: Mallorqui", "Colores: Rojo, blanco y negro", "Tamaño: 20x20cm", "true", 150, "img/mallorca.jpg")
const griego1 = new Producto("griego", "Nombre: Griego", "Colores: Acuamarina,blanco y negro", "Tamaño: 30x30cm", false, 250, "img/griego.jpg")
const mexico1 = new Producto("mexico", "Nombre: Mexico", "Colores: Blanco,negro y azul", "Tamaño: 40x40cm", false, "Precio 300", "img/mexico.jpg")

const productos = [romano1, mallorqui1, griego1, mexico1]
console.log(productos)

let compra = [];

if (localStorage.getItem ("compra")){
    compra = JSON.parse (localStorage.getItem ("compra"))
}

const contenedor = document.getElementById("contenedor");

const carritoCargado = () => {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add('card', 'w-75', 'mb-3', "imgPadre")
        card.innerHTML = `
            <div>
            <img src = "${producto.img}" class = "card-img-top imgProductos" alt = "${producto.nombre}">
            <div>
            <h2> ${producto.nombre}</h2>
            <h3> ${producto.tamaño}</h3>
            <h3> ${producto.color}</h3>
            <h3> ${producto.exterior ? "Apto para uso exterior" : "No apto para uso exterior"}</h3>
            <p> ${producto.precio}</p>
            <button class="boton" id="boton${producto.id}"> Agregar a mi compra </button>
            </div>
            </div>`
        contenedor.appendChild(card);

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })
    })
}
carritoCargado();

const agregarAlCarrito = (id) => {
    const productoCargado = compra.find(producto => producto.id === id);
    if (productoCargado){
        productoCargado.cantidad++;}
    else {
        const producto = productos.find(producto => producto.id === id);
        compra.push(producto);
    }
    calculoTotal();
    localStorage.setItem("compra", JSON.stringify(compra));
    }

const contenedorCompra = document.getElementById("contenedorCompra");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener ("click", () => {
    mostrarCarrito();
})

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    compra.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add('card', 'w-75', 'mb-3', "imgPadre")
        card.innerHTML = `
            <div>
            <img src = "${producto.img}" class = "card-img-top imgProductos" alt = "${producto.nombre}">
            <div>
            <h2> ${producto.nombre}</h2>
            <h3> ${producto.tamaño}</h3>
            <h3> ${producto.color}</h3>
            <h3> ${producto.exterior ? "Apto para uso exterior" : "No apto para uso exterior"}</h3>
            <p> ${producto.precio}</p>
            <h3> ${producto.cantidad}</h3>
            <button " id="boton${producto.id}"> Elimminar de mi compra </button>
            </div>
            </div>`
            contenedorCarrito.appendChild (card);

            const boton = document.getElementById (`eliminar${producto.id}`);
            boton.addEventListener ("click", () => {
                eliminarDelCarrito (producto.id);
            })
    })
calculoTotal();
}


