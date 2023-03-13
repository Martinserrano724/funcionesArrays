//1- Crear un array llamado meses y que almacene el nombre de
//los doce meses del año. Mostrar por pantalla en forma
//de lista  los doce nombres del arreglo.

let meses = [
  `Enero`,
  `Febrero`,
  `Marzo`,
  `Abril`,
  `Mayo`,
  `Junio`,
  `Julio`,
  `Agosto`,
  `Septiembre`,
  `Octubre`,
  `Novienbre`,
  `Dicienbre`,
];

for (let index = 0; index < meses.length; index++) {
  document.write(`
  <ul class='lista'>
    <li>
    ${index+1} -${meses[index]}
    </li>
  </ul>
   
    `);
}
