/*
4- Escriba un script que muestre la tabla de multiplicar de un número 
ingresado por pantalla, la creación de la tabla debe ser realizada con 
una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/


function tablaMultiplicar(numero1){
    document.write(`
        <ul class="lista">
        `);
    for (let index = 0; index < 10; index++) {
        document.write(`
        <li>
           ${numero1} x ${index+1} = ${numero1*(index + 1)}
        </li>
        `);
        
    }
    document.write(`
        </ul>
        `);
}

let bandera = 0;
let numero1 ;
while (bandera == 0){
     numero1=parseInt( prompt('ingrese un numero '));
    if( isNaN(numero1)) {
       alert(`ERROR... Ingresar un numero  `);
    }
    else{
        bandera ++;
    }

}
tablaMultiplicar(numero1);