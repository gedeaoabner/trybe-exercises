let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};

let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34
};

let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade");

console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + bestInTheWorld.length + " vezes");

//

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

//

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, ":", car[index]);
  }

//
let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
}
//resultado: hamburguer, bife, acarajé;

//

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
};

for (let index in names) {
    console.log("OLá, " + names[index]);
};

//

let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
}

for (let key in carro) {
    console.log(key + ": " + carro[key]);
};

//

