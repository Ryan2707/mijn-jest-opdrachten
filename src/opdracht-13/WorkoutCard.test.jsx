import { render, screen, fireEvent } from '@testing-library/react';
import WorkoutCard from './WorkoutCard';

describe('WorkoutCard Component (TDD)', () => {

  const mockWorkout = {
    _id: '123',
    title: 'Squats',
    reps: 10,
    load: 50
  };

  describe('Rendering', () => {
    test('toont workout title', () => {
      render(<WorkoutCard workout={mockWorkout} />);
      expect(screen.getByText('Squats')).toBeInTheDocument();
    });

    test('toont reps met label', () => {
      render(<WorkoutCard workout={mockWorkout} />);
      expect(screen.getByText(/10.*reps/i)).toBeInTheDocument();
    });

    test('toont load met label', () => {
      render(<WorkoutCard workout={mockWorkout} />);
      expect(screen.getByText(/50.*kg/i)).toBeInTheDocument();
    });

    test('toont 0 kg voor bodyweight exercises', () => {
      const bodyweight = { _id: '456', title: 'Push ups', reps: 20, load: 0 };
      render(<WorkoutCard workout={bodyweight} />);
      expect(screen.getByText(/0.*kg/i)).toBeInTheDocument();
    });
  });

  describe('Delete functionaliteit', () => {
    test('toont delete button', () => {
      render(<WorkoutCard workout={mockWorkout} />);
      const deleteBtn = screen.getByRole('button', { name: /delete|verwijder/i });
      expect(deleteBtn).toBeInTheDocument();
    });

    test('roept onDelete aan met workout id bij klik', () => {
      const mockOnDelete = jest.fn();
      render(<WorkoutCard workout={mockWorkout} onDelete={mockOnDelete} />);
      
      const deleteBtn = screen.getByRole('button', { name: /delete|verwijder/i });
      fireEvent.click(deleteBtn);
      
      expect(mockOnDelete).toHaveBeenCalledWith('123');
    });

    test('roept onDelete niet aan als prop ontbreekt', () => {
      // Mag niet crashen zonder onDelete prop
      render(<WorkoutCard workout={mockWorkout} />);
      const deleteBtn = screen.getByRole('button', { name: /delete|verwijder/i });
      
      // Klikken mag geen error geven
      expect(() => fireEvent.click(deleteBtn)).not.toThrow();
    });
  });

  describe('Styling classes', () => {
    test('heeft workout-card class', () => {
      const { container } = render(<WorkoutCard workout={mockWorkout} />);
      expect(container.querySelector('.workout-card')).toBeInTheDocument();
    });
  });

});
