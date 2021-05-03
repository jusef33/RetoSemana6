let arreglo=[];
let boton;
let caja;

caja=document.getElementById("cajita");

document.getElementById("agregar").addEventListener( "click" , function ()
{ 
    arreglo.push(caja.value);
    console.log(arreglo);
}); 