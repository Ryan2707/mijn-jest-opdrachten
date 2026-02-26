import { sortByPrice, filterByCategory, searchProducts } from './productUtils';

describe('Product Utils', () => {
  
  // Test data die we in meerdere tests gebruiken
  const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'electronics' },
    { id: 2, name: 'Muis', price: 25, category: 'electronics' },
    { id: 3, name: 'Bureau', price: 150, category: 'furniture' },
    { id: 4, name: 'Stoel', price: 89, category: 'furniture' }
  ];

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: sortByPrice sorteert op prijs laag naar hoog', () => {
    const resultaat = sortByPrice(products);
    expect(resultaat[0].name).toBe('Muis');
    expect(resultaat[3].name).toBe('Laptop');
  });

  test('filterByCategory geeft alleen electronics terug', () => {
    const resultaat = filterByCategory(products, 'electronics');
    expect(resultaat).toHaveLength(2);
    expect(resultaat[0].category).toBe('electronics');
    expect(resultaat[1].category).toBe('electronics');
  });

  test('filterByCategory geeft lege array bij onbekende categorie', () => {
    const resultaat = filterByCategory(products, 'clothing');
    expect(resultaat).toHaveLength(0);
  });

  test('searchProducts vindt producten met zoekterm', () => {
    const resultaat = searchProducts(products, 'bureau');
    expect(resultaat).toHaveLength(1);
    expect(resultaat[0].name).toBe('Bureau');
  });

  test('searchProducts is case insensitive', () => {
    const resultaat = searchProducts(products, 'LAPTOP');
    expect(resultaat).toHaveLength(1);
    expect(resultaat[0].name).toBe('Laptop');
  });

});
