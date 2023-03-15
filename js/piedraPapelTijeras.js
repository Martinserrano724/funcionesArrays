/*crear un script con toda la logica necesaria que solicite al usuario un movimiento 
(piedra - papel - tijera) la PC elija aleatoriamente un movimiento y 
al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez. */

let bandera = 0;
let movientoUsuario ;
 function validar(){
    while (bandera == 0){
        movientoUsuario= prompt(`Ingrese El movimiento piedra - papel - tijeras `);
       
        if( movientoUsuario.toLowerCase() === 'piedra' || movientoUsuario.toLowerCase() === 'papel' || movientoUsuario.toLowerCase() === 'tijeras') {
           alert(`ERROR... Ingresar un numero  `);
        }
        else{
            bandera ++;
        }
    
    }
}