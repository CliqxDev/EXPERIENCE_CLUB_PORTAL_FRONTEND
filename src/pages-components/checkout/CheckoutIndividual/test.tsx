import { render, screen } from '@testing-library/react';

import CheckoutIndividual from '.';

describe('<CheckoutIndividual />', () => {
  it('should render the heading', () => {
    render(<CheckoutIndividual />);

    expect(
      screen.getByRole('heading', { name: /CheckoutIndividual/i })
    ).toBeInTheDocument();
  });
});
