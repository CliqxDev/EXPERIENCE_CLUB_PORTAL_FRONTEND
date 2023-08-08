import { render, screen } from '@testing-library/react';

import FormError from '.';

describe('<FormError />', () => {
  it('should render the heading', () => {
    render(<FormError />);

    expect(
      screen.getByRole('heading', { name: /FormError/i })
    ).toBeInTheDocument();
  });
});
