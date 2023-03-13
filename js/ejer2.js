/* 2-  Crear un script que solicite al usuario mediante un prompt 
el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario
 selecciona cancelar se debe mostrar el arreglo generado
 , luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'. */

let contador = 0;
let ciudades = [];
do {
  let ciudad = prompt(`Ingrese El nombre de la ciudad`);
  ciudades[contador] = ciudad;
  contador++;
} while (
  confirm(
    "Presiona  enter para ingreasar una Ciudad \n  Cancelar Para Dejar de ingresar."
  )
);

alert(` 
        La longitud del arreglo es: ${ciudades.length} \n
        La Primera posicion: ${ciudades[0]} \n
        La Tercera posicion es: ${ciudades[2]}\n
        La ultima posicion es: ${ciudades[(ciudades.length - 1)]}
  `);
 

  document.write(`Las ciudades ingresadas:<br>
  <ul class='lista'>`);
  for (let index = 0; index < ciudades.length; index++) {
 
     document.write(`
     <li>
         ${ciudades[index]}
     </li>`);
     
   }

   document.write(`
 </ul> <br>`);
 ciudades[(ciudades.length - 1)]='Paris';
  document.write(` La ultima posicion es: ${ciudades[(ciudades.length - 1)]}<br>
  La segunda posicion es: ${ciudades[1]}<br>
  `);
  ciudades[(1)]='Barcelona';

  

   

 document.write(`<br>
 <ul class='lista'>`);
 for (let index = 0; index < ciudades.length; index++) {

    document.write(`
    <li>
        ${ciudades[index]}
    </li>`);
    
  }
  document.write(`
</ul> <br>`);

