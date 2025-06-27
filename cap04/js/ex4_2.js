const frm = document.querySelector("form");
console.log(frm);

const masc = document.querySelector("#inMasculino")
console.log(masc);

const resp = document.querySelector("h3")
frm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const masculino = frm.inMasculino.value;
    const feminino = frm.inFeminino.value;
    const altura = frm.inAltura.value;
    const name = frm.inName.value;
    
    console.log(masculino);
    console.log(feminino);
    console.log(altura);
    
    if(masculino){
        var pesoIdeal = (altura * altura) * 22;
    }else if(feminino){
        var pesoIdeal = (altura * altura) * 21;
    }

    resp.innerText = `O peso ideal para ${name} é ${pesoIdeal.toFixed(3)}`
})