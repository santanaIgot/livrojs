

const carro = []

carro.push({modelo: "sandero", cor:"Azul",preco: 30.000})
carro.push({modelo: "golf gti", cor:"Azul",preco: 100.000})


for (const car of carro) {
    console.log(`${car.modelo} , ${car.preco}`);
}
