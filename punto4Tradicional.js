/*

4. PROBLEMA: QUI-GON JINN está encargado de revisar n sables 
de luz y contabilizar la cantidad de energía de sables que tienen 
negativa en Joules.
 
Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables 
defectuosos con energía negativa fue de 2 sables.

*/

function contarSablesDefectuosos(sables) {
    let contador = 0;
    for (let i = 0; i < sables.length; i++) {
        if (sables[i] < 0) {
            contador++;
        }
    }
    return contador;
}

const sables = [2, 4, -8, 5, -6];
const cantidadDefectuosos = contarSablesDefectuosos(sables);
console.log(`La cantidad de sables defectuosos con energía negativa es: ${cantidadDefectuosos}`);