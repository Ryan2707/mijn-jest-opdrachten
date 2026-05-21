import { 
  createWeekSchedule,
  addWorkoutToDay,
  getWorkoutsForDay,
  getTotalRepsForWeek,
  hasRestDay
} from './weekSchedule';

describe('Weekly Workout Schedule (TDD)', () => {

  describe('createWeekSchedule', () => {
    test('maakt object met 7 dagen', () => {
      const schedule = createWeekSchedule();
      expect(Object.keys(schedule)).toHaveLength(7);
    });

    test('bevat alle dagen van de week', () => {
      const schedule = createWeekSchedule();
      expect(schedule).toHaveProperty('monday');
      expect(schedule).toHaveProperty('tuesday');
      expect(schedule).toHaveProperty('wednesday');
      expect(schedule).toHaveProperty('thursday');
      expect(schedule).toHaveProperty('friday');
      expect(schedule).toHaveProperty('saturday');
      expect(schedule).toHaveProperty('sunday');
    });

    test('elke dag heeft lege workouts array', () => {
      const schedule = createWeekSchedule();
      expect(schedule.monday).toEqual([]);
      expect(schedule.tuesday).toEqual([]);
    });
  });

  describe('addWorkoutToDay', () => {
    test('voegt workout toe aan specifieke dag', () => {
      const schedule = createWeekSchedule();
      const workout = { title: 'Squats', reps: 10, load: 50 };
      
      addWorkoutToDay(schedule, 'monday', workout);
      
      expect(schedule.monday).toHaveLength(1);
      expect(schedule.monday[0]).toEqual(workout);
    });

    test('kan meerdere workouts aan zelfde dag toevoegen', () => {
      const schedule = createWeekSchedule();
      
      addWorkoutToDay(schedule, 'wednesday', { title: 'Squats', reps: 10, load: 50 });
      addWorkoutToDay(schedule, 'wednesday', { title: 'Push ups', reps: 20, load: 0 });
      
      expect(schedule.wednesday).toHaveLength(2);
    });

    test('andere dagen blijven leeg', () => {
      const schedule = createWeekSchedule();
      addWorkoutToDay(schedule, 'friday', { title: 'Test', reps: 5, load: 20 });
      
      expect(schedule.monday).toEqual([]);
      expect(schedule.tuesday).toEqual([]);
    });
  });

  describe('getWorkoutsForDay', () => {
    test('geeft workouts voor specifieke dag', () => {
      const schedule = createWeekSchedule();
      const workout = { title: 'Deadlifts', reps: 5, load: 100 };
      
      addWorkoutToDay(schedule, 'thursday', workout);
      
      const result = getWorkoutsForDay(schedule, 'thursday');
      expect(result).toEqual([workout]);
    });

    test('geeft lege array voor dag zonder workouts', () => {
      const schedule = createWeekSchedule();
      expect(getWorkoutsForDay(schedule, 'sunday')).toEqual([]);
    });
  });

  describe('getTotalRepsForWeek', () => {
    test('telt alle reps van hele week', () => {
      const schedule = createWeekSchedule();
      
      addWorkoutToDay(schedule, 'monday', { title: 'Squats', reps: 10, load: 50 });
      addWorkoutToDay(schedule, 'monday', { title: 'Push ups', reps: 20, load: 0 });
      addWorkoutToDay(schedule, 'friday', { title: 'Lunges', reps: 15, load: 30 });
      
      expect(getTotalRepsForWeek(schedule)).toBe(45);
    });

    test('geeft 0 voor lege week', () => {
      const schedule = createWeekSchedule();
      expect(getTotalRepsForWeek(schedule)).toBe(0);
    });
  });

  describe('hasRestDay', () => {
    test('geeft true als er minimaal 1 dag zonder workouts is', () => {
      const schedule = createWeekSchedule();
      addWorkoutToDay(schedule, 'monday', { title: 'Test', reps: 10, load: 50 });
      // Andere dagen zijn leeg
      
      expect(hasRestDay(schedule)).toBe(true);
    });

    test('geeft false als elke dag workouts heeft', () => {
      const schedule = createWeekSchedule();
      const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
      
      days.forEach(day => {
        addWorkoutToDay(schedule, day, { title: 'Workout', reps: 10, load: 50 });
      });
      
      expect(hasRestDay(schedule)).toBe(false);
    });

    test('geeft true voor volledig lege week', () => {
      const schedule = createWeekSchedule();
      expect(hasRestDay(schedule)).toBe(true);
    });
  });

});
