const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };

  emailListInData.forEach((email, index) => {
    showEmailList(email);
    console.log(`Ele é o ${index}º da nossta lista.`);
    console.log(`-------------------`);
  });
  
  // Adicione seu código aqui