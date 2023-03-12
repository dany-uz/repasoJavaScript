/*

PROBLEMA: Para descubrir la ubicación de un listado con los 
últimos guerreros jedi de la galaxia se debe recibir un listado de 
15 mapas los cuales tienen la siguiente información
{nombrePlaneta, latitud, longitud, nivel de oxígeno en el 
planeta, volumen total del agua del planeta}. Diseñe una 
solución para:
• Sumar la cantidad total de agua de los 15 planetas
• Sumar y multiplicar por 100 el total de oxigeno de los 15 planetas
• Encontrar si alguno de los 15 planetas tiene un nivel de oxigeno 
negativo y de ser así mostrar la información general de este
• Encontrar si alguno de los 15 planetas no tiene agua y mostrar la 
información general de este

*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePlanet() {
    const planet = {};
    planet.nombrePlaneta = `Planeta ${getRandomNumber(1, 100)}`;
    planet.latitud = getRandomNumber(-90, 90);
    planet.longitud = getRandomNumber(-180, 180);
    planet.nivelOxigeno = getRandomNumber(-100, 100);
    planet.volumenAgua = getRandomNumber(0, 100);
    return planet;
}

function sumarAgua(total, planet) {
    return total + planet.volumenAgua;
}

function sumarYMultiplicarOxigeno(total, planet) {
    return total + planet.nivelOxigeno * 100;
}

function encontrarNivelOxigenoNegativo(planeta) {
    if (planeta.nivelOxigeno < 0) {
        console.log(`El planeta ${planeta.nombrePlaneta} tiene un nivel de oxígeno negativo`);
    }
}

function encontrarPlanetaSinAgua(planeta) {
    if (planeta.volumenAgua === 0) {
        console.log(`El planeta ${planeta.nombrePlaneta} no tiene agua`);
    }
}

const planetas = Array.from({ length: 15 }, generatePlanet);

const totalAgua = planetas.reduce(sumarAgua, 0);
console.log(`La cantidad total de agua de los 15 planetas es ${totalAgua}`);

const totalOxigeno = planetas.reduce(sumarYMultiplicarOxigeno, 0);
console.log(`El total de oxígeno de los 15 planetas multiplicado por 100 es ${totalOxigeno}`);

planetas.forEach(encontrarNivelOxigenoNegativo);

planetas.forEach(encontrarPlanetaSinAgua);
