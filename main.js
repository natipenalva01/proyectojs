
// carrito de compras
let productos = prompt("Agregue sus productos al carrito");
let precioVelador = 5600;
let precioJuegoDeSillas = 27880;
let precioCuadro = 3000;
let precioBiblioteca = 45900;

 const suma = (a,b) => a + b;
 let total = 0;

while(productos != ""){
    switch(productos){
        case "velador":
            alert(`Agrego velador al carrito`);
           total = suma(total, precioVelador);
          break;
        case "juego de sillas":
            alert(`Agrego juego de sillas al carrito`);
             total = suma(total, precioJuegoDeSillas);
            break;
        case "cuadro":
            alert(`Agrego cuadro al carrito`);
            total = suma(total, precioCuadro);
            break;
        case "biblioteca":
            alert(`Agrego biblioteca al carrito`);
            total = suma(total, precioBiblioteca);
            break;
        default:
            alert("Ese producto no se encuentra disponible");
            break;
    }
    productos = prompt("Agregue sus productos al carrito");
}
alert(`El total de su compra es ${total}`)