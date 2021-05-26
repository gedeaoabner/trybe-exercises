const sorteio = (numApostado, confere) => {
  resultado = (Math.random() * 5) + 1;
  resultado = Math.floor(resultado);
  return confere(numApostado, resultado); 
}

const confere = (numApostado, resultado) => {
  if (numApostado === resultado) {
    return `Parabéns você ganhou`;
  } else {
    return `Tente novamente`; 
  }
}

console.log(sorteio(2, confere));