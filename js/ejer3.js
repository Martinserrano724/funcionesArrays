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
let contador2 =0;
let contador3 =0;
let contador4 =0;
let contador5 =0;
let contador6 =0;
let contador7 =0;
let contador8 =0;
let contador9 =0;
let contador10 =0;
let contador11=0;
let contador12=0;
for (let index = 0; index < jugadas.length; index++) {
    document.write(`${jugadas[index]} -`);
    
}
for (let index = 0; index < jugadas.length; index++) {
    if (jugadas[index] == 2){
        contador2++;
    }
    else if(jugadas[index]==3){
        contador3++;
    }
    else if(jugadas[index]==4){
        contador4++;
    }
    else if(jugadas[index]==5){
        contador5++;
    }
    else if(jugadas[index]==6){
        contador6++;
    }
    else if(jugadas[index]==7){
        contador7++;
    }
    else if(jugadas[index]==8){
        contador8++;
    }
    else if(jugadas[index]==9){
        contador9++;
    }
    else if(jugadas[index]==10){
        contador10++;
    }
    else if(jugadas[index]==11){
        contador11++;
    }
    else if(jugadas[index]==12){
        contador12++;
    }
    document.write(`${jugadas[index]} -`);
    
    
}

document.write(`<br>la cantidad de veces que se repitieron los tiros
<ul class = "lista">
    <li>
        2=${contador2} 
    </li>
    <li>
        3=${contador3} 
    </li>
    <li>
        4=${contador4} 
    </li>
    <li>
        5=${contador5} 
    </li>
    <li>
        6=${contador6} 
    </li>
    <li>
        7=${contador7} 
    </li>
    <li>
        8=${contador8}
    </li>
    <li>
        9=${contador9} 
    </li>
    <li>
        10=${contador10} 
    </li>
    <li>
        11=${contador11} 
    </li>
    <li>
        12=${contador12} 
    </li>
</ul>`);
