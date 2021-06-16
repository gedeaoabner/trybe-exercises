const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

uppercase('texto novo', (string) => console.log(string));

describe('Testing first exercise', () => {
    it('tests the result of function uppercase', (done) => {
      uppercase('Texto para testar', (string) => {
        expect(string).toBe('TEXTO PARA TESTAR');
        done();
      });
    });
  });

module.exports = { uppercase };
