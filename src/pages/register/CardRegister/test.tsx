import { render, screen } from '@testing-library/react';

import CardRegister from '.';

describe('<CardRegister />', () => {
  it('should render the heading', () => {
    render(<CardRegister />);

    expect(
      screen.getByRole('heading', { name: /CardRegister/i })
    ).toBeInTheDocument();
  });
});
