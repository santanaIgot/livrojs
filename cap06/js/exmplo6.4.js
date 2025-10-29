
/*
    LOCALIZAR CONTEUDO 


    indexOf() - a busca ocorre a partir do inicio do vetor 
    lastIndexOf() - a busca é do final até o início.
    Para ambos os casos. Caso o conteudo exista no vetor o número do índice da primeira ocorrência desse conteúdo é retornado 
    includes() - o método includes, por sua vez, retorna verdadeiro ou falso, de acordo com a existência ou não do conteúdo no vetor.

*/



const idades = [ 18 , 19 , 20 , 21, 22, 23]

const localizeIdade20 = idades.includes(20)
console.log(localizeIdade20);

console.log(idades.indexOf(23)); // retorna a posição do array em que a idade esta no caso é => 5
console.log(idades.lastIndexOf(18));

