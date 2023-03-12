/*

Grogu ha iniciado su entrenamiento Jedi y debe activar un 
software que permita clasificar su dieta:
alimento = { 
nombre, 
tipo (Puede ser vegetal, animal, insecto), 
nivel de energía aportado (números entre 1 00-500) 
} 
Cree un programa que permita recibir 300 alimentos y mediante una 
función primaria después de 5 segundos se pueda obtener solo los 
alimentos de tipo vegetal que entreguen más de 200 unidades de 
energía. Finalmente, una función callback debe permitir entregar la 
sumatoria de niveles de energía entregados por los alimentos vegetales 
consumidos en la dieta de Grogu.

*/

function crearAlimento(nombre, tipo, nivelEnergia) {
    return {
        nombre,
        tipo,
        nivelEnergia
    };
}

const alimentos = [];
for (let i = 0; i < 300; i++) {
    const nombre = `Alimento ${i + 1}`;
    const tipoAleatorio = Math.floor(Math.random() * 3);
    let tipo;
    switch (tipoAleatorio) {
        case 0:
            tipo = 'vegetal';
            break;
        case 1:
            tipo = 'animal';
            break;
        case 2:
            tipo = 'insecto';
            break;
    }
    const nivelEnergia = Math.floor(Math.random() * 401) + 100;
    const alimento = crearAlimento(nombre, tipo, nivelEnergia);
    alimentos.push(alimento);
}

function obtenerAlimentosVegetales(alimentos, callback) {
    const alimentosVegetales = alimentos.filter(alimento => alimento.tipo === 'vegetal' && alimento.nivelEnergia > 200);
    setTimeout(() => {
        callback(alimentosVegetales);
    }, 5000);
}

function sumarNivelesEnergia(alimentosVegetales) {
    const sumatoria = alimentosVegetales.reduce((acumulador, alimento) => acumulador + alimento.nivelEnergia, 0);
    console.log(`La sumatoria de niveles de energía de los alimentos vegetales es: ${sumatoria}`);
}

obtenerAlimentosVegetales(alimentos, sumarNivelesEnergia);
