import { render, screen } from '@testing-library/react';

import CarouselDesktop from '.';

describe('<CarouselDesktop />', () => {
  it('should render the heading', () => {
    render(<CarouselDesktop />);

    expect(
      screen.getByRole('heading', { name: /CarouselDesktop/i })
    ).toBeInTheDocument();
  });
});
