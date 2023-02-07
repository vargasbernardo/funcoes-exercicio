// a)
function soma(primeiroNumero, segundoNumero) {
    const somar = primeiroNumero + segundoNumero
    return somar
}
// console.log(soma(33, 33))
// console.log(soma(98, 2))
// console.log(soma(130, 44))
// b)
function comparar(numeroUm, numeroDois) {
    const comparacao = numeroUm >= numeroDois
    return comparacao
}
// console.log(comparar(3, 2))
// console.log(comparar(100, 200))
// console.log(comparar(1, 1))
// c)
function paridade(num) {
    const ehPar = num % 2 === 0
    return ehPar
}
// console.log(paridade(10))
// console.log(paridade(9))
// console.log(paridade(0))
// d)
function salarioBruto(num) {
    const salarioLiquido = num - (num * 0.1)
    return salarioLiquido
}
// console.log(salarioBruto(5674))
// console.log(salarioBruto(25987))
// console.log(salarioBruto(1000))