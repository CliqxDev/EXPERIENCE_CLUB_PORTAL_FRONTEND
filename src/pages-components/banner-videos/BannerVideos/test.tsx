import { render, screen } from '@testing-library/react';

import BannerVideos from '.';

describe('<BannerVideos />', () => {
  it('should render the heading', () => {
    render(<BannerVideos />);

    expect(
      screen.getByRole('heading', { name: /BannerVideos/i })
    ).toBeInTheDocument();
  });
});
