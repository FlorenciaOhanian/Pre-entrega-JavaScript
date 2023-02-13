const ceramicoMallorqui = {
    nombre: "mallorqui",
    color: "blanco y negro",
    tamaño: "20x20cm",
    exterior: true,
    mallorquiXMetro: 25,
}

const ceramicoGriego = {
    nombre: "griego",
    color: "blanco y azul",
    tamaño: "30x30cm",
    exterior: false,
    griegoXMetro: 11.11,
}

const ceramicoMexico = {
    nombre: "mexico",
    color: "blanco, rojo y verde",
    tamaño: "40x40cm",
    exterior: false,
    mexicoXMetro: 6.25,
}

console.log("ceramicoMallorqui: ", ceramicoMallorqui)
console.log("ceramicoGriego", ceramicoGriego)
console.log("ceramicoMexico", ceramicoMexico)

function totalCeramicos() {
let nombreCliente = prompt ("Ingrese su nombre: " );
let cualCeramico = prompt ("Elija que modelo desea (mallorqui, griego o mexico): ");
let cantidadDeMetros = parseInt(prompt ("Ingrese la cantidad de metros que desea cubrir: "));
let cuantosCeramicos;

if (cualCeramico=="mallorqui"){
    cuantosCeramicos = cantidadDeMetros * ceramicoMallorqui.mallorquiXMetro;
}
else if (cualCeramico=="griego"){
    cuantosCeramicos = cantidadDeMetros * griegoXMetro;
}
else if (cualCeramico=="mexico"){
    cuantosCeramicos = cantidadDeMetros * mexicoXMetro;
}
for (let i = 0; i <3; i++ ){
    alert("Espera " + i + " segundos, estamos calculando los metros que necesita..." )
}
let resultado = alert ("Hola " + nombreCliente + ", usted necesitará " + cuantosCeramicos +  " cerámicos para cubrir esa cantidad de metros");

return resultado;

}
console.log(totalCeramicos())

// Ejemplo funcion constructora. 

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

let nombre = prompt("Ingrese el nombre del nuevo producto para generar stock");
let color = prompt("Ingrese color del producto");
let tamaño = prompt("Ingrese tamaño del producto");
let exterior = prompt("Ingrese si el producto es apto para uso exterior");

// Finalmente se crean dos prooductos: uno con datos del "empleado" y otro con datos predeterminados.

const producto1 = new crearStock(nombre, color, tamaño, exterior)
const producto2 = new crearStock("Romano", "Negro", "50x50cm", 200, true)

console.log(producto1)
console.log(producto2)

producto1.mostrarExito();

let stock = ["Mallorqui", "Griego", "Mexico", "Romano", "Cordoba", "Santa fe", "Jujuy"];
console.log("Stock:")
console.log(stock)

stock.push("Buenos Aires")
console.log(stock)

let sinStock = stock.splice(2, 1);
console.log("Sin stock de cerámico " + sinStock)

let string = stock.join("-");
console.log(string)