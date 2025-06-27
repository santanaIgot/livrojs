// cria referência ao form e elementos de resposta do programa 

const frm = document.querySelector("form")
console.log(frm);

const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")


//cria um ouvinte do elemento, acionado quando o botão submit for clicado

frm.addEventListener("submit", (e)=>{
    console.log(e);
    e.preventDefault();//evita o envio do form

    const nome = frm.inNome.value 
    console.log(nome);

    const nota1 = frm.inNota1.value //obtem valor do input 
    const nota2 = frm.inNota2.value // obtem valor do input

    const media = (nota1 + nota2) / 2; //calcula media das notas


    resp1.innerText = `media das notas ${media.toFixed(2)}`

    //cria condições 
    if(media >= 7){
        //altera o texto e estilo do elemento resp2 
        resp2.innerText = `Parabéns ${nome}: você foi aprovado(a)`
        resp2.style.color = "blue"
    }else if(media >= 4){
        resp2.innerText = `Ops ${nome}: você esta de exame`
        resp2.style.color = "yellow"
    }else{
         resp2.innerText = `Ops ${nome}: você foi reprovado(a)`
         resp2.style.color = "red"
    }   
    
})