import { render, screen } from '@testing-library/react';

import Toaster from '.';

describe('<Toaster />', () => {
  it('should render the heading', () => {
    render(<Toaster variant="success" />);

    expect(
      screen.getByRole('heading', { name: /Toaster/i })
    ).toBeInTheDocument();
  });
});
