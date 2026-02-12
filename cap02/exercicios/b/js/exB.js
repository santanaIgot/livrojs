
const form = document.querySelector('form')
const resp1 = document.querySelector('#inShow')

console.log(form);


form.addEventListener("submit", (e) => {


    e.preventDefault()


    const isValueUse = Number(form.inValue.value);
    const isTimeUse = Number(form.inTime.value);

    if(isTimeUse > 15){
        const total = isValueUse + isValueUse;
        resp1.innerText = `O valor a pagar é ${total}`
    }
    
})