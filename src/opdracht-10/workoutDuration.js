/**
 * TDD Opdracht: Workout Duration Calculator
 * 
 * Bereken statistieken over workouts
 * Run: npm test opdracht-10
 */

export function calculateTotalReps(workouts) {
  return workouts.reduce((total, workout) => total + workout.reps, 0);
}

export function calculateTotalLoad(workouts) {
  return workouts.reduce((total, workout) => total + workout.load, 0);
}

export function estimateDuration(workouts) {
  const totalReps = calculateTotalReps(workouts);
  const seconds = totalReps * 3;
  const minutes = seconds / 60;
  return Math.round(minutes * 100) / 100;
}

export function getTotalVolume(workouts) {
  return workouts.reduce((total, workout) => {
    return total + (workout.reps * workout.load);
  }, 0);
}
