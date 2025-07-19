const frm = document.querySelector('form');
const resp1 = document.querySelector('#resp1');
console.log(resp1);
const resp2 = document.querySelector('#resp2');
const resp3 = document.querySelector('#resp3');


frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const saque = Number(frm.inSaque.value)
    console.log('Valor do saque',saque);

    // apartir deste operador % podemos verificar se o saque pode ser realizado com estas notas dísponiveis 
    //se o valor solicitado não for multiplo de 10, o resto da divisão do valor por 10 vai produzir um valor diferente de zero 
    // e a mensagem de advertência será exibida 
    if(saque % 10 != 0){
        alert("Valor inválido para as notas dísponiveis (R$ 10, 50, 100)")
        frm.inSaque.focus()
        return
    }
    
    const notasCem = Math.floor(saque / 100)
    let resto = notasCem % 100;

    const notasCinquenta = Math.floor(saque / 50)
    console.log(notasCinquenta);
    
    resto = notasCinquenta % 50

    const notasDez = Math.floor(saque / 10)
    resto = notasDez % 10 

    if(notasCem > 0){
        resp1.innerText = `Notas de R$100 : ${notasCem}`
    }
    if( notasCinquenta > 0){
        resp2.innerText = `Notas de R$50 : ${notasCinquenta}`
    }
    if(notasDez > 0){
        resp3.innerText = `Notas de R$10 : ${notasDez}`
    }

    
})