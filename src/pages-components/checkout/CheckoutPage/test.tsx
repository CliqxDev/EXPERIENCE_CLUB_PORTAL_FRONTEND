import { render, screen } from '@testing-library/react';

import CheckoutPage from '.';

describe('<CheckoutPage />', () => {
  it('should render the heading', () => {
    render(<CheckoutPage />);

    expect(
      screen.getByRole('heading', { name: /CheckoutPage/i })
    ).toBeInTheDocument();
  });
});
