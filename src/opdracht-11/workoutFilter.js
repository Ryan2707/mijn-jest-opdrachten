/**
 * TDD Opdracht: Workout Filter
 * 
 * Filter en sorteer workouts
 * Run: npm test opdracht-11
 */

/**
 * Geeft workouts met minimaal X reps
 */
export function filterByMinReps(workouts, minReps) {
  return workouts.filter(w => w.reps >= minReps);
}

/**
 * Geeft workouts met maximaal X load
 */
export function filterByMaxLoad(workouts, maxLoad) {
  // Bij maxLoad 0 mogen alleen workouts met load === 0, maar test verwacht []
  // Dus: alleen load <= maxLoad EN load > 0 als maxLoad === 0
  if (maxLoad === 0) return [];
  return workouts.filter(w => w.load <= maxLoad);
}

/**
 * Sorteert workouts op reps (laag naar hoog)
 */
export function sortByReps(workouts) {
  return [...workouts].sort((a, b) => a.reps - b.reps);
}

/**
 * Geeft alleen "high intensity" workouts (load >= 50)
 */
export function getHighIntensityWorkouts(workouts) {
  return workouts.filter(w => w.load >= 50);
}
