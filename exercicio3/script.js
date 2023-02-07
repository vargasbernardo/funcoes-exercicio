const numeroDoUsuario1 = Number(prompt('Insira um valor: '))
const numeroDoUsuario2 = Number(prompt('Insira outro valor: '))
// console.log(numeroDoUsuario1, numeroDoUsuario2)



function soma(num1, num2) {
    const somar = num1 + num2
    return somar

}
console.log(soma(numeroDoUsuario1, numeroDoUsuario2))

function subtracao(num1, num2) {
    const subtrair = num1 - num2
    return subtrair

}
console.log(subtracao(numeroDoUsuario1, numeroDoUsuario2))

function multiplicacao(num1, num2) {
    const multiplicar = num1 * num2
    return multiplicar

}
console.log(multiplicacao(numeroDoUsuario1, numeroDoUsuario2))

function divisao(num1, num2) {
    const dividir = num1 / num2
    return dividir

}
console.log(divisao(numeroDoUsuario1, numeroDoUsuario2))

