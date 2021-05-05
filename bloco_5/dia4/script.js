function textoCor(cor) {
    let pTexto = document.getElementsByClassName("texto");
    
    //for (let index in cor) {
      pTexto.
      console.log(pTexto);
    //};
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