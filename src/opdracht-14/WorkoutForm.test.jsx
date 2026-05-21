import { render, screen, fireEvent } from '@testing-library/react';
import WorkoutForm from './WorkoutForm';

describe('WorkoutForm Component (TDD)', () => {

  describe('Form fields', () => {
    test('toont title input field', () => {
      render(<WorkoutForm />);
      const input = screen.getByPlaceholderText(/title|oefening/i);
      expect(input).toBeInTheDocument();
    });

    test('toont reps input field', () => {
      render(<WorkoutForm />);
      const input = screen.getByPlaceholderText(/reps|herhalingen/i);
      expect(input).toBeInTheDocument();
    });

    test('toont load input field', () => {
      render(<WorkoutForm />);
      const input = screen.getByPlaceholderText(/load|gewicht|kg/i);
      expect(input).toBeInTheDocument();
    });

    test('toont submit button', () => {
      render(<WorkoutForm />);
      const button = screen.getByRole('button', { name: /add|toevoegen|submit/i });
      expect(button).toBeInTheDocument();
    });
  });

  describe('Input handling', () => {
    test('title input werkt', () => {
      render(<WorkoutForm />);
      const input = screen.getByPlaceholderText(/title|oefening/i);
      
      fireEvent.change(input, { target: { value: 'Squats' } });
      
      expect(input.value).toBe('Squats');
    });

    test('reps input werkt', () => {
      render(<WorkoutForm />);
      const input = screen.getByPlaceholderText(/reps|herhalingen/i);
      
      fireEvent.change(input, { target: { value: '10' } });
      
      expect(input.value).toBe('10');
    });

    test('load input werkt', () => {
      render(<WorkoutForm />);
      const input = screen.getByPlaceholderText(/load|gewicht|kg/i);
      
      fireEvent.change(input, { target: { value: '50' } });
      
      expect(input.value).toBe('50');
    });
  });

  describe('Form submit', () => {
    test('roept onSubmit aan met workout data', () => {
      const mockOnSubmit = jest.fn();
      render(<WorkoutForm onSubmit={mockOnSubmit} />);
      
      // Vul form in
      fireEvent.change(screen.getByPlaceholderText(/title|oefening/i), { 
        target: { value: 'Push ups' } 
      });
      fireEvent.change(screen.getByPlaceholderText(/reps|herhalingen/i), { 
        target: { value: '20' } 
      });
      fireEvent.change(screen.getByPlaceholderText(/load|gewicht|kg/i), { 
        target: { value: '0' } 
      });
      
      // Submit
      const button = screen.getByRole('button', { name: /add|toevoegen|submit/i });
      fireEvent.click(button);
      
      expect(mockOnSubmit).toHaveBeenCalledWith({
        title: 'Push ups',
        reps: 20,
        load: 0
      });
    });

    test('converted reps en load naar numbers', () => {
      const mockOnSubmit = jest.fn();
      render(<WorkoutForm onSubmit={mockOnSubmit} />);
      
      fireEvent.change(screen.getByPlaceholderText(/title|oefening/i), { 
        target: { value: 'Test' } 
      });
      fireEvent.change(screen.getByPlaceholderText(/reps|herhalingen/i), { 
        target: { value: '5' } 
      });
      fireEvent.change(screen.getByPlaceholderText(/load|gewicht|kg/i), { 
        target: { value: '25' } 
      });
      
      fireEvent.click(screen.getByRole('button'));
      
      const callArg = mockOnSubmit.mock.calls[0][0];
      expect(typeof callArg.reps).toBe('number');
      expect(typeof callArg.load).toBe('number');
    });

    test('maakt form leeg na submit', () => {
      render(<WorkoutForm onSubmit={jest.fn()} />);
      
      const titleInput = screen.getByPlaceholderText(/title|oefening/i);
      const repsInput = screen.getByPlaceholderText(/reps|herhalingen/i);
      
      fireEvent.change(titleInput, { target: { value: 'Test' } });
      fireEvent.change(repsInput, { target: { value: '10' } });
      fireEvent.change(screen.getByPlaceholderText(/load|gewicht|kg/i), { 
        target: { value: '50' } 
      });
      
      fireEvent.click(screen.getByRole('button'));
      
      expect(titleInput.value).toBe('');
      expect(repsInput.value).toBe('');
    });
  });

  describe('Validatie', () => {
    test('submit niet mogelijk met lege title', () => {
      const mockOnSubmit = jest.fn();
      render(<WorkoutForm onSubmit={mockOnSubmit} />);
      
      // Alleen reps en load invullen, title leeg laten
      fireEvent.change(screen.getByPlaceholderText(/reps|herhalingen/i), { 
        target: { value: '10' } 
      });
      fireEvent.change(screen.getByPlaceholderText(/load|gewicht|kg/i), { 
        target: { value: '50' } 
      });
      
      fireEvent.click(screen.getByRole('button'));
      
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    test('toont error bij lege title', () => {
      render(<WorkoutForm onSubmit={jest.fn()} />);
      
      fireEvent.change(screen.getByPlaceholderText(/reps|herhalingen/i), { 
        target: { value: '10' } 
      });
      
      fireEvent.click(screen.getByRole('button'));
      
      expect(screen.getByText(/title.*required|titel.*verplicht/i)).toBeInTheDocument();
    });
  });

});
