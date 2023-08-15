import { render, screen } from '@testing-library/react';

import PasswordRules from '.';

describe('<PasswordRules />', () => {
  it('should render the heading', () => {
    render(<PasswordRules />);

    expect(
      screen.getByRole('heading', { name: /PasswordRules/i })
    ).toBeInTheDocument();
  });
});
