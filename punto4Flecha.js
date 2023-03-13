/*

4. PROBLEMA: QUI-GON JINN está encargado de revisar n sables 
de luz y contabilizar la cantidad de energía de sables que tienen 
negativa en Joules.
 
Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables 
defectuosos con energía negativa fue de 2 sables.

*/

function contarSablesNegativos(sables) {
    let cantidad = 0;
    for (let i = 0; i < sables.length; i++) {
        if (sables[i] < 0) {
            cantidad++;
        }
    }
    return cantidad;
}

const sables = [2, 4, -8, 5, -6];
const cantidadSablesNegativos = contarSablesNegativos(sables);
console.log(`La cantidad de sables defectuosos con energía negativa es ${cantidadSablesNegativos}.`);
