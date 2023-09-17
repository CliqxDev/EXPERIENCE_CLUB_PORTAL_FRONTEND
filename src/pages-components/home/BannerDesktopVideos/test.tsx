import { render, screen } from '@testing-library/react';

import BannerDesktopVideos from '.';

describe('<BannerDesktopVideos />', () => {
  it('should render the heading', () => {
    render(<BannerDesktopVideos />);

    expect(
      screen.getByRole('heading', { name: /BannerDesktopVideos/i })
    ).toBeInTheDocument();
  });
});
