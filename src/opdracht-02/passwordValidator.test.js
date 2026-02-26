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
      const resultaat = validatePassword('Test1');
      expect(resultaat.isValid).toBe(false);
      expect(resultaat.errors).toContain('Minimaal 8 karakters');
  });

  test('wachtwoord zonder nummer geeft error', () => {
    // TODO: Test of 'Welkomtestje' invalid is
      const resultaat = validatePassword('Welkomtestje');
      expect(resultaat.isValid).toBe(false);
      expect(resultaat.errors).toContain('Moet minimaal 1 nummer bevatten');
  });

  test('wachtwoord zonder hoofdletter geeft error', () => {
    // TODO: Test of 'welkom123' invalid is
      const resultaat = validatePassword('welkom123');
      expect(resultaat.isValid).toBe(false);
      expect(resultaat.errors).toContain('Moet minimaal 1 hoofdletter bevatten');
  });

  test('errors array bevat juiste foutmeldingen', () => {
    // TODO: Test of 'test' meerdere errors teruggeeft
    // Hint: gebruik .toContain() om te checken of een error in de array zit
      const resultaat = validatePassword('test');
      expect(resultaat.isValid).toBe(false);
      expect(resultaat.errors).toContain('Minimaal 8 karakters');
      expect(resultaat.errors).toContain('Moet minimaal 1 nummer bevatten');
      expect(resultaat.errors).toContain('Moet minimaal 1 hoofdletter bevatten');
  });

});
