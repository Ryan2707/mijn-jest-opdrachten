# Opdracht 10: Workout Duration Calculator (TDD)

## Doel
TDD met arrays en reduce() - bereken workout statistieken.

## Wat ga je doen?
Schrijf functies die statistieken berekenen over je workouts. De tests zijn al klaar, jij maakt de code!

## Bestanden
- `workoutDuration.test.js` - Tests (al klaar, NIET aanpassen!)
- `workoutDuration.js` - Jouw code (leeg, moet jij invullen!)

## Wat moet je maken?
4 functies die werken met workout arrays:

1. `calculateTotalReps(workouts)` - Tel alle reps op
2. `calculateTotalLoad(workouts)` - Tel alle gewicht op
3. `estimateDuration(workouts)` - Schat tijd (3 sec per rep)
4. `getTotalVolume(workouts)` - Bereken volume (reps × load)

## Workout object
```javascript
{
  title: 'Squats',
  reps: 10,
  load: 50
}
```

## TDD Cyclus
1. **RED** → Run: `npm test opdracht-10` (alles rood ❌)
2. **GREEN** → Schrijf code tot tests groen zijn ✅
3. **Refactor** → Verbeter code
4. **Repeat**

## Stappenplan
1. Run tests → zie welke falen
2. Begin met `calculateTotalReps`
3. Gebruik `.reduce()` om reps op te tellen
4. Run tests → check of het werkt
5. Herhaal voor andere functies
6. Alle tests groen? Klaar! ✅

## Tips
- **reduce()** is je vriend voor optellen:
  ```javascript
  array.reduce((total, item) => total + item.property, 0)
  ```
- Voor `estimateDuration()`:
  - Totale reps × 3 seconden
  - Delen door 60 voor minuten
  - Afronden: `Math.round(getal * 100) / 100`
  - **Waarom `* 100 / 100`?** `Math.round()` rondt af op hele getallen. Door eerst × 100 te doen, verschuif je de komma 2 plekken (1.5 → 150), rond je af (150), en deel je weer door 100 (1.50). Zo krijg je altijd maximaal 2 decimalen.
- Voor `getTotalVolume()`:
  - Per workout: `reps × load`
  - Tel alle volumes op
- Edge case: lege array moet 0 geven

## Voorbeeld
```javascript
const workouts = [
  { title: 'Squats', reps: 10, load: 50 },
  { title: 'Push ups', reps: 20, load: 0 }
];

calculateTotalReps(workouts);  // 30
calculateTotalLoad(workouts);  // 50
estimateDuration(workouts);    // 1.5 (30 reps × 3 sec = 90 sec = 1.5 min)
getTotalVolume(workouts);      // 500 (10×50 + 20×0)
```

## Waarom TDD?
Je bouwt functies die je straks in je eigen workout app kunt gebruiken! De tests zorgen dat je statistieken altijd kloppen.
