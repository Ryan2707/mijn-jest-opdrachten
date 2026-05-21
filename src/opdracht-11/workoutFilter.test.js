import { 
  filterByMinReps, 
  filterByMaxLoad, 
  sortByReps,
  getHighIntensityWorkouts 
} from './workoutFilter';

describe('Workout Filter (TDD)', () => {

  const workouts = [
    { title: 'Squats', reps: 10, load: 50 },
    { title: 'Push ups', reps: 20, load: 0 },
    { title: 'Deadlifts', reps: 5, load: 100 },
    { title: 'Lunges', reps: 15, load: 30 }
  ];

  describe('filterByMinReps', () => {
    test('filtert workouts met minimaal X reps', () => {
      const result = filterByMinReps(workouts, 15);
      expect(result).toHaveLength(2);
      expect(result[0].title).toBe('Push ups');
      expect(result[1].title).toBe('Lunges');
    });

    test('geeft alle workouts bij min = 0', () => {
      expect(filterByMinReps(workouts, 0)).toHaveLength(4);
    });

    test('geeft lege array bij te hoge min', () => {
      expect(filterByMinReps(workouts, 100)).toEqual([]);
    });
  });

  describe('filterByMaxLoad', () => {
    test('filtert workouts met maximaal X load', () => {
      const result = filterByMaxLoad(workouts, 50);
      expect(result).toHaveLength(3);
      // Deadlifts (100) moet eruit gefilterd zijn
      expect(result.find(w => w.title === 'Deadlifts')).toBeUndefined();
    });

    test('geeft alle workouts bij hoge max', () => {
      expect(filterByMaxLoad(workouts, 200)).toHaveLength(4);
    });

    test('geeft lege array bij max = 0', () => {
      expect(filterByMaxLoad(workouts, 0)).toEqual([]);
    });
  });

  describe('sortByReps', () => {
    test('sorteert workouts op reps (laag naar hoog)', () => {
      const result = sortByReps(workouts);
      expect(result[0].title).toBe('Deadlifts');  // 5 reps
      expect(result[3].title).toBe('Push ups');   // 20 reps
    });

    test('verandert originele array niet', () => {
      const original = [...workouts];
      sortByReps(workouts);
      expect(workouts).toEqual(original);
    });

    test('werkt met lege array', () => {
      expect(sortByReps([])).toEqual([]);
    });
  });

  describe('getHighIntensityWorkouts', () => {
    test('geeft workouts met load >= 50', () => {
      const result = getHighIntensityWorkouts(workouts);
      expect(result).toHaveLength(2);
      expect(result[0].title).toBe('Squats');
      expect(result[1].title).toBe('Deadlifts');
    });

    test('geeft lege array als geen high intensity', () => {
      const light = [
        { title: 'Stretching', reps: 10, load: 0 },
        { title: 'Yoga', reps: 5, load: 0 }
      ];
      expect(getHighIntensityWorkouts(light)).toEqual([]);
    });

    test('grens is precies 50 (50 is ook high intensity)', () => {
      const exactly50 = [{ title: 'Test', reps: 10, load: 50 }];
      expect(getHighIntensityWorkouts(exactly50)).toHaveLength(1);
    });
  });

});
