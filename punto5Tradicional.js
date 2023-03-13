/*

5. PROBLEMA: Watto paga a su personal de ventas un salario de 
3500000 mensuales, más una comisión de 1500000 por cada 
licencia de software vendida menos el 5% de deducciones por 
impuestos sobre el total devengadp. Codifica un programa que 
calcule e imprima el salario mensual de un vendedor dado;

*/

function calcularSalarioMensualLicenciasVendidas(licenciasVendidas) {
    const salarioBase = 3500000;
    const comisionPorLicencia = 1500000;
    const deducciones = 0.05;

    const totalComision = licenciasVendidas * comisionPorLicencia;
    const salarioBruto = salarioBase + totalComision;
    const impuestos = salarioBruto * deducciones;
    const salarioNeto = salarioBruto - impuestos;

    return salarioNeto;
}

const licenciasVendidas = 3;
const salarioMensual = calcularSalarioMensualLicenciasVendidas(licenciasVendidas);
console.log(`El salario mensual del vendedor es ${salarioMensual} COP.`);
