let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// adiciona mais uma tarefa
tasksList.push('Fazer exercícios da Trybe');  // .unshift() adiciona na primeira posição
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// remove a última tarefa
tasksList.pop();            // .shift() remove o primeiro item da lista
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]