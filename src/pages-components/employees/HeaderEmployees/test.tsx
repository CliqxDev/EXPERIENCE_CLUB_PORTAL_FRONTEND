import { render, screen } from '@testing-library/react';

import HeaderEmployees from '.';

describe('<HeaderEmployees />', () => {
  it('should render the heading', () => {
    render(<HeaderEmployees />);

    expect(
      screen.getByRole('heading', { name: /HeaderEmployees/i })
    ).toBeInTheDocument();
  });
});
