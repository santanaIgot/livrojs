const frm = document.querySelector("form")
const resp1 = document.querySelector('#inDesconto')
const resp2 = document.querySelector('#inPromocao')

console.log(frm);


frm.addEventListener("submit", (e) => {

    e.preventDefault();

    const price = frm.inPreco.value;
    const product = frm.inProduct.value;

    console.log(product);
    console.log(price);


    const desconto = price * (0,15 / 100)

    console.log(typeof(desconto)); /// é um number 


    resp1.innerText = `Promoção de : ${product}`
    resp2.innerText = `Leve 2 por apenas R$: ${desconto}`
    
    
})