function elecciones() {
  let votosUno = 0;
  let votosDos = 0;
  let votosTres = 0;
  let votosBlanco = 0;
  let totalVotantes = 0;
  const claveCierre = "admin123";

  while (totalVotantes < 50) {
    let opcion = prompt(
      "MENÚ ELECCIONES\n" +
      "1. Candidato Uno\n" +
      "2. Candidato Dos\n" +
      "3. Candidato Tres\n" +
      "4. Voto en Blanco\n" +
      "5. Cerrar elecciones"
    );

    if (opcion === "5") {
      let clave = prompt("Ingrese clave para cerrar:");
      if (clave === claveCierre) {
        break; 
      } else {
        alert("Clave incorrecta.");
      }
    } else {
      let voto = parseInt(opcion);

      if (voto === 1) {
        votosUno++;
        totalVotantes++;
      } else if (voto === 2) {
        votosDos++;
        totalVotantes++;
      } else if (voto === 3) {
        votosTres++;
        totalVotantes++;
      } else if (voto === 4) {
        votosBlanco++;
        totalVotantes++;
      } else {
        alert("Opción no válida.");
      }
    }
  }

  console.log("RESULTADOS FINALES");
  console.log("Total votantes:", totalVotantes);
  console.log("Candidato Uno:", votosUno);
  console.log("Candidato Dos:", votosDos);
  console.log("Candidato Tres:", votosTres);
  console.log("Votos en Blanco:", votosBlanco);
}