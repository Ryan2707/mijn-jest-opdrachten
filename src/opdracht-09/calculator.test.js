import { add, subtract, multiply, divide, power } from './calculator';

describe('Calculator (TDD)', () => {

  describe('add', () => {
    test('telt twee positieve getallen op', () => {
      expect(add(5, 3)).toBe(8);
    });

    test('telt een positief en negatief getal op', () => {
      expect(add(10, -5)).toBe(5);
    });

    test('telt twee negatieve getallen op', () => {
      expect(add(-3, -7)).toBe(-10);
    });

    test('telt op met 0', () => {
      expect(add(42, 0)).toBe(42);
    });
  });

  describe('subtract', () => {
    test('trekt twee getallen af', () => {
      expect(subtract(10, 3)).toBe(7);
    });

    test('trekt negatief getal af', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    test('trekt af tot negatief resultaat', () => {
      expect(subtract(3, 10)).toBe(-7);
    });
  });

  describe('multiply', () => {
    test('vermenigvuldigt twee getallen', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    test('vermenigvuldigt met 0', () => {
      expect(multiply(100, 0)).toBe(0);
    });

    test('vermenigvuldigt met negatief getal', () => {
      expect(multiply(6, -3)).toBe(-18);
    });

    test('vermenigvuldigt twee negatieve getallen', () => {
      expect(multiply(-4, -5)).toBe(20);
    });
  });

  describe('divide', () => {
    test('deelt twee getallen', () => {
      expect(divide(20, 4)).toBe(5);
    });

    test('deelt met resultaat als decimaal', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    test('gooit error bij delen door 0', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('power', () => {
    test('berekent macht van getal', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('macht 0 geeft altijd 1', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('macht 1 geeft getal zelf', () => {
      expect(power(7, 1)).toBe(7);
    });

    test('negatieve macht geeft decimaal', () => {
      expect(power(2, -2)).toBe(0.25);
    });
  });

});
