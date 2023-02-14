// Verifica se o aluno esta aprovado, em recuperação ou reprovado

let nota1 = parseFloat(window.prompt('Digite a primeira nota:'))
let nota2 = parseFloat(window.prompt('Digite a segunda nota:'))

let media 

media = ((nota1 + nota2) / 2)

console.log('Primeira nota: '+ nota1);
console.log('Segunda nota: '+nota2);
console.log("Média: " + media)

if( media >=7 && media <=10 ){
    console.log("Aprovado")
}
else if( media >=6 && media <=6.9) {
    console.log("Recuperação")
}
else if(media <6.9){
    console.log("Reprovado")
}
else{
    console.log("Notas inválidas, insira notas válidas")
}