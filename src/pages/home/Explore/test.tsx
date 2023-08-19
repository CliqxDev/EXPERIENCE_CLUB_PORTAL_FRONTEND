import { render, screen } from '@testing-library/react';

import Explore from '.';

describe('<Explore />', () => {
  it('should render the heading', () => {
    render(<Explore />);

    expect(
      screen.getByRole('heading', { name: /Explore/i })
    ).toBeInTheDocument();
  });
});
