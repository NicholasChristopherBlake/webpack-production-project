import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button Test', () => {
  test('newTests', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('with clear theme', () => {
    render(<Button variant="clear">TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
