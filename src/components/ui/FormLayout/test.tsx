import { render, screen } from '@testing-library/react';

import FormLayout from '.';

describe('<FormLayout />', () => {
  it('should render the heading', () => {
    render(<FormLayout />);

    expect(
      screen.getByRole('heading', { name: /FormLayout/i })
    ).toBeInTheDocument();
  });
});
