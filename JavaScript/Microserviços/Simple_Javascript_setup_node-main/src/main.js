var funcionamento = require('./funcao')
var func2 = require('./funcao2')
var readlineSync = require('readline-sync');

console.log("programa para verificar idade valida de trabalho\n")
console.log("================================================\n")

var idade = readlineSync.question("Digite sua idade: ");

funcionamento.idadeValida(idade)


console.log("programa para verificar idade é maior que 50\n")
console.log("============================================\n")

func2.idadeMaior(idade)