const numeros = [ 4.5, 12.8, 35.1, 69.7, 120.4]

//Quadrado
console.log('Exibindo o quadrado dos numeros da array:')

numeros.forEach(numero =>{
    const quadrado = Math.pow(numero, 2);
    console.log(`O quadrado de ${numero} é ${quadrado}`)
})

console.log('')
// Raiz quadrada
console.log('Exibindo a raiz quadrada dos numeros da array:')
numeros.forEach(numero => {
    const raizQuadrada = Math.sqrt(numero);
    console.log(`A raiz quadrada de ${numero} é ${raizQuadrada}`)
})

console.log('')
// Apenas a parte inteira
console.log('Exibindo apenas a parte inteira dos numeros da array:')
numeros.forEach(numero => {
    const parteInteira = Math.trunc(numero);
    console.log(`A parte inteira de ${numero} é ${parteInteira}`)
})

console.log('')
// O número arrendondado para baixo
console.log('Exibindo o número arredondado para baixo dos numeros da array:')
numeros.forEach(numero => {
    const arredondandoB = Math.floor(numero)
    console.log(`O número ${numero} arrendondado para baixo é ${arredondandoB}`)
})

console.log('')
// O número arredondado para cima
console.log('Exibindo o número arredondado para cima dos numeros da array:')
numeros.forEach(numero => {
    const arredondandoC = Math.ceil(numero)
    console.log(`O número ${numero} arredondado para cima é ${arredondandoC}`)
})
