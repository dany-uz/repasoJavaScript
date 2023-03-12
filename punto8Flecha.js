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

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomPlanets = (n) => {
    const planets = [];
    for (let i = 0; i < n; i++) {
        const planet = {
            nombrePlaneta: `Planeta ${i + 1}`,
            latitud: getRandomNumber(-90, 90),
            longitud: getRandomNumber(-180, 180),
            nivelOxigeno: getRandomNumber(-50, 100),
            volumenAgua: getRandomNumber(0, 1000),
        };
        planets.push(planet);
    }
    return planets;
};

const sumTotalWater = (planets) => {
    const totalWater = planets.reduce((accumulator, planet) => {
        return accumulator + planet.volumenAgua;
    }, 0);
    console.log(`La cantidad total de agua de los planetas es: ${totalWater}`);
};

const sumAndMultiplyTotalOxygen = (planets) => {
    const totalOxygen = planets.reduce((accumulator, planet) => {
        return accumulator + planet.nivelOxigeno;
    }, 0);
    const result = totalOxygen * 100;
    console.log(`El total de oxígeno de los planetas multiplicado por 100 es: ${result}`);
};

const findPlanetWithNegativeOxygen = (planets) => {
    const planet = planets.find((planet) => planet.nivelOxigeno < 0);
    if (planet) {
        console.log(`El planeta ${planet.nombrePlaneta} tiene nivel de oxígeno negativo`);
        console.log(planet);
    } else {
        console.log('Ningún planeta tiene nivel de oxígeno negativo');
    }
};

const findPlanetWithoutWater = (planets) => {
    const planet = planets.find((planet) => planet.volumenAgua === 0);
    if (planet) {
        console.log(`El planeta ${planet.nombrePlaneta} no tiene agua`);
        console.log(planet);
    } else {
        console.log('Todos los planetas tienen agua');
    }
};

const planets = generateRandomPlanets(15);

sumTotalWater(planets);
sumAndMultiplyTotalOxygen(planets);
findPlanetWithNegativeOxygen(planets);
findPlanetWithoutWater(planets);
