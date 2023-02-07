// a)
function olaUsuario(nome) {
    const frase = `Ola, ${nome}`
    return frase
}
// console.log(olaUsuario('bernardo'))

// b)
function tabuada(numero) {
    const primeiroNumero = numero * 1
    const segundoNumero = numero * 2
    const terceiroNumero = numero * 3
    const quartoNumero = numero * 4
    const quintoNumero = numero * 5
    const sextoNumero = numero * 6
    const setimoNumero = numero * 7
    const oitavoNumero = numero * 8
    const nonoNumero = numero * 9
    const decimoNumero = numero * 10

    const imprimir = `A tabuada do ${numero} eh: 
    ${primeiroNumero}
    ${segundoNumero}
    ${terceiroNumero}
    ${quartoNumero}
    ${quintoNumero}
    ${sextoNumero}
    ${setimoNumero}
    ${oitavoNumero}
    ${nonoNumero}
    ${decimoNumero}`

    return imprimir
}
// console.log(tabuada(2))
// c
const olaPessoa = function(nome) {
    const frase = `Ola, ${nome}`
    return frase
}
// console.log(olaPessoa('david'))

const tabuadaArrow = (numero) => {
    const primeiroNumero = numero * 1
    const segundoNumero = numero * 2
    const terceiroNumero = numero * 3
    const quartoNumero = numero * 4
    const quintoNumero = numero * 5
    const sextoNumero = numero * 6
    const setimoNumero = numero * 7
    const oitavoNumero = numero * 8
    const nonoNumero = numero * 9
    const decimoNumero = numero * 10

    const imprimir = `A tabuada do ${numero} eh: 
    ${primeiroNumero}
    ${segundoNumero}
    ${terceiroNumero}
    ${quartoNumero}
    ${quintoNumero}
    ${sextoNumero}
    ${setimoNumero}
    ${oitavoNumero}
    ${nonoNumero}
    ${decimoNumero}`

    return imprimir
}
// console.log(tabuadaArrow(5))
