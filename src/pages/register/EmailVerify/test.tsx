import { render, screen } from '@testing-library/react';

import EmailVerify from '.';

describe('<EmailVerify />', () => {
  it('should render the heading', () => {
    render(<EmailVerify />);

    expect(
      screen.getByRole('heading', { name: /EmailVerify/i })
    ).toBeInTheDocument();
  });
});
