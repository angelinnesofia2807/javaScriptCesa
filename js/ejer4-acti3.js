function contarVocales(texto) {
  let contador = 0;
  let vocales = 'aeiouAEIOU';

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    if (vocales.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

console.log(contarVocales("Hola sofia"));