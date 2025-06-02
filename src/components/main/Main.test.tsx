import { render, screen } from '@testing-library/react';
import { Main } from './Main';

describe('Main', () => {
  it('should render Main', () => {
    render(<Main />);

    const mainElement = screen.getByTestId('main');

    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveClass('main');
  })
});
