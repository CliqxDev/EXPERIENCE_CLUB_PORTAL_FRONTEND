import { render, screen } from '@testing-library/react';

import CardLimitedRead from '.';

describe('<CardLimitedRead />', () => {
  it('should render the heading', () => {
    render(<CardLimitedRead />);

    expect(
      screen.getByRole('heading', { name: /CardLimitedRead/i })
    ).toBeInTheDocument();
  });
});
