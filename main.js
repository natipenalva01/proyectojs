// Formulario de contacto

// function contacto (){
//     let nombreContacto = prompt ("Ingrese su nombre");
//     if(nombreContacto === ""){
//         alert ("No ingreso el nombre");
//     }else{
//         alert(`Su nombre es ${nombreContacto}`);
//     }
//     let apellidoContacto = prompt("Ingrese su apellido");
//     if(apellidoContacto === ""){
//         alert ("No ingreso el apellido");
//     }else{
//         alert(`Su apellido es ${apellidoContacto}`);
//     }
//     let emailContacto = prompt ("Ingrese su email");
//     if(emailContacto === ""){
//         alert("No ingreso su email");
//     }else{
//         alert(`Su email es ${emailContacto}`);
//     }
//     let telefonoContacto = parseInt(prompt("Ingrese su telefono"));
//     if(telefonoContacto ===  NaN){
//         alert ("No ingreso su telefono");
//     }else{
//         alert (`Su telefono es ${telefonoContacto}`)
//     }
//     let consulta = prompt ("Ingrese su consulta");
//     if(consulta === ""){
//         alert("No ingreso su consulta");
//     }
//     else{
//         alert(`Su consulta es ${consulta}`)
//     }
// }
// contacto()




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