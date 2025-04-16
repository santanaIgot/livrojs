const form = document.querySelector("form")
const resp = document.querySelector("h3")


//criando um evento ouvinte 

form.addEventListener("submit", (e)=>{
    const nome = form.inNome.value; //obtém i nome digitado no form 
    resp.innerText = `Olá ${nome}`

    e.preventDefault();
})