/*

1.PROBLEMA: Yoda el maestro jedi, necesita enseñar a sus aprendices 
Padawan a calcular la distancia a la que cualquiera de los planetas de la 
ruta N-14 pertenecientes a la ruta comercial de la federación 
intergaláctica, se encuentra del planeta NABOO. 
Para calcular dicha distancia se debe:
• Recibir las coordenadas X,Y del planeta en UA
• Establecer la distancia como:
√(𝑥2 − 𝑥1)^2 + (𝑦2 − 𝑦1)^2

*/

// Formula que vamos a usar: d = sqrt((x2 - x1)^2 + (y2 - y1)^2)

function calcularDistancia(x1, y1, x2, y2) {
    // ---------------- Forma 1 ---------------- //
    // let restaX = x2 - x1;
    // let restaY = y2 - y1;

    // let cuadradoX = Math.pow(restaX, 2);
    // let cuadradoY = Math.pow(restaY, 2);

    // let sumaCuadrados = cuadradoX + cuadradoY;

    // let distancia = Math.sqrt(sumaCuadrados);

    // distancia = distancia.toFixed(2);
    // return console.log("La distancia entre los puntos es: " + distancia + " UA");

    // ---------------- Forma 2 ---------------- //
    return console.log("La distancia entre los puntos es: " + (Math.sqrt(Math.pow(x2 - x1, 2)+Math.pow(y2 - y1, 2))).toFixed(2) + " UA")



}

calcularDistancia(5,4,3,2); // 