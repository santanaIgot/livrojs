const frm = document.querySelector("form")
const resp = document.querySelector("pre")




frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    let numDivisores = 0 //declara e inicializa o contador 
    
    for(let i = 1; i <= num; i++){
        if (num % i === 0) {
            numDivisores++ //incrementa o contador
        }
    }
    if(numDivisores == 2){
        resp.innerText = `O número ${num} é primo`
    }else{
        resp.innerText = `O número ${num} não é primo`
    }
})
