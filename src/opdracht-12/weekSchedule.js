/**
 * TDD Opdracht: Weekly Workout Schedule
 * 
 * Plan workouts voor de hele week
 * Run: npm test opdracht-12
 */

export function createWeekSchedule() {
  return {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  };
}

export function addWorkoutToDay(schedule, day, workout) {
  schedule[day].push(workout);
}

export function getWorkoutsForDay(schedule, day) {
  return schedule[day];
}

export function getTotalRepsForWeek(schedule) {
  let total = 0;
  
  Object.values(schedule).forEach(workouts => {
    workouts.forEach(workout => {
      total += workout.reps;
    });
  });
  
  return total;
}

export function hasRestDay(schedule) {
  return Object.values(schedule).some(workouts => workouts.length === 0);
}
