let planoX = [5, 3];
let planoY = [4, 2];

function calcularDistancia(planoX, planoY) {
    let distancia = Math.sqrt(Math.pow(planoX[1] - planoX[0], 2) + Math.pow(planoY[1] - planoY[0], 2));
    return console.log("La distancia entre los puntos es: " + distancia + " UA");
}

calcularDistancia(planoX, planoY)