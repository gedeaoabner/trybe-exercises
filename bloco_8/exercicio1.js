const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    id4: callback('Gedeão Abner'),
  }
  return employees;
};

 const nomes = (nomeCompleto) => {
  let email = nomeCompleto.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove acentos. fonte: https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
  email = email.toLowerCase(); // remove letras maiúsculas
  email = email.split(' '); // Separa o nome completo
  email = email.join('_'); // junta tudo com underline
  email = `${email}@trybe.com`;
  console.log(email);
  return { nomeCompleto, email };
 }

 // nomes('GEDEÃO ÁBNÉR');
 console.log(newEmployees(nomes));