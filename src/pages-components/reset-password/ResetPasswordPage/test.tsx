import { render, screen } from '@testing-library/react';

import ResetPasswordPage from '.';

describe('<ResetPasswordPage />', () => {
  it('should render the heading', () => {
    render(<ResetPasswordPage />);

    expect(
      screen.getByRole('heading', { name: /ResetPasswordPage/i })
    ).toBeInTheDocument();
  });
});
