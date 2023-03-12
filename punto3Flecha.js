/*

3. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello 
hay que hacer un monitoreo constante, Cree una función de flecha que 
permita calcular la temperatura media de la luna a partir de la 
temperatura máxima y mínima de cada día

*/

const calcularTemperaturaMedia = (tempMax, tempMin) => {
    const temperaturaMedia = (tempMax + tempMin) / 2;
    return temperaturaMedia;
};

const tempMediaDia1 = calcularTemperaturaMedia(20, 10);
const tempMediaDia2 = calcularTemperaturaMedia(25, 15);