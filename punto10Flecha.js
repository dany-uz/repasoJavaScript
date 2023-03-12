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

const crearAlimento = (nombre, tipo, nivelEnergia) => ({
    nombre,
    tipo,
    nivelEnergia
});

const alimentos = Array.from({ length: 300 }, () => {
    const nombre = `Alimento ${Math.floor(Math.random() * 100)}`;
    const tipo = ['vegetal', 'animal', 'insecto'][Math.floor(Math.random() * 3)];
    const nivelEnergia = Math.floor(Math.random() * 401) + 100;
    return crearAlimento(nombre, tipo, nivelEnergia);
});

const filtrarAlimentosVegetales = (alimentos) => {
    const alimentosVegetales = alimentos.filter((alimento) => alimento.tipo === 'vegetal');
    const alimentosFiltrados = alimentosVegetales.filter((alimento) => alimento.nivelEnergia > 200);
    return alimentosFiltrados;
};

const sumarNivelEnergiaVegetales = (alimentosFiltrados) => {
    const sumaNivelEnergia = alimentosFiltrados.reduce((acumulador, alimento) => acumulador + alimento.nivelEnergia, 0);
    console.log(`La sumatoria de niveles de energía de los alimentos vegetales filtrados es: ${sumaNivelEnergia}`);
};

setTimeout(() => {
    const alimentosFiltrados = filtrarAlimentosVegetales(alimentos);
    console.log(alimentosFiltrados);
    sumarNivelEnergiaVegetales(alimentosFiltrados);
}, 5000);
