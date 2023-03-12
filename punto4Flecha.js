/*

4. PROBLEMA: QUI-GON JINN está encargado de revisar n sables 
de luz y contabilizar la cantidad de energía de sables que tienen 
negativa en Joules.
 
Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables 
defectuosos con energía negativa fue de 2 sables.

*/

const contarSablesDefectuosos = (sables) => {
    return sables.reduce((contador, sable) => {
        if (sable < 0) {
            return contador + 1;
        } else {
            return contador;
        }
    }, 0);
}

const sables = [2, 4, -8, 5, -6];
const cantidadDefectuosos = contarSablesDefectuosos(sables);
console.log(`La cantidad de sables defectuosos con energía negativa es: ${cantidadDefectuosos}`);