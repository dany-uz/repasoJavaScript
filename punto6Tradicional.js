/*

PROBLEMA: Para habilitar la guerra de los clones es necesario 
clasificar la edad de estos, elabore un programa que permita 
recibir 20 edades y 20 códigos diferentes generadas 
aleatoriamente y determine cual de esas edades es la mayor. Si 
se repite la misma edad se debe contar el número de 
repeticiones

*/

function clasificarEdades() {
    var edades = [];
    var codigos = [];

    for (var i = 0; i < 20; i++) {
        var edad = Math.floor(Math.random() * 100) + 1;
        edades.push(edad);

        var codigo = Math.floor(Math.random() * 20) + 1;
        codigos.push(codigo);
    }

    var edadMayor = edades[0];
    var repeticiones = 0;

    for (var i = 1; i < edades.length; i++) {
        if (edades[i] > edadMayor) {
            edadMayor = edades[i];
            repeticiones = 0;
        }

        if (edades[i] === edadMayor) {
            repeticiones++;
        }
    }

    console.log("Las edades generadas aleatoriamente son: " + edades);
    console.log("La edad mayor es " + edadMayor + " y se repite " + repeticiones + " veces.");
}

clasificarEdades();