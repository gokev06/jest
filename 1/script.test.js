const area = require('./script');

test('el area es igual a 35', () => {
    expect(area(10,7)).toBe(35);
  });

  test('el area es igual a 4', () => {
    expect(area(4,2)).toBe(4);
  });
  test('el area es igual a 21', () => {
    expect(area(6,7)).toBe(21);
  });
  test('el area es igual a 24.5', () => {
    expect(area(7,7)).toBe(24.5);
  });

  test('el area es igual a 9', () => {
    expect(area(9,2)).toBe(9);
  });