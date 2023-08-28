import { render, screen } from '@testing-library/react';

import AddNewEmployee from '.';

describe('<AddNewEmployee />', () => {
  it('should render the heading', () => {
    render(<AddNewEmployee />);

    expect(
      screen.getByRole('heading', { name: /AddNewEmployee/i })
    ).toBeInTheDocument();
  });
});
