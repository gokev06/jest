const par = require('./script');

test('es par', () => {
    expect(par(10)).toBe("par");
  });

  test('es par', () => {
    expect(par(4)).toBe("par");
  });
  test('es impar', () => {
    expect(par(9)).toBe("impar");
  });
  test('es impar', () => {
    expect(par(7)).toBe("impar");
  });

  test('es impar', () => {
    expect(par(9)).toBe("impar");
  });