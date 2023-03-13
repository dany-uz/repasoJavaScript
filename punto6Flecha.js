/*

6. PROBLEMA: Para habilitar la guerra de los clones es necesario 
clasificar la edad de estos, elabore un programa que permita 
recibir 20 edades y 20 códigos diferentes generadas 
aleatoriamente y determine cual de esas edades es la mayor. Si 
se repite la misma edad se debe contar el número de 
repeticiones

*/

const clasificarEdades = () => {
    const edades = [];
    const codigos = [];

    for (let i = 0; i < 20; i++) {
        const edad = Math.floor(Math.random() * 100) + 1;
        edades.push(edad);

        const codigo = Math.floor(Math.random() * 20) + 1;
        codigos.push(codigo);
    }

    let edadMayor = edades[0];
    let repeticiones = 0;

    for (let i = 1; i < edades.length; i++) {
        if (edades[i] > edadMayor) {
            edadMayor = edades[i];
            repeticiones = 0;
        }

        if (edades[i] === edadMayor) {
            repeticiones++;
        }
    }

    console.log(`Las edades generadas aleatoriamente son: ${edades}`);
    console.log(`La edad mayor es ${edadMayor} y se repite ${repeticiones} veces.`);
}

clasificarEdades();