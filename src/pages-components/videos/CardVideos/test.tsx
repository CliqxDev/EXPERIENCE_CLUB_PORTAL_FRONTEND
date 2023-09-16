import { render, screen } from '@testing-library/react';

import CardVideos from '.';

describe('<CardVideos />', () => {
  it('should render the heading', () => {
    render(<CardVideos />);

    expect(
      screen.getByRole('heading', { name: /CardVideos/i })
    ).toBeInTheDocument();
  });
});
