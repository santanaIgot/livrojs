// consiste em realizar uma atribuição para uma variável com base em uma análise de uma condição 
// EXEMPLO 

const categoria = idade >= 18 ? "Adulto" : "juvenil";

// CONDIÇÃO DEVE SER INSERIDA SÓ APOS O SINAL DE '='
// o primeiro valor após a interrogação é atribuido caso a condição seja verdadeira. E o segundo após os ":" é atribuido caso a condição seja falsa 

// isto é basicamente isso, abaixo 

if(idade >= 18){
    categoria = "adulto"
}else{
    categoria = "juvenil"
}
