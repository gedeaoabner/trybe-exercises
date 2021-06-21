// const { somar, subtrair, multiplicar, dividir } = require('./math.js');

const math = require('./math');

describe('Tests the subtrair function', () => {
  it('#subtrair', async () => {
    math.subtrair = jest.fn()
      .mockReturnValue(5);
    
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair()).toBe(5);
  });

  it('#subtrair', () => {
    math.subtrair = jest.fn()
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(7)
      .mockReturnValueOnce(15);
    
    expect(math.subtrair).toHaveBeenCalledTimes(0);

    expect(math.subtrair()).toBe(4);
    expect(math.subtrair).toHaveBeenCalledTimes(1);

    expect(math.subtrair()).toBe(7);
    expect(math.subtrair).toHaveBeenCalledTimes(2);

    expect(math.subtrair()).toBe(15);
    expect(math.subtrair).toHaveBeenCalledTimes(3);

  });
});

describe('tests the function multiplicar', () => {
  it('#multiplicar', async () => {
    math.multiplicar = jest.fn()
      .mockReturnValue(10);

    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe(10);
  });
});

describe('tests the function somar', () => {
  it('#somar', async () => {
    math.somar = jest.fn((a, b) => a + b);

    math.somar();
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar(6, 3)).toBe(9);
  });
});

describe('test function subtrair and reset it afterwards', () => {
  it('#subtrair', async () => {
    math.subtrair = jest.fn()
      .mockReturnValue(20);

    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair).toHaveBeenCalledTimes(1);
    expect(math.subtrair()).toBe(20);
    expect(math.subtrair).toHaveBeenCalledTimes(2);
  });
});