import { render, screen } from '@testing-library/react';

import SlideCarouselDesktop from '.';

describe('<SlideCarouselDesktop />', () => {
  it('should render the heading', () => {
    render(<SlideCarouselDesktop />);

    expect(
      screen.getByRole('heading', { name: /SlideCarouselDesktop/i })
    ).toBeInTheDocument();
  });
});
