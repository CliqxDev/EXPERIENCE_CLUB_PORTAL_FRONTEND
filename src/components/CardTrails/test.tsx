import { render, screen } from '@testing-library/react';

import CardTrails from '.';

describe('<CardTrails />', () => {
  it('should render the heading', () => {
    render(<CardTrails />);

    expect(
      screen.getByRole('heading', { name: /CardTrails/i })
    ).toBeInTheDocument();
  });
});
