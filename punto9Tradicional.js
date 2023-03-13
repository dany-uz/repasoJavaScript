/* 

PROBLEMA: Yoda el maestro jedi, necesita asignar a sus 
aprendices Padawans 2 actividades dependiendo de la edad de 
ellos:
• Manejo de la fuerza: Si el aprendiz es menor de 15 años
• Manejo del sable de luz: Si el aprendiz es mayor de 15 años
Inicialmente, se debe programar una función que asocie los datos de: 
{nombre, planeta, edad y estatura} de 1 Padawan a un objeto y una vez 
este objeto sea creado se debe llamar a una función secundaria que 
clasifique y muestre en consola la actividad asignada al Padawan 

*/

function crearPadawan(nombre, planeta, edad, estatura) {
  return {
    nombre: nombre,
    planeta: planeta,
    edad: edad,
    estatura: estatura
  };
};

function clasificarActividad(padawan) {
  if (padawan.edad < 15) {
    console.log(padawan.nombre + ' debe practicar el manejo de la fuerza');
  } else {
    console.log(padawan.nombre + ' debe practicar el manejo del sable de luz');
  }
};

const padawan1 = crearPadawan('Luke Skywalker', 'Tatooine', 19, 1.72);
clasificarActividad(padawan1);

const padawan2 = crearPadawan('Ahsoka Tano', 'Shili', 14, 1.63);
clasificarActividad(padawan2);