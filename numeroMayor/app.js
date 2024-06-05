document.getElementById("encontrarMaximoBtn").addEventListener("click", function() {
    const numerosInput = document.getElementById("numeros").value;
    const numeros = numerosInput.split(",").map(Number);
    let maximo = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > maximo) {
        maximo = numeros[i];
      }
    }
    document.getElementById("resultado").innerHTML = "El número máximo en el array es: " + maximo;
  });
  /*Explicacion
  
  linea 1) Aquí se está utilizando el método 'addEventListener' para agregar 
  un event listener al botón con el id "encontrarMaximoBtn".
  Este event listener está configurado para escuchar el evento 'click' en el botón.
  Cuando se produce el evento 'click', se ejecutará la función anónima que sigue a continuación.

  linea 2) Se está obteniendo el valor del input con el id "numeros". 
  Este input se supone que contiene una lista de números separados por comas.

 linea 3) Se está utilizando el método 'split(",")' para dividir la cadena de números en un array, 
 utilizando la coma como separador, luego, se está utilizando el método 
 'map(Number)' para convertir cada elemento del array de cadena a un número.

 linea 4) Se inicializa una variable 'maximo' con el primer número del array 'numeros'.

 linea 5)Se inicia un bucle 'for' para iterar sobre los elementos 
 del array 'numeros', comenzando desde el segundo elemento (índice 1).

linea 6 Se compara cada elemento del array 'numeros' con el valor actual de 'maximo'.
Si el elemento actual es mayor que 'maximo', se actualiza 'maximo' con el valor del elemento actual.

 linea 10) Finalmente, se está seleccionando el elemento con el id "resultado" y se está estableciendo su contenido HTML
 para mostrar el mensaje que indica cuál es el número máximo encontrado en el array.*/