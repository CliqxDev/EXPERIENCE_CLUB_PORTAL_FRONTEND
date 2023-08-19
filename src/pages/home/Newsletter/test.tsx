import { render, screen } from '@testing-library/react';

import Newsletter from '.';

describe('<Newsletter />', () => {
  it('should render the heading', () => {
    render(<Newsletter />);

    expect(
      screen.getByRole('heading', { name: /Newsletter/i })
    ).toBeInTheDocument();
  });
});
