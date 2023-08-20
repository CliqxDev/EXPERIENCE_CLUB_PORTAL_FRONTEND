import { render, screen } from '@testing-library/react';

import ResetPasswordConfirmationPage from '.';

describe('<ResetPasswordConfirmationPage />', () => {
  it('should render the heading', () => {
    render(<ResetPasswordConfirmationPage />);

    expect(
      screen.getByRole('heading', { name: /ResetPasswordConfirmationPage/i })
    ).toBeInTheDocument();
  });
});
