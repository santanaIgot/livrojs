
const frm = document.querySelector('form')
const respErros = document.querySelector('#outErros')
const respChances = document.querySelector('#outChances')
const respDicas = document.querySelector('#outDicas')


const erros = []; // vetor de escopo global de numeros já apostados
const sorteados = Math.floor(Math.random() * 100) + 1;// num aleatório entre 1 e 100 
const chances = 6;


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const number = Number(frm.inNumber.value); //obtém valor digitado do formulário 
    console.log(number);
    
    if(sorteados == number){// condição caso de certo
        respDicas.innerText = `Parabéns !! Número sorteado ${sorteados}`
        frm.btSubmit.disabled = true;
        frm.btNovo.className = "exibe"
    }else{
        if(erros.includes(number)){
            alert(`Você já apostou o numero ${number}. Tente outro`)
        }else{
            erros.push(number)
            const numErros = erros.length;
            const numChances = chances - numErros // calcula numero de chances 
            //exibe numero de erros, conteudo do vetor e numero de chances
            respErros.innerText = `${numErros} (${erros.join(',')})`
            respChances.innerText = numChances

            if(numChances == 0){
                alert('suas chances acabaram....')
                frm.btSubmit.disabled = true;
                frm.btNovo.className = "exibe";
                respDicas.innerText = `Game over!!! número sorteado ${sorteados}`
            }else{
                //usa operador ternario para mensagem da dica 
                const dica = number < sorteados ? "maior" : "menor";
                respDicas.innerText = `Dica: Tente um numero ${dica} que ${number}`
            }
        }
    }

    frm.inNumber.value = "";
    frm.inNumber.focus();
})



frm.btNovo.addEventListener("click", ()=> {
    location.reload()
})
