# Opdracht 13: WorkoutCard Component (TDD met React)

## Doel
TDD met React - tests eerst, dan component bouwen!

## Wat ga je doen?
Je eerste TDD opdracht met een React component! De tests zijn al geschreven, jij bouwt het component.

## Bestanden
- `WorkoutCard.test.jsx` - Tests (al klaar, NIET aanpassen!)
- `WorkoutCard.jsx` - Jouw component (leeg, moet jij invullen!)

## Wat moet je maken?
Een `WorkoutCard` component dat:
- 1 workout toont (title, reps, load)
- Een delete button heeft
- De `onDelete` callback aanroept met workout._id

## Props
```javascript
{
  workout: {
    _id: '123',
    title: 'Squats',
    reps: 10,
    load: 50
  },
  onDelete: (id) => { ... }  // Optioneel!
}
```

## TDD Cyclus
1. **RED** → Run: `npm test opdracht-13` (alles rood ❌)
2. **GREEN** → Bouw component tot tests groen zijn ✅
3. **Refactor** → Maak component mooier
4. **Repeat**

## Stappenplan
1. Run tests → zie welke falen
2. Begin simpel: render alleen de title
3. Run tests → zie welke nu groen zijn
4. Voeg reps toe
5. Voeg load toe
6. Voeg delete button toe
7. Maak delete functionaliteit werkend
8. Alle tests groen? Klaar! ✅

## Tips
- **Structuur voorbeeld:**
  ```jsx
  <div className="workout-card">
    <h3>{workout.title}</h3>
    <p>{workout.reps} reps</p>
    <p>{workout.load} kg</p>
    <button onClick={handleDelete}>Delete</button>
  </div>
  ```
- **Delete handler:**
  ```javascript
  const handleDelete = () => {
    if (onDelete) {
      onDelete(workout._id);
    }
  };
  ```
- Check altijd `if (onDelete)` - prop is optioneel!
- className moet exact `workout-card` zijn (test checkt dit)
- Button moet `Delete` of `Verwijder` in tekst hebben

## Wat leer je?
- TDD met React componenten
- Props gebruiken
- Callback functions
- Optionele props checken
- Tests lezen om te begrijpen wat je moet bouwen

## Waarom TDD?
De tests vertellen je **precies** wat het component moet doen. Je hoeft niet na te denken over requirements - ze staan in de tests!
