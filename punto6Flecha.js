/*

PROBLEMA: Para habilitar la guerra de los clones es necesario 
clasificar la edad de estos, elabore un programa que permita 
recibir 20 edades y 20 códigos diferentes generadas 
aleatoriamente y determine cual de esas edades es la mayor. Si 
se repite la misma edad se debe contar el número de 
repeticiones

*/

const clasificarEdades = () => {
    const edades = [];
    const codigos = [];
    const numEdades = 20;

    for (let i = 0; i < numEdades; i++) {
        edades.push(Math.floor(Math.random() * 100));
        codigos.push(Math.floor(Math.random() * 20) + 1);
    }

    let mayorEdad = edades[0];
    let numRepeticiones = 1;

    edades.forEach((edad, index) => {
        if (edad > mayorEdad) {
            mayorEdad = edad;
            numRepeticiones = 1;
        } else if (edad === mayorEdad && index > 0) {
            numRepeticiones++;
        }
    });

    console.log(`La edad mayor es ${mayorEdad} y se repite ${numRepeticiones} veces.`);
    console.log("Edades: " + edades);
    console.log("Códigos: " + codigos);
}

clasificarEdades();