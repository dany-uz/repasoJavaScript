// Version extensa
// let distancia = (x1, y1, x2, y2) => {
//     return console.log("La distancia entre los puntos es: " + (Math.sqrt(Math.pow(x2 - x1, 2)+Math.pow(y2 - y1, 2))).toFixed(2) + " UA")
// }

// Lo hacemos en una sola linea
let distancia = (x1, y1, x2, y2) => console.log("La distancia entre los puntos es: " + (Math.sqrt(Math.pow(x2 - x1, 2)+Math.pow(y2 - y1, 2))).toFixed(2) + " UA");

distancia(5,4,3,2);