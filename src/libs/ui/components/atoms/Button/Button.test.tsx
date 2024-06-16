// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { AbvButton } from './Button';

// test('renders button with correct label', () => {
//   render(<AbvButton label="Test Button" />);
//   expect(screen.getByText('Test Button')).toBeInTheDocument();
// });

// test('button has correct type class', () => {
//   render(<AbvButton label="Test Button" type="primary" />);
//   expect(screen.getByText('Test Button')).toHaveClass('btn-primary');
// });

// test('button click triggers onClick handler', () => {
//   const handleClick = jest.fn();
//   render(<AbvButton label="Test Button" onClick={handleClick} />);
//   fireEvent.click(screen.getByText('Test Button'));
//   expect(handleClick).toHaveBeenCalledTimes(1);
// });

// test('disabled button does not trigger onClick handler', () => {
//   const handleClick = jest.fn();
//   render(<AbvButton label="Test Button" onClick={handleClick} disabled />);
//   fireEvent.click(screen.getByText('Test Button'));
//   expect(handleClick).not.toHaveBeenCalled();
// });

// test('applies custom class', () => {
//   render(<AbvButton label="Test Button" className="custom-class" />);
//   expect(screen.getByText('Test Button')).toHaveClass('custom-class');
// });
