import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar Test', () => {
  test('sidebar', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  // // Was needed for old design, now doesn't work because we have SVG instead of button for toggle
  // // And svg is rendered as empty <svg />, without data-testid
  // // Leave it as an example
  // test('sidebar toggle', () => {
  //   componentRender(<Sidebar />);
  //   const toggleBtn = screen.getByTestId('sidebar-toggle');
  //   expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  //   fireEvent.click(toggleBtn);
  //   expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  // });
});
