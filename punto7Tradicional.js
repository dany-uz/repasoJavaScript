/*

PROBLEMA: se necesita clasificar 10 números enteros positivos 
o negativos que contienen códigos de naves de guerra. Diseño 
un algoritmo que permita recibir dichos 50 números e indicar 
¿Cuál fue el más cercano a cero? (Si el número es negativo se 
debe mostrar el resultado del valor absoluto)

*/

function encontrarMasCercanoACero() {
    var numeros = [];
    var numNumeros = 50;

    for (var i = 0; i < numNumeros; i++) {
        numeros.push(Math.floor(Math.random() * 201) - 100);
    }

    var masCercanoACero = numeros[0];

    numeros.forEach(function (numero) {
        if (Math.abs(numero) < Math.abs(masCercanoACero)) {
            masCercanoACero = numero;
        }
    });

    console.log("El número más cercano a cero es " + masCercanoACero + ".");
    console.log("Números: " + numeros);
}

encontrarMasCercanoACero();