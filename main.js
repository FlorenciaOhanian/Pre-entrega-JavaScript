const ceramicoMallorqui = {
    nombre: "mallorqui",
    color: "blanco y negro",
    tamaño: "20x20cm",
    precio: 150,
    exterior: true,
    mallorquiXMetro: 25,
}

const ceramicoGriego = {
    nombre: "griego",
    color: "blanco y azul",
    tamaño: "30x30cm",
    exterior: false,
    precio: 250,
    griegoXMetro: 11.11,
}

const ceramicoMexico = {
    nombre: "mexico",
    color: "blanco, rojo y verde",
    tamaño: "40x40cm",
    exterior: false,
    precio: 300,
    mexicoXMetro: 6.25,
}

// console.log("ceramicoMallorqui: ", ceramicoMallorqui)
// console.log("ceramicoGriego", ceramicoGriego)
// console.log("ceramicoMexico", ceramicoMexico)

// function totalCeramicos() {
//     let nombreCliente = prompt("Ingrese su nombre: ");
//     let cualCeramico = prompt("Elija que modelo desea (mallorqui, griego o mexico): ");
//     let cantidadDeMetros = parseInt(prompt("Ingrese la cantidad de metros que desea cubrir: "));
//     let cuantosCeramicos;

//     if (cualCeramico == "mallorqui") {
//         cuantosCeramicos = cantidadDeMetros * ceramicoMallorqui.mallorquiXMetro;
//     } else if (cualCeramico == "griego") {
//         cuantosCeramicos = cantidadDeMetros * griegoXMetro;
//     } else if (cualCeramico == "mexico") {
//         cuantosCeramicos = cantidadDeMetros * mexicoXMetro;
//     }
//     for (let i = 0; i < 3; i++) {
//         alert("Espera " + i + " segundos, estamos calculando los metros que necesita...")
//     }
//     let resultado = alert("Hola " + nombreCliente + ", usted necesitará " + cuantosCeramicos + " cerámicos para cubrir esa cantidad de metros");

//     return resultado;

// }
// console.log(totalCeramicos())

// // Ejemplo funcion constructora. 

class crearStock {
    constructor(nombre, color, tamaño, precio, exterior) {
        this.nombre = nombre;
        this.color = color;
        this.tamaño = tamaño;
        this.precio = precio;
        this.exterior = exterior;
        this.mostrarExito = function () {
            console.log("Éxito, has ingresado el nuevo producto " + this.nombre + " al sistema stock")
        }
    }
}
// El empleado debe ingresar los datos del nuevo producto en el negocio (Funcionalidad para la empresa, no para el cliente.)

// let nombre = prompt("Ingrese el nombre del nuevo producto para generar stock");
// let color = prompt("Ingrese color del producto");
// let tamaño = prompt("Ingrese tamaño del producto");
// let precio = prompt("Ingrese el precio por metro cuadrado: ")
// let exterior = prompt("Ingrese si el producto es apto para uso exterior");

// Finalmente se crean dos prooductos: uno con datos del "empleado" y otro con datos predeterminados.


const romano = new crearStock("romano", "negro", "50x50cm", 200, true)
const mallorqui = new crearStock("mallorqui", "blanco y negro", "20x20cm", 150, true)
const griego = new crearStock("griego", "blanco y azul", "30x30cm", 250, false)
const mexico = new crearStock("mexico", "blanco, rojo y verde", "40x40cm", 300, false)


romano.mostrarExito();

const stock = [mallorqui, griego, mexico, romano];

console.log("Stock:")
console.log(stock)

stock.push("Buenos Aires")
console.log(stock)

let sinStock = stock.splice(2, 1);
console.log("Sin stock de cerámico " + sinStock)

let string = stock.join("-");
console.log(string)

stock.forEach((crearStock) => {
    console.log(crearStock.precio);
})

const encontrar = stock.find(stockitem => stockitem.nombre === "mallorqui");
console.log(encontrar)

const productosBYN = stock.filter(stockitem => stockitem.color == "blanco y negro");

const productosBYN2 = stock.filter(stockitem => stockitem.color == "negro");
console.log(productosBYN)
console.log(productosBYN2)

