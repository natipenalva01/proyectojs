// array productos




const productos = [
    { numProd: 1, nombre: "velador", precio: 5600 },
    { numProd: 2,nombre: "juego de mesa", precio: 27800 },
    { numProd: 3, nombre: "cuadro", precio: 3000 },
    { numProd: 4, nombre: "biblioteca",precio: 40000 }
];
const buscar = productos.find(item => item.nombre === "cuadro");
console.log(buscar);

const filtrar = productos.filter(item => item.precio <= 5600)
console.log(filtrar)


let carrito = [];

let eleccion = prompt("Hola! Que desea comprar algún producto? OPCION 1: SI, OPCION 2: NO");

while(eleccion != "si" && eleccion != "no"){
    alert("Respuesta incorrecta. Ingrese 'si' o 'no'");
    eleccion = prompt("Hola! Que desea comprar algún producto? OPCION 1: SI, OPCION 2: NO")
}
if(eleccion === "si"){
    alert("Bienvenido! A continuación le mostraremos nuestra lista de productos");
    let productosElegidos = productos.map((producto) => producto.nombre + " " + "$" + producto.precio);
    alert (productosElegidos.join( "---"));  
}else if(eleccion === "no"){
    alert("Gracias por visitarnos!")
}



while(eleccion != "no"){
    let producto = prompt("Agregue un producto al carrito");
    let precio = 0;

    if(producto === "velador" || producto === "juego de mesa" || producto === "cuadro" || producto ==="biblioteca"){
        switch(producto){
            case "velador":
                precio =  5600;
                break;
            case "juego de mesa":
                precio = 27800;
                break;
            case "cuadro":
                precio = 3000;
                break;
            case "biblioteca":
                precio = 40000;
                break; 
                default: 
                alert("Ese producto no existe");
        }
        let cantidad = parseInt(prompt("Cúantas unidades quiere llevar?"));
        carrito.push({producto, cantidad, precio});
    }
  

    eleccion = prompt("Desea seguir comprando?");
};







