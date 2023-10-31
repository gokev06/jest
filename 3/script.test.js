const igual = require('./script');

test('es igual', () => {
    expect(igual(10,23)).toBe("no son iguales");
  });

  test('es igual', () => {
    expect(igual(4,4)).toBe("si son iguales");
  });
  test('es igual', () => {
    expect(igual(9,9)).toBe("si son iguales");
  });
  test('es igual', () => {
    expect(igual(7,4)).toBe("no son iguales");
  });

  test('es igual', () => {
    expect(igual(9,7)).toBe("no son iguales");
  });