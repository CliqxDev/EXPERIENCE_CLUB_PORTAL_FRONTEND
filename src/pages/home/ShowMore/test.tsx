import { render, screen } from '@testing-library/react';

import ShowMore from '.';

describe('<ShowMore />', () => {
  it('should render the heading', () => {
    render(<ShowMore />);

    expect(
      screen.getByRole('heading', { name: /ShowMore/i })
    ).toBeInTheDocument();
  });
});
