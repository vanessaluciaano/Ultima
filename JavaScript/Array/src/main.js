
//Array de 10 elementos usando while
console.log('Exibindo uma array de 10 elementos usando o WHILE:')
const elementos = ['elemento1', 'elemento2', 'elemento3', 'elemento4', 'elemento5', 'elemento6', 'elemento7', 'elemento8', 'elemento9', 'elemento10']
let contador = 0

while (contador < elementos.length) {
    console.log(elementos[contador])
    contador ++
}

console.log('')

//Array de 10 elementos usando do-while
console.log('Exibindo uma array de 10 elementos usando o DO-WHILE:')
const elementosDW = ['elemento1', 'elemento2', 'elemento3', 'elemento4', 'elemento5', 'elemento6', 'elemento7', 'elemento8', 'elemento9', 'elemento10']
let contadorDW = 0

do {
    console.log(elementosDW[contadorDW])
    contadorDW++
} while (contadorDW < elementosDW.length);

console.log('')

//Array de 10 elementos usando for
console.log('Exibindo uma array de 10 elementos usando o FOR:')
const elementosF = ['elemento1', 'elemento2', 'elemento3', 'elemento4', 'elemento5', 'elemento6', 'elemento7', 'elemento8', 'elemento9', 'elemento10']

for (let contadorF = 0; contadorF < elementosF.length; contadorF++) {
   
    console.log(elementosF[contadorF])
    
}

console.log('')

//Array de 10 elementos usando for each
console.log('Exibindo uma array de 10 elementos usando o FOR EACH:')
const elementosFE = ['elemento1', 'elemento2', 'elemento3', 'elemento4', 'elemento5', 'elemento6', 'elemento7', 'elemento8', 'elemento9', 'elemento10']

elementosFE.forEach(element => {
    console.log(element)
});