let contador = 0;

   function incrementarContador() {
      if (contador < 16) { 
        contador++; 
        document.getElementById("contador").innerText = contador; 
      }
    }

document.getElementById("counter").onclick = incrementarContador; 

 /*explicacion
linea 4)Condicion para que el contador no pase de 16
linea 5)incrementa el contador
linea 6) Actualiza el texto del elemento con el nuevo valor del contador
linea 10)Asigna la función al evento onclick del botón*/