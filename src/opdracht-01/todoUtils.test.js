import { isValidTodo, getTodoPriority } from './todoUtils';

describe('Todo Utils', () => {
  
  // VOORBEELD - Deze test is al ingevuld om te laten zien hoe het werkt
  test('VOORBEELD: isValidTodo geeft true voor normale tekst', () => {
    const resultaat = isValidTodo('Boodschappen doen');
    expect(resultaat).toBe(true);
  });

  test('isValidTodo geeft false voor lege string', () => {
    // TODO: Test of '' invalid is
      const resultaat = isValidTodo('');
      expect(resultaat).toBe(false);
  });

  test('getTodoPriority geeft high voor urgent', () => {
    // TODO: Test of 'urgent bellen' priority 'high' krijgt
      const resultaat = getTodoPriority('urgent bellen');
      expect(resultaat).toBe('high');
  });

  test('getTodoPriority geeft low voor normale todo', () => {
    // TODO: Test of 'koffie drinken' priority 'low' krijgt
      const resultaat = getTodoPriority('koffie drinken');
      expect(resultaat).toBe('low');
  });

});
