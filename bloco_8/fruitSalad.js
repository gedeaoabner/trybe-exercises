// Faça uma lista com as suas frutas favoritas
const specialFruit = ['orange', 'apple', 'strawberry'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['condensed-milk', 'syrup', 'milk-powder'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const fsComplete = [...fruit, ...additional];
  return fsComplete;
};

console.log(fruitSalad(specialFruit, additionalItens));