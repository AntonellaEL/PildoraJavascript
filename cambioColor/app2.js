function cambiarColor() {
    let texto = document.getElementById("miTexto");
    texto.style.color = "red";
  }

  document.getElementById("miBoton").onclick = cambiarColor;
