function cambiarColor() {
    let texto = document.getElementById("miTexto");
    let colores = ["red", "blue", "green", "yellow", "purple"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    texto.style.color = colorAleatorio;
  }

  document.getElementById("miBoton").onclick = cambiarColor;