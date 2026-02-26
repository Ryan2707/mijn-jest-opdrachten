import { calculateTotalScore, calculatePercentage, isPassed, getGrade, countWrongAnswers } from './quizScore';

describe('Quiz Score', () => {
  let quizAnswers;

  beforeEach(() => {
    quizAnswers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 10 },
      { question: 3, isCorrect: false, points: 0 },
      { question: 4, isCorrect: true, points: 10 },
      { question: 5, isCorrect: true, points: 10 }
    ];
  });

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: calculateTotalScore telt punten op', () => {
    const answers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 15 }
    ];
    expect(calculateTotalScore(answers)).toBe(25);
  });

  test('calculatePercentage berekent juiste percentage', () => {
    // 4 van 5 goed = 80%
    expect(calculatePercentage(quizAnswers)).toBe(80);
  });

  test('isPassed geeft true bij 60% of hoger', () => {
    // 80% goed
    expect(isPassed(quizAnswers)).toBe(true);
  });

  test('isPassed geeft false bij lager dan 60%', () => {
    // 2 van 4 goed = 50%
    const answers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: false, points: 0 },
      { question: 3, isCorrect: true, points: 10 },
      { question: 4, isCorrect: false, points: 0 }
    ];
    expect(isPassed(answers)).toBe(false);
  });

  test('getGrade geeft Excellent bij 90%+', () => {
    // 9 van 10 goed = 90%
    const answers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 10 },
      { question: 3, isCorrect: true, points: 10 },
      { question: 4, isCorrect: true, points: 10 },
      { question: 5, isCorrect: true, points: 10 },
      { question: 6, isCorrect: true, points: 10 },
      { question: 7, isCorrect: true, points: 10 },
      { question: 8, isCorrect: true, points: 10 },
      { question: 9, isCorrect: true, points: 10 },
      { question: 10, isCorrect: false, points: 0 }
    ];
    expect(getGrade(answers)).toBe('Excellent');
  });

  test('getGrade geeft Goed bij 75-89%', () => {
    // quizAnswers = 80% goed
    expect(getGrade(quizAnswers)).toBe('Goed');
  });

  test('countWrongAnswers telt foute antwoorden', () => {
    // quizAnswers = 1 fout antwoord
    expect(countWrongAnswers(quizAnswers)).toBe(1);
  });

});
