import { render, screen } from '@testing-library/react';

import BannerDesktop from '.';

describe('<BannerDesktop />', () => {
  it('should render the heading', () => {
    render(<BannerDesktop />);

    expect(
      screen.getByRole('heading', { name: /BannerDesktop/i })
    ).toBeInTheDocument();
  });
});
