import { render, screen } from '@testing-library/react';

import DeleteAccount from '.';

describe('<DeleteAccount />', () => {
  it('should render the heading', () => {
    render(<DeleteAccount />);

    expect(
      screen.getByRole('heading', { name: /DeleteAccount/i })
    ).toBeInTheDocument();
  });
});
