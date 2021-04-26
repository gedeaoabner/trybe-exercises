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
let linha = "";

for (index = 0; index < valor; index += 1) {
    console.log(asterisco);
    asterisco = asterisco + "*";
}
