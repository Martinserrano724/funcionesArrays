/*2- Definir una función que muestre información sobre una cadena de texto 
que se le pasa como argumento. A partir de la cadena que se le pasa, 
la función determina si esa cadena está formada sólo 
por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

let contadorMayuscula=0;
let contadorMinuscula=0;

const mayusculaMinuscula =function (letra)
{
     if(letra === letra.toUpperCase()){
        contadorMayuscula++;
     }
     if( letra === letra.toLowerCase()){
        contadorMinuscula++;
     }
     
}
const controlar=function(frase){
    if (contadorMayuscula == 0 && contadorMinuscula > 0 ) {
        document.write( `La cadena: <b>${frase}</b> es todo minuscula`);
    }
    else if (contadorMayuscula > 0 && contadorMinuscula == 0) {
        document.write( `La cadena: <b>${frase}</b> es todo Mayuscula`) ;
    }
    else  {
        document.write( `La cadena: <b>${frase}</b> es Mescla`) ;
    }
}
  


let frase = prompt('ingresa una frase ');
for(let index = 0; index < frase.length; index++)
{
    mayusculaMinuscula(frase[index]);     
}
controlar(frase);

