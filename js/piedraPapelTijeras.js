/*crear un script con toda la logica necesaria que solicite al usuario un movimiento 
(piedra - papel - tijera) la PC elija aleatoriamente un movimiento y 
al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez. */

let bandera = 0;
let movientoUsuario ;
let movientoPc= ["piedra" , "papel" , "tijeras"];
let contador=0;
let contadorGanadas=0;
let contadorGanadasPc=0;
let contadorEmpates=0;
 function validar(){
    bandera=0;
    while (bandera == 0){
        movientoUsuario= prompt(`Ingrese El movimiento piedra - papel - tijeras `);
       
        if( movientoUsuario.toLowerCase() === 'piedra' || movientoUsuario.toLowerCase() === 'papel' || movientoUsuario.toLowerCase() === 'tijeras') {
          
           bandera ++;
        }
        else{
            alert(`ERROR... Ingresar un moviento "piedra"  o  "papel" o "tijeras"  `);
        }
    
    }
}

function movientoPcAleatorio(movAle){
   return Math.floor(Math.random() * (2 - 0 + 1) + 0);  
}

function juego(movPc , movUsu){
if(movPc.toLowerCase() == movUsu.toLowerCase()){
    alert(`
    El moviento del usuario:    ${movUsu.toUpperCase()}\n
    El movimiento de la pc:    ${movPc.toUpperCase()}\n
    resultado:   EMPATE`)
    contadorEmpates++; 
}
else if((movPc.toLowerCase() == "piedra" && movUsu.toLowerCase()== "tijeras" )|| (movPc.toLowerCase() == "papel" && movUsu.toLowerCase()== "piedra") || movPc.toLowerCase() == "tijeras" && movUsu.toLowerCase()== "papel"){
    alert(`
    El moviento del usuario:    ${movUsu.toUpperCase()}\n
    El movimiento de la pc:    ${movPc.toUpperCase()}\n
    resultado:   GANA PC`)
    contadorGanadasPc++;
}
else if((movPc.toLowerCase() == "piedra" && movUsu.toLowerCase()== "papel")||(movPc.toLowerCase() == "tijeras" && movUsu.toLowerCase()== "piedra") || movPc.toLowerCase() == "papel" && movUsu.toLowerCase()== "tijeras"){
    alert(`
    El moviento del usuario:    ${movUsu.toUpperCase()}\n
    El movimiento de la pc:    ${movPc.toUpperCase()}\n
    resultado:   GANA USUARIO`)
    contadorGanadas++;
}
mostrarResultados();
}
function mostrarResultados(){
alert(`
            Resultados: 
            Total de partidas: ${contador}
            Ganadas Pc: ${contadorGanadasPc}
            Ganadas Usuario: ${contadorGanadas}
            Ganadas Empates: ${contadorEmpates}

`);
}

do{ 
    contador++;
    validar(movientoUsuario);
    const posicion =movientoPcAleatorio(movientoPc);
    juego(movientoPc[posicion],movientoUsuario)
    
   
}while(confirm("¿Desea jugar otra ves?"));

