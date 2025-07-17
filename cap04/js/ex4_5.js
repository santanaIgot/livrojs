

const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e)=>{
  e.preventDefault()
  
  
  const value = Number(frm.inNumero.value)
  console.log(value);
  const calc = Math.sqrt(value);// calculo da raiz quadrada 
  console.log(calc);
  
  if(Number.isInteger(calc)){
    resp.innerText = `A raiz quadrade ${value} é ${calc}`
  }else{
    resp.innerText = `Não existe raiz exata para o numero ${value}`
  }
})