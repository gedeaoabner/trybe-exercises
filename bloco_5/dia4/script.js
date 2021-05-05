function textoCor(cor) {
    let pTexto = document.getElementsByClassName("texto");
    
    for (let index = 0; index < pTexto.length; index += 1) {
      pTexto[index].style.color = cor;
      console.log(pTexto[index]);
    };
  };
  
  

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