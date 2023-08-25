import { render, screen } from '@testing-library/react';

import TrailsDesktop from '.';

describe('<TrailsDesktop />', () => {
  it('should render the heading', () => {
    render(<TrailsDesktop />);

    expect(
      screen.getByRole('heading', { name: /TrailsDesktop/i })
    ).toBeInTheDocument();
  });
});
