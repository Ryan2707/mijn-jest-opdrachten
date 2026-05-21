# Opdracht 11: Workout Filter (TDD)

## Doel
TDD met filter() en sort() - filter en sorteer workouts.

## Wat ga je doen?
Schrijf functies om workouts te filteren en sorteren. Perfect voor je workout app UI!

## Bestanden
- `workoutFilter.test.js` - Tests (al klaar, NIET aanpassen!)
- `workoutFilter.js` - Jouw code (leeg, moet jij invullen!)

## Wat moet je maken?
4 filter/sort functies:

1. `filterByMinReps(workouts, minReps)` - Filter op minimum reps
2. `filterByMaxLoad(workouts, maxLoad)` - Filter op maximum gewicht
3. `sortByReps(workouts)` - Sorteer op reps (laag → hoog)
4. `getHighIntensityWorkouts(workouts)` - Alleen heavy workouts (load ≥ 50)

## TDD Cyclus
1. **RED** → Run: `npm test opdracht-11` (alles rood ❌)
2. **GREEN** → Schrijf code tot tests groen zijn ✅
3. **Refactor** → Verbeter code
4. **Repeat**

## Stappenplan
1. Run tests → zie welke falen
2. Begin met `filterByMinReps`
3. Gebruik `.filter()` 
4. Run tests → check of het werkt
5. Herhaal voor andere functies
6. Alle tests groen? Klaar! ✅

## Tips
- **filter()** voor selecteren:
  ```javascript
  workouts.filter(w => w.reps >= minReps)
  ```
- **sort()** voor sorteren (maak eerst kopie!):
  ```javascript
  [...workouts].sort((a, b) => a.reps - b.reps)
  ```
- Waarom kopie maken bij sort?
  - `.sort()` verandert originele array
  - `[...workouts]` maakt kopie (spread operator)
  - Tests checken dit!
- `>=` en `<=` goed gebruiken:
  - minReps: workout.reps >= minReps
  - maxLoad: workout.load <= maxLoad

## Voorbeeld
```javascript
const workouts = [
  { title: 'Squats', reps: 10, load: 50 },
  { title: 'Push ups', reps: 20, load: 0 },
  { title: 'Deadlifts', reps: 5, load: 100 }
];

filterByMinReps(workouts, 10);  
// [Squats, Push ups]

filterByMaxLoad(workouts, 50);  
// [Squats, Push ups]

sortByReps(workouts);  
// [Deadlifts (5), Squats (10), Push ups (20)]

getHighIntensityWorkouts(workouts);  
// [Squats, Deadlifts]
```

## Waarom TDD?
Deze functies zijn super handig in je workout app:
- Filter lichte vs zware workouts
- Sorteer op moeilijkheidsgraad
- Toon alleen high intensity dagen
