/**
 * TDD Opdracht: WorkoutForm Component
 * 
 * Een form om nieuwe workouts toe te voegen
 * Run: npm test opdracht-14
 */

import { useState } from 'react';

function WorkoutForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState('');
  const [load, setLoad] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validatie
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    
    // Maak workout object
    const workout = {
      title: title,
      reps: Number(reps),
      load: Number(load)
    };
    
    // Roep callback aan
    if (onSubmit) {
      onSubmit(workout);
    }
    
    // Reset form
    setTitle('');
    setReps('');
    setLoad('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Exercise title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <input 
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      
      <input 
        type="number"
        placeholder="Load (kg)"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
      />
      
      <button type="submit">Add Workout</button>
      
      {error && <p>{error}</p>}
    </form>
  );
}

export default WorkoutForm;
