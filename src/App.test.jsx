import { render, screen } from '@testing-library/react';
import App from './apps/App';

test('renders learn react link', () => {
  render(<App />);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});