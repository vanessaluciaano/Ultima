// Verifica se o aluno esta aprovado, em recuperação ou reprovado

let nota1 = 60
let nota2 = 5
let media 

media = ((nota1 + nota2) / 2)

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