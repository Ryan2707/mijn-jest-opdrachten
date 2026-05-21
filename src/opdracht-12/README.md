# Opdracht 12: Weekly Workout Schedule (TDD)

## Doel
TDD met objecten - bouw een week planning systeem.

## Wat ga je doen?
Schrijf functies om een weekschema voor workouts te maken. De meest complexe TDD opdracht!

## Bestanden
- `weekSchedule.test.js` - Tests (al klaar, NIET aanpassen!)
- `weekSchedule.js` - Jouw code (leeg, moet jij invullen!)

## Wat moet je maken?
5 functies voor week planning:

1. `createWeekSchedule()` - Maakt leeg schema met 7 dagen
2. `addWorkoutToDay(schedule, day, workout)` - Voeg workout toe aan dag
3. `getWorkoutsForDay(schedule, day)` - Haal workouts van dag op
4. `getTotalRepsForWeek(schedule)` - Tel alle reps van week
5. `hasRestDay(schedule)` - Check of er een rustdag is

## Week Schedule structuur
```javascript
{
  monday: [],
  tuesday: [{ title: 'Squats', reps: 10, load: 50 }],
  wednesday: [],
  thursday: [{ title: 'Push ups', reps: 20, load: 0 }],
  friday: [],
  saturday: [],
  sunday: []
}
```

## TDD Cyclus
1. **RED** → Run: `npm test opdracht-12` (alles rood ❌)
2. **GREEN** → Schrijf code tot tests groen zijn ✅
3. **Refactor** → Verbeter code
4. **Repeat**

## Stappenplan
1. Run tests → zie welke falen
2. Begin met `createWeekSchedule()` - simpelste
3. Dan `addWorkoutToDay()` en `getWorkoutsForDay()`
4. Daarna de complexere: `getTotalRepsForWeek()` en `hasRestDay()`
5. Run tests vaak!
6. Alle tests groen? Klaar! ✅

## Tips
- **createWeekSchedule()**: Return object met 7 keys, elk met `[]`
- **addWorkoutToDay()**: 
  ```javascript
  schedule[day].push(workout);
  ```
- **Object.values()** geeft alle values van object:
  ```javascript
  Object.values(schedule)  // [[], [workout], [], ...]
  ```
- **getTotalRepsForWeek()**: 
  - Loop door `Object.values(schedule)`
  - Per dag, loop door workouts
  - Tel reps op
- **hasRestDay()**: 
  ```javascript
  Object.values(schedule).some(workouts => workouts.length === 0)
  ```

## Voorbeeld gebruik
```javascript
const schedule = createWeekSchedule();

addWorkoutToDay(schedule, 'monday', { 
  title: 'Squats', 
  reps: 10, 
  load: 50 
});

addWorkoutToDay(schedule, 'monday', { 
  title: 'Push ups', 
  reps: 20, 
  load: 0 
});

getWorkoutsForDay(schedule, 'monday');  
// [{ Squats }, { Push ups }]

getTotalRepsForWeek(schedule);  
// 30

hasRestDay(schedule);  
// true (tuesday t/m sunday zijn leeg)
```

## Waarom TDD?
Dit is een realistische feature voor je workout app! Je kunt workouts per dag plannen en zien hoeveel je totaal doet.
