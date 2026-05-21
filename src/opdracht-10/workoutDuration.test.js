import { 
  calculateTotalReps, 
  calculateTotalLoad, 
  estimateDuration,
  getTotalVolume 
} from './workoutDuration';

describe('Workout Duration Calculator (TDD)', () => {

  const workouts = [
    { title: 'Squats', reps: 10, load: 50 },
    { title: 'Push ups', reps: 20, load: 0 },
    { title: 'Deadlifts', reps: 5, load: 100 }
  ];

  describe('calculateTotalReps', () => {
    test('telt alle reps op', () => {
      expect(calculateTotalReps(workouts)).toBe(35);
    });

    test('geeft 0 bij lege array', () => {
      expect(calculateTotalReps([])).toBe(0);
    });

    test('werkt met 1 workout', () => {
      expect(calculateTotalReps([{ title: 'Test', reps: 15, load: 20 }])).toBe(15);
    });
  });

  describe('calculateTotalLoad', () => {
    test('telt alle load op', () => {
      expect(calculateTotalLoad(workouts)).toBe(150);
    });

    test('geeft 0 bij lege array', () => {
      expect(calculateTotalLoad([])).toBe(0);
    });

    test('werkt met workouts zonder gewicht', () => {
      const bodyweight = [
        { title: 'Push ups', reps: 20, load: 0 },
        { title: 'Pull ups', reps: 10, load: 0 }
      ];
      expect(calculateTotalLoad(bodyweight)).toBe(0);
    });
  });

  describe('estimateDuration', () => {
    test('schat tijd op basis van reps (3 sec per rep)', () => {
      // 35 reps * 3 sec = 105 seconden = 1.75 minuten
      expect(estimateDuration(workouts)).toBe(1.75);
    });

    test('geeft 0 bij lege array', () => {
      expect(estimateDuration([])).toBe(0);
    });

    test('rondt af op 2 decimalen', () => {
      const workout = [{ title: 'Test', reps: 7, load: 10 }];
      // 7 reps * 3 sec = 21 sec = 0.35 min
      expect(estimateDuration(workout)).toBe(0.35);
    });
  });

  describe('getTotalVolume', () => {
    test('berekent volume (reps × load per workout)', () => {
      // Squats: 10 × 50 = 500
      // Push ups: 20 × 0 = 0
      // Deadlifts: 5 × 100 = 500
      // Totaal: 1000
      expect(getTotalVolume(workouts)).toBe(1000);
    });

    test('geeft 0 bij lege array', () => {
      expect(getTotalVolume([])).toBe(0);
    });

    test('werkt met bodyweight exercises (load = 0)', () => {
      const bodyweight = [{ title: 'Push ups', reps: 50, load: 0 }];
      expect(getTotalVolume(bodyweight)).toBe(0);
    });
  });

});
