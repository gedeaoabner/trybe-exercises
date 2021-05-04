function textoCor(cor) {
    let pTexto = document.querySelectorAll(".texto");
    
    for (let index in cor) {
      pTexto[index].style.color = cor;
      // console.log(pTexto[index]);
    };
  };
  
  textoCor("navy");

function botao(nomeBotao) {
    let local = document.querySelector("#botoes");
    console.log(local);
    let botao = document.createElement("button");
    botao.setAttribute("id", nomeBotao);
    botao.innerText = nomeBotao;
    console.log(botao);
    local.appendChild(botao);
}

botao("cor");