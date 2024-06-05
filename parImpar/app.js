document.getElementById("verificarBtn").addEventListener("click", function() {
   
    const numeroInput = parseInt(document.getElementById("numero").value);
    
    const esPar = numeroInput % 2 === 0;
    
    if (esPar) {
      
      document.getElementById("resultado").innerHTML = "El número ingresado es par.";
      
    } else {
      
      document.getElementById("resultado").innerHTML = "El número ingresado es impar.";
      
    }
});

/*linea 3) Se selecciona el campo de entrada con el id "numero" y se obtiene su valor.
   El valor es una cadena, así que usamos 'parseInt' para convertirla en un número entero.

linea 5)Se utiliza el operador de módulo ('%') para calcular el residuo de dividir 'numeroInput' entre 2.
Si el residuo es 0, 'esPar' será 'true' (el número es par); de lo contrario, 'esPar' será 'false' (el número es impar)

linea 7)Si 'esPar' es 'true', se ejecuta este bloque.

linea9)Se selecciona el elemento con el id "resultado" y se establece su contenido HTML 
para mostrar el mensaje "El número ingresado es par."

linea 11) Si 'esPar' es 'false', se ejecuta este bloque.

linea 13)Se selecciona el elemento con el id "resultado" y se establece su contenido HTML
    para mostrar el mensaje "El número ingresado es impar."*/