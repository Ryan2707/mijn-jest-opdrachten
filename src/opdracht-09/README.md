# Opdracht 9: Calculator (TDD - Test Driven Development)

## Doel
Leer TDD: eerst tests, dan code schrijven!

## Wat is TDD?
**Normale manier:** Code schrijven → Tests schrijven → Tests runnen  
**TDD manier:** Tests schrijven → Tests runnen (ROOD) → Code schrijven → Tests runnen (GROEN)

## Wat ga je doen?
Dit is je eerste TDD opdracht! De **tests zijn al geschreven**. Jij moet de **code** schrijven om de tests te laten slagen.

## Bestanden
- `calculator.test.js` - Tests (al klaar, NIET aanpassen!)
- `calculator.js` - Jouw code (leeg, moet jij invullen!)

## Wat moet je maken?
5 functies:
1. `add(a, b)` - Telt twee getallen op
2. `subtract(a, b)` - Trekt af
3. `multiply(a, b)` - Vermenigvuldigt
4. `divide(a, b)` - Deelt (let op: error bij delen door 0!)
5. `power(base, exponent)` - Berekent macht

## TDD Cyclus
1. **RED** → Run tests: `npm test opdracht-09` (alles rood ❌)
2. **GREEN** → Schrijf code totdat 1 test groen wordt ✅
3. **Refactor** → Maak code mooier (optioneel)
4. **Repeat** → Herhaal tot alle tests groen zijn

## Wat is nieuw?
- **TDD mindset:** Tests eerst, code daarna
- Je weet exact wat de functie moet doen (de tests vertellen het je!)
- Je bent klaar als alle tests groen zijn

## Stappenplan
1. Run: `npm test opdracht-09` → Alles is rood ❌
2. Open `calculator.js`
3. Begin met `add()` functie
4. Schrijf net genoeg code om de add tests groen te krijgen
5. Run tests opnieuw
6. Herhaal voor subtract, multiply, divide, power
7. Alle tests groen? Klaar! ✅

## Tips
- Begin simpel: maak eerst `add()` werkend
- Run tests vaak! Zie je direct of het werkt
- Voor `divide()`: check of `b === 0`, dan `throw new Error('...')`
- Voor `power()`: gebruik `Math.pow(base, exponent)` of `base ** exponent`
- NIET de tests aanpassen! Alleen `calculator.js`

## Waarom TDD?
- Je weet precies wat je moet maken
- Tests zijn automatisch af
- Je schrijft alleen code die nodig is
- Minder bugs
- Refactoren is veilig (tests blijven werken)
