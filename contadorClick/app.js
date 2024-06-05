let contador = 0; 

function incrementarContador() {
  contador++; 
  document.getElementById("contador").innerText = contador; 
}

document.getElementById("counter").onclick = incrementarContador;

/*explicacion
linea 1 ) Inicializa el contador en 0
linea 3) haces una funcion
linea 4) incrementa el contador de la linea 1
linea 5) actualiza el texto del elemento con el nuevo valor del contador
linea 8) Asigna la función al evento onclick del botón
*/
