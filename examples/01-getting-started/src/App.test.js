import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello React/i);
  expect(textElement).toBeInTheDocument();
});
