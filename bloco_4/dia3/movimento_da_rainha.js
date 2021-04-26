// posição da rainha
let posicaoLRainhaLinha = 5;
let posicaoRainhaColuna = 5;

// posição da outra peça alvo
let posicaoAlvoLinha = 2;
let posicaoAlvoColina = 7;

let AtaqueSucesso = false; 

if (posicaoLRainhaLinha === posicaoAlvoLinha || posicaoRainhaColuna === posicaoAlvoColina) {
    AtaqueSucesso = true;
};

for (let supDir = 1; supDir < 8; supDir += 1) {
    let linhaRainha = posicaoLRainhaLinha + supDir;
    let colunaRainha = posicaoRainhaColuna + supDir;

    if ((linhaRainha > 8) || (colunaRainha > 8)) {
        break;
    };

    if ((posicaoLRainhaLinha === linhaRainha) && (posicaoAlvoColina === colunaRainha)) {
        AtaqueSucesso = true;
    };
};

console.log(AtaqueSucesso);