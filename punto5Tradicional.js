/*

5. PROBLEMA: Watto paga a su personal de ventas un salario de 
3500000 mensuales, más una comisión de 1500000 por cada 
licencia de software vendida menos el 5% de deducciones por 
impuestos sobre el total devengadp. Codifica un programa que 
calcule e imprima el salario mensual de un vendedor dado;

*/

const calcularSalario = (licenciasVendidas) => {
    const salarioBase = 3500000;
    const comisionPorLicencia = 1500000;
    const porcentajeDeducciones = 0.05;
    const totalComision = comisionPorLicencia * licenciasVendidas;
    const totalDevengado = salarioBase + totalComision;
    const deducciones = totalDevengado * porcentajeDeducciones;
    const salarioMensual = totalDevengado - deducciones;
    return salarioMensual;
}

const licenciasVendidas = 5;
const salarioMensual = calcularSalario(licenciasVendidas);
console.log(`El salario mensual del vendedor es: ${salarioMensual}`);