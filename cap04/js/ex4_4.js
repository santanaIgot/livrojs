const frm = document.querySelector("form")
const resp = document.querySelector("h3")


console.log(frm);

console.log(resp);

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const horaBrasil = Number(frm.inHoraBrasil.value) //obtém a hora digitado no form 
    let horaFranca = horaBrasil + 5;

    if(horaFranca > 24){ //se passar das 24 horas 
        horaFranca -= 24; //subtrai 24
    }

    resp.innerText = ` Hora na frança ${horaFranca.toFixed(2)}`
})