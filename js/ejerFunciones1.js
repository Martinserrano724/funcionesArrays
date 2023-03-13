/*1- Escribir el código de una función a la que se pasa como
 parámetro un número entero y devuelve como resultado una cadena
  de texto que indica si el número es par o impar. Mostrar por pantalla
   el resultado devuelto por la función.
*/

const parImpar = function(num){
    if((num %2)==0){
        document.write(`El numero: ${num} es par `);
    }
    else{
        document.write(`El numero: ${num} es impar `);
    }
};
let bandera = 0;
let numero1 ;
while (bandera == 0){
     numero1=parseInt(prompt('Ingrese un numero'));
    if( isNaN(numero1)) {
       alert(`ERROR... Ingresar un numero  `);
    }
    else{
        bandera ++;
    }

}
parImpar(numero1);