// inclusão e exclusão de intens 



//push() - adiciona um elemento ao final do vetor 
//unshift() - adiciona um elemento ao incio do vetor e deslocas os elementos existentes a uma posição abaixo
//pop() - remove o ultimo elemento do vetor 
//shift() - remove o primeiro elemento do vetor e desloca os elementos existentes a uma posição acima 




const cidades = []
console.log(cidades);

cidades.push("SP", "BH", "BA")
console.log(cidades);

cidades.unshift("AL")
console.log(cidades);

cidades.pop() // remove ultima cidade do vetor 
console.log(cidades);

cidades.shift() // remove a primeira cidade do vetor 
console.log(cidades);

//EXISTEM OUTROS MÉTODOS QUE PODEM SER USADOS PARA MANIPULAR OS ELEMENTOS DE UM VETOR NO JAVASCRIPT


// splice() - na ideia de emendar pode possuir diversos parametros e ser utilizado para alterar, inserir ou remover elementos do array 
// slice() - na ideia de fatiar obtém uma fatia de um vetor. Ele contém dois parâmetros que são posição inicial e final 


const letras = ['A', 'B', 'C', 'D'] // declara o conteúdo inicial do vetor 

const letras2 = letras.slice(-2) // obtém as duas ultimas letras 
const letras3 = letras.slice(0, -1 ) // obtém do inicio ate o final exceto a ultima letra 

console.log('letras 2 ultimas duas letras-', letras2);
console.log('letras 3 inicio ate o final-', letras3);


const retira = letras.splice(2,1) // remove elementos a partir da posição 1 e 2 
console.log(letras);
console.log(retira);



// Para percorrer elementos de um vetor, a linguagem javascript dispõe também do loop for .. of e do método foreach()
// Eles são equivalentes ao for tradicional, com uma sintaxe mais enxuta
for (const cidade of cidades){
    console.log(cidade);
}