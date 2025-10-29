// inclusão e exclusão de intens

//push() - adiciona um elemento ao final do vetor
//unshift() - adiciona um elemento ao incio do vetor e deslocas os elementos existentes a uma posição abaixo
//pop() - remove o ultimo elemento do vetor
//shift() - remove o primeiro elemento do vetor e desloca os elementos existentes a uma posição acima

const cidades = [];
console.log(cidades);

cidades.push("SP", "BH", "BA");
console.log(cidades);

cidades.unshift("AL");
console.log(cidades);

cidades.pop(); // remove ultima cidade do vetor
console.log(cidades);

cidades.shift(); // remove a primeira cidade do vetor
console.log(cidades);

//EXISTEM OUTROS MÉTODOS QUE PODEM SER USADOS PARA MANIPULAR OS ELEMENTOS DE UM VETOR NO JAVASCRIPT

// splice() - na ideia de emendar pode possuir diversos parametros e ser utilizado para alterar, inserir ou remover elementos do array
// slice() - na ideia de fatiar obtém uma fatia de um vetor. Ele contém dois parâmetros que são posição inicial e final

const letras = ["A", "B", "C", "D"]; // declara o conteúdo inicial do vetor

const letras2 = letras.slice(-2); // obtém as duas ultimas letras
const letras3 = letras.slice(0, -1); // obtém do inicio ate o final exceto a ultima letra

console.log("letras 2 ultimas duas letras-", letras2);
console.log("letras 3 inicio ate o final-", letras3);

const retira = letras.splice(2, 1); // remove elementos a partir da posição 1 e 2
console.log(letras);
console.log(retira);

// Para percorrer elementos de um vetor, a linguagem javascript dispõe também do loop for .. of e do método foreach()
// Eles são equivalentes ao for tradicional, com uma sintaxe mais enxuta
for (const cidade of cidades) {
  console.log(cidade);
}

// O método foreach é mais amplo e pode chamar uma função para manipular cada elemento do vetor. Uma forma simples de utiliza-lo a seguir é ;
cidades.forEach((cidade, i) => {
  console.log(`${i + 1} Cidade:${cidade}`);
});
//Observe que no forEach(), podems obter o conteúdo (cidade) e o índice (i) de cada elemento do vetor que estamos percorrendo - sendo
// que o índice (i) é opcional.

//algumas operações ficam mais simples se executadas a partir do forEach(), como a soma dos elementos que compõe o vetor. Observe o código a seguir
const numeros = [5, 10, 15, 20];
let soma = 0; // ---------------- ACUMULADOR
numeros.forEach((num) => (soma += num));
console.log(`SOma dos numeros :${soma}`);
// cada elemento do vetor numeros é recebido como num e então o acumulador soma é incrementado.

const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");
//--------------------------------------------------------------------------------

const pacientes = []; // vetor global

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inPaciente.value;

  console.log(nome);

  pacientes.push(nome);
  let lista = "";

  // for tradicional (inicia em 0 , enquanto que menor do tamanho do array)
  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1} ${pacientes[0]}\n`;

    console.log(lista);
  }

  respLista.innerText = lista;
  frm.inPaciente.value = "";
  frm.inPaciente.focus();
});

//Adicina um "ouvinte" para o evento click no btUrgencia que esta no form

frm.btUrgencia.addEventListener("click", () => {

  if (!frm.checkValidity()) {
    alert("Nome do paciente a ser atendido em carácter de urgencia");

    frm.inPaciente.focus();
    return;
  }

  const nome = frm.inPaciente.value;
  pacientes.unshift(nome);

  let lista = "";

  //foreach aplicado sobre o array de pacientes

  pacientes.forEach((paciente, i) => (lista += `${i + 1},${paciente}\n`));

  respLista.innerText = lista;
  frm.inPaciente.value = "";
});


frm.btAtender.addEventListener("click", ()=>{
    // se o tamanho do vetor for = 0
    if(pacientes.length == 0){
      alert('Não há pacientes na lista de espera')
      frm.inPaciente.focus()
    }

    const atender = pacientes.shift();
    respNome.innerText = atender;
    let lista = "";
    pacientes.forEach((paciente, i) => (lista += `${i + 1}, ${paciente}\n`))
    respLista.innerText = lista;
})