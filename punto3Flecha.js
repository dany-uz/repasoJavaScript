/*

3. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello 
hay que hacer un monitoreo constante, Cree una función de flecha que 
permita calcular la temperatura media de la luna a partir de la 
temperatura máxima y mínima de cada día

*/


const calcularTemperaturaMedia = (tempMax, tempMin) => {
    return (tempMax + tempMin) / 2;
};

const tempMaxDia1 = 25;
const tempMinDia1 = 15;

const temperaturaMediaDia1 = calcularTemperaturaMedia(tempMaxDia1, tempMinDia1);
console.log(`La temperatura media del día 1 es ${temperaturaMediaDia1} grados.`);

