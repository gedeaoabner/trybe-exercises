function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// exercicio 1
function diasDoMes() {
  let dias = document.querySelector("#days");
  console.log(dias);
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let hoje = dezDaysList[index];
    let criacao = document.createElement("li");
    criacao.setAttribute("class", "day");
    if (hoje === 24 || hoje === 25 || hoje === 31) {
      criacao.className += " holiday";
    }
    if (hoje === 4 || hoje === 11 || hoje === 18 || hoje === 25) {
      criacao.className += " friday";
    }
    criacao.innerText = hoje;
    dias.appendChild(criacao);
  }
}

// exercicio 2
function isFeriado(feriado) {
  let task = document.querySelector(".tasks-container");
  // console.log(task);
  let botao = document.createElement("button");
  botao.setAttribute("id", "btn-holiday");
  botao.innerText = feriado;
  let lugarBotao = document.querySelector(".buttons-container");
  lugarBotao.appendChild(botao);
}

isFeriado("Feriado");
createDaysOfTheWeek();
diasDoMes();

// exercicio 3
let botao = document.getElementById("btn-holiday");
botao.setAttribute("class", "click");
botao = document.querySelector(".click");
botao.addEventListener("click", clicou);

function clicou() {
  let diaFeriado = document.querySelectorAll(".holiday");
  // console.log(diaFeriado);
  for (let index = 0; index < diaFeriado.length; index += 1) {
    diaFeriado[index].style.backgroundColor = "navy";
  }
  botao.setAttribute("class", "clicadoAntes");
  let segundoClick = document.querySelector(".clicadoAntes");
  segundoClick.addEventListener("click", clicadoAntes);
}

function clicadoAntes(){
  let diaFeriado = document.querySelectorAll(".holiday");
  for (let index = 0; index < diaFeriado.length; index += 1) {
    diaFeriado[index].style.backgroundColor = "rgb(238,238,238)";
  }
  botao.setAttribute("class", "click");
}

// Exercicio 4

function criaBtnSexta(sextaFeira) {
  let botaoLugar = document.querySelector(".buttons-container");
  let botaoSexta = document.createElement("button");
  botaoSexta.setAttribute("id", "btn-friday");
  botaoSexta.innerText = sextaFeira;
  botaoLugar.appendChild(botaoSexta);
  console.log(botaoLugar);

}
criaBtnSexta("Sexta-feira");

// Exercicio 5

let btnSexta = document.getElementById("btn-friday");
btnSexta 

function clicaSexta() {

}
