import { render, screen } from '@testing-library/react';

import Skeleton from '.';

describe('<Skeleton />', () => {
  it('should render the heading', () => {
    render(<Skeleton />);

    expect(
      screen.getByRole('heading', { name: /Skeleton/i })
    ).toBeInTheDocument();
  });
});
