const numAleatorio = () => {
  return Math.round(Math.random() * 100);
}

// console.log(numAleatorio());

module.exports = { numAleatorio };

describe('testa retorno fixo da função numAleatorio', () => {
  it('testa se o valor retornado é 77', async () => {
    numAleatorio = jest.fn()
      .mockReturnValue(77);

    numAleatorio();
    expect(numAleatorio).toHaveBeenCalled();
    expect(numAleatorio()).toBe(77);
    expect(numAleatorio).toHaveBeenCalledTimes(2);
  });
});