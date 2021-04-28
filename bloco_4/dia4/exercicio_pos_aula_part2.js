// Exercicio 1

//Código retirado de freecodecamp.org e alterado por mim
function palindromo(texto) {
    let tamanho = texto.length; //adiciona o tamanho total da string à variavel tamanho
    for (let index = 0; index < tamanho/2; index += 1) { //indica o limite de repetição do For, que sempre será menor que a metade da string
      if (texto[index] !== texto[tamanho - 1 - index]) { //compara posição da letra pelo index com o tamanho total da string -index (-1 porque começa do 0)
          return false; //resultado SE as letras forem diferentes
      };
    };
    return true; // verdadeiro caso seja igual
};
console.log(palindromo("ana"));


// Exercicio 2

function maior(inteiros) {
    let tamanho = inteiros.length;
    let maior = 0;
    let maiorIndex = 0;
    for (index = 0; index <= tamanho; index += 1) {
        if (maior <= inteiros[index]) {
            maior = inteiros[index];
            maiorIndex = inteiros.indexOf(maior);
        };
    };
    return maiorIndex;
};

console.log(maior([2, 4, 6, 7, 10, 0, -3]));

// exercicio 3

function menor(inteiros) {
    let tamanho = inteiros.length;
    let menorNumero = 999;
    let menorIndex = 0;
    for (index = 0; index <= tamanho; index += 1) {
        if (menorNumero > inteiros[index]) {
            menorNumero = inteiros[index];
            menorIndex = inteiros.indexOf(menorNumero);
        };
    };
    return menorIndex;
};

console.log(menor([2, 4, 6, 7, 10, 0, -3]));

// exercicio 4

function nomes(lista) {
    let maior = 0;
    let tamanho = lista.length; 
    for (let index = 0; index < tamanho; index += 1) {
        if (lista[index].length > maior) { //pega o tamanho total da string e confere se é o maior.
            maior = lista[index].length; 
        };
    };
    return maior;
};

console.log(nomes(["andre", "maria", "joao", "isabella", "mauro", "ana"]));

// exercicio 5

function moda(inteiros) {
    let conta = 1;
    let compara = {};
    let maximo = 0;

    for (index = 0; index < inteiros.length; index += 1) {
        let atual = inteiros[index];
        if (compara[atual] == null) {
            compara[atual] = 1;
        } else {
            compara[atual] += 1;
        }
        if (compara[atual] > conta) {
            maximo = atual
            conta = compara[atual];
        }
    };
    return maximo;
};

console.log(moda([2, 3, 2, 5, 8, 2, 3]));

// exercicio 6

function somaTotal(valor) {
    let atual = 1;
    let soma = 0;
    for (index = 0; index <= valor; index += 1) {
        if (atual <= valor) {
            soma = soma += atual;
            atual += 1;
        };
    };
    return soma;
};

    console.log(somaTotal(5));
