


const idades = [12, 13, 25, 22, 24, 45, 67, 98]

let maiores = false;
for(const idade of idades){
    if(idade < 12){
     console.log(idade);
     maiores = true
    }
}

if(!maiores){
    console.log("Não há nenhuma idade menor que 12");
}

//utilizamos uma variavel de controle "maiores" para receber um valor inicial, caso a condição dentro do laço seja verdadeira 
// o valor da variavel é modificado , depois do laço se a condição da variavel não for verdadeira, é executada a outra condição alegando que não tem numero maior que 12