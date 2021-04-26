// exercicio 1
let valor = 3;

if (valor > 1) {
    for (index = 0; index < valor; index += 1) {
        console.log("****");
    }
}

// exercico 2

let valor = 5;
let asterisco = ["*", "**", "***", "****", "*****"];
if (valor > 1) {
    for (index = 0; index < valor; index += 1) {
        console.log(asterisco[index]);
    }
}

let valor = 5;
let asterisco = "*";

for (index = 0; index < valor; index += 1) {
    console.log(asterisco);
    asterisco = asterisco + "*";
}

// exercicio 3 

let valor = 5;
let asterisco = "*";
let linha = "";

for (index = 1; index < (valor + 1); index += 1) {
    for (let espaco = (valor - index); espaco > 0; espaco -= 1) {
        asterisco = linha;
        //console.log("oi");
    };
};


// gabarito exercicio 3

let valor = 5;
let asterisco = "*";
let linha = "";
let posicao = valor;

for (indexLinha = 0; indexLinha < valor; indexLinha += 1) {
    for (let indexColuna = 0; indexColuna <= valor; indexColuna += 1) {
        if (indexColuna < posicao) {
            linha = linha + " ";
        } else {
            linha = linha + asterisco;
        }
    };
    console.log(linha);
    linha = "";
    posicao -= 1;
};

// exercicio 4
let valor = 7;
let asterisco = "*";
let espaco = " ";
let linha = "";
let atual = 1;
let calculo = 0;

for (indexLinha = 0; indexLinha < valor; indexLinha += 1) {
    calculo = (valor - atual) / 2;
    for (indexColuna = 0; indexColuna < valor; indexColuna += 1) {
        if (indexColuna < calculo) {
            linha = linha + espaco;
        } else if (indexColuna == calculo) {
            for (indexAsterisco = 0; indexAsterisco < atual; indexAsterisco += 1) {
                linha = linha + asterisco;
            };
        } else {
            linha = linha + espaco;
        };
    };
    atual = atual += 2;
    console.log(linha);
    linha = "";
};

