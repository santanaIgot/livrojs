

const frm = document.querySelector("form")
const result = document.querySelector("#showPositionNumber")
const listNumbers = document.querySelector("#ListNumbers")
console.log(frm);
console.log(result);


const nums = []


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const isNumber = Number(frm.inNumbers.value);
    console.log("🚀 ~ isNumber:", isNumber)

     nums.push(isNumber);

     listNumbers.innerText = `Lista de numeros ${nums.join(",")}`
     
 

    console.log(nums.join(","));


})

frm.inSearch.addEventListener("submit", (e) => {
    e.preventDefault()

    const searchNumber = frm.inSearchNumber.value;
    console.log(searchNumber);
     
    let isNum = false;
    for (let i = 0; i < nums.length; i++) {
        if(nums[1] == searchNumber){
            result.innerText = `Numero encontrado na posição ${i}`
        }
        
    }
})