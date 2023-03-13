/*

2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes códigos de 
acceso a las naves de guerra los cuáles reposan en la base de datos 
central, para ello debe programar una función que permita recibir la 
palabra clave de cada nave y separar imprimiendo solo el nombre del 
piloto asignado a cada nave. 
Tenga en cuenta que el formato de todos los datos es el siguiente:
• ARQ2555: Sara Bel-Sun
• ARQ2556: Nodin Chavdri
• ARQ2557: Finn

*/

const obtenerPilotos = (datos) => {
    const pilotos = [];

    const lineas = datos.trim().split('\n');
    lineas.forEach((linea) => {
        const [clave, piloto] = linea.split(': ');
        // pilotos.push(clave);
        pilotos.push(piloto);
    });

    return pilotos;
}

const datos = `
  ARQ2555: Sara Bel-Sun
  ARQ2556: Nodin Chavdri
  ARQ2557: Finn
  `;

const pilotos = obtenerPilotos(datos);
console.log(pilotos); 