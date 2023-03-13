/*3- Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener 
números aleatorios entre 1 y 6 para cada uno de los 
lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados 
y anotar en un array el número de apariciones 
de dicha suma, repitiendo 50 veces esta operación.
 */


let jugadas=[];
for (let index = 0; index < 50; index++) {
    let numero1= Math.floor(Math.random()*(6 -(1 -1))) + 1;
    let numero2= Math.floor(Math.random()*(6 -(1 -1))) + 1;
    jugadas[index]=(numero1+numero2);
}
document.write(`Las jugadas son: <br>`);
for (let index = 0; index < jugadas.length; index++) {
    document.write(`${jugadas[index]} -`);
}
