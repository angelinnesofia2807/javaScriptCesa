function contarpalabras(texto) {
  let palabras = texto.split(" ");
  let contador = 0;

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] !== "") {
      contador++;
    }
  }

  return contador;
}

console.log(contarpalabras("maquillaje de hoy "));