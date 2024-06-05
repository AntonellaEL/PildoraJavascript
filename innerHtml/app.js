function cambiarTexto() {

  let titulo= document.getElementById("titulo");

  titulo.innerHTML = "Sigo sin entender Javascript";
}

/*Explicacion

linea 1: creamos una funcion y le damos un nombre
linea 3: creamos una variable y la llamamos titulo, 
esta variable es nuestra CAJA que almacena el documento(HTML) con ese ID especifico
linea 4 :Aquí se cambia el contenido HTML interno del elemento almacenado en la variable titulo. 
La propiedad innerHTML se utiliza para obtener o establecer el contenido HTML de un elemento.
 En este caso, se establece el contenido a la cadena "Sigo sin entender Javascript". */
