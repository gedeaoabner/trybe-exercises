//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for ( let contador = 0; contador < numbers.length; contador += 1) {
    console.log(numbers[contador]);
}

//exercicio 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
}
console.log(soma);

// exercicio 3 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
}
console.log(soma/numbers.length);

// exercicio 4 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
}
let resultado = soma/numbers.length;
if (resultado > 20) {
    console.log("resultado é maior que 20");
}
else {
    console.log("resultado é menor ou igual a 20");
}

// exercicio 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }
}
console.log(maiorNumero);
