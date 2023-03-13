/*3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)*/

let ladoA;
let ladoB;
let bandera = 0;

const validar = function(){
    while (bandera == 0){
        ladoA= parseInt(prompt(`Ingrese el lado 1 del rectangulo `));
        ladoB= parseInt(prompt(`Ingrese el lado 2 del rectangulo `));
        if( isNaN(ladoA) && isNaN(ladoB) || isNaN(ladoA) && !isNaN(ladoB) || !isNaN(ladoA) && isNaN(ladoB)) {
           alert(`ERROR... Ingresar un numero  `);
        }
        else{
            bandera ++;
        }
    
    }
}
 function perimetro(a , b){
    let p ;
    p = 2*(a +b)
    return p;
}
validar();
const resultado=perimetro(ladoA , ladoB);
document.write(`El resultado es: ${resultado}`);
