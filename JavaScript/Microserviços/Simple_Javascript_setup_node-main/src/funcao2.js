
function idadeMaior (numero) {
  
    
    if (numero<50) {
      throw new Error('Idade fora dos padrões de aceitação 50')
    }

    else { console.log("A idade " + numero + " é válida!"); }
  
    // retorna 
    return numero;
  }
  
  try {  console.log('Idade valida maior que 50 anos.\n') } 
  
  catch (err) { console.log(err.message); }
    // valor com um padrão não aceito
  

  module.exports = {idadeMaior}