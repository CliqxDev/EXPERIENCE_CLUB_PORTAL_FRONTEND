import { render, screen } from '@testing-library/react';

import SlideCarousel from '.';

describe('<SlideCarousel />', () => {
  it('should render the heading', () => {
    render(<SlideCarousel />);

    expect(
      screen.getByRole('heading', { name: /SlideCarousel/i })
    ).toBeInTheDocument();
  });
});
