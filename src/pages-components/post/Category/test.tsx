import { render, screen } from '@testing-library/react';

import Category from '.';

describe('<Category />', () => {
  it('should render the heading', () => {
    render(<Category />);

    expect(
      screen.getByRole('heading', { name: /Category/i })
    ).toBeInTheDocument();
  });
});
