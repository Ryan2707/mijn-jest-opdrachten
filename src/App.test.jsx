import { render, screen } from '@testing-library/react';
import App from './App';

test('App component rendert', () => {
  render(<App />);
  
  // Check of er iets op het scherm staat
  const element = screen.getByText(/vite/i);
  expect(element).toBeInTheDocument();
});