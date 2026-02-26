import { validatePassword } from './passwordValidator';

describe('Password Validator', () => {
  
  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: geldig wachtwoord geeft isValid true', () => {
    const resultaat = validatePassword('Welkom123');
    expect(resultaat.isValid).toBe(true);
    expect(resultaat.errors).toEqual([]);
  });

  test('te kort wachtwoord geeft error', () => {
    // TODO: Test of 'Test1' invalid is
    // Hint: check of isValid false is
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('wachtwoord zonder nummer geeft error', () => {
    // TODO: Test of 'Welkomtestje' invalid is
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('wachtwoord zonder hoofdletter geeft error', () => {
    // TODO: Test of 'welkom123' invalid is
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('errors array bevat juiste foutmeldingen', () => {
    // TODO: Test of 'test' meerdere errors teruggeeft
    // Hint: gebruik .toContain() om te checken of een error in de array zit
    expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

});
