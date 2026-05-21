# Opdracht 14: WorkoutForm Component (TDD met React)

## Doel
TDD met React forms - state, validatie en callbacks.

## Wat ga je doen?
Bouw een form component om nieuwe workouts toe te voegen. De meest complexe TDD opdracht tot nu toe!

## Bestanden
- `WorkoutForm.test.jsx` - Tests (al klaar, NIET aanpassen!)
- `WorkoutForm.jsx` - Jouw component (leeg, moet jij invullen!)

## Wat moet je maken?
Een `WorkoutForm` component met:
- 3 input velden (title, reps, load)
- Submit button
- Validatie (title is verplicht)
- Error message bij lege title
- Form reset na submit
- Numbers converteren (reps en load)

## Props
```javascript
{
  onSubmit: (workout) => { ... }
}
```

## TDD Cyclus
1. **RED** → Run: `npm test opdracht-14` (alles rood ❌)
2. **GREEN** → Bouw component tot tests groen zijn ✅
3. **Refactor** → Maak code mooier
4. **Repeat**

## Stappenplan in twee fases

### Fase A — Form bouwen en submit werkend maken
1. Run tests → zie welke falen
2. Begin met state: `useState` voor title, reps, load
3. Maak inputs met placeholders
4. Maak inputs controlled (value + onChange)
5. Maak submit button
6. Maak handleSubmit functie: roep `onSubmit` aan met de data
7. Converteer reps/load naar numbers
8. Reset form na submit

**Stop hier! Run `npm test opdracht-14` → de eerste 3 describe-blokken moeten groen zijn ✅**

### Fase B — Validatie toevoegen
9. Voeg `useState` toe voor error
10. Check in handleSubmit of title leeg is
11. Toon error message in de JSX
12. Alle tests groen? Klaar! ✅

## Tips
- **State setup:**
  ```javascript
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState('');
  const [load, setLoad] = useState('');
  const [error, setError] = useState('');
  ```

- **Controlled input:**
  ```jsx
  <input 
    type="text"
    placeholder="Exercise title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
  ```

- **Validatie in handleSubmit:**
  ```javascript
  if (!title.trim()) {
    setError('Title is required');
    return;
  }
  ```

- **Convert naar numbers:**
  ```javascript
  const workout = {
    title: title,
    reps: Number(reps),
    load: Number(load)
  };
  ```

- **Form reset:**
  ```javascript
  setTitle('');
  setReps('');
  setLoad('');
  setError('');
  ```

## Volgorde van bouwen
1. Inputs tonen ✅
2. State koppelen (controlled inputs) ✅
3. Submit button werkend maken ✅
4. Data versturen via onSubmit ✅
5. Validatie toevoegen ✅
6. Error message tonen ✅
7. Form resetten ✅
8. Numbers converteren ✅

## Wat leer je?
- Controlled components (value + onChange)
- Form handling in React
- useState voor meerdere velden
- Validatie in forms
- Type conversie (string → number)
- Conditional rendering (error message)
- Form reset na submit

## Waarom TDD?
Tests geven je **precies** aan wat het form moet doen. Je bouwt feature voor feature, test voor test. Zo vergeet je niets!

## Uitdaging
Dit is de moeilijkste opdracht! Neem de tijd, lees de tests goed, en bouw stap voor stap. Elke groene test is een overwinning! 🎉
