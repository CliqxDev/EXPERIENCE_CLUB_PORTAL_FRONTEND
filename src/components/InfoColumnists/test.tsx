import { render, screen } from '@testing-library/react';

import InfoColumnists from '.';

describe('<InfoColumnists />', () => {
  it('should render the heading', () => {
    render(<InfoColumnists />);

    expect(
      screen.getByRole('heading', { name: /InfoColumnists/i })
    ).toBeInTheDocument();
  });
});
