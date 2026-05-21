/**
 * TDD Opdracht: Calculator
 * 
 * Jouw taak: schrijf de functies zodat alle tests slagen!
 * Run: npm test opdracht-09
 * 
 * De tests zijn al geschreven. Jij moet de code maken.
 */

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

export function power(base, exponent) {
  return Math.pow(base, exponent);
}