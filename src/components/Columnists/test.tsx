import { render, screen } from '@testing-library/react';

import Columnists from '.';

describe('<Columnists />', () => {
  it('should render the heading', () => {
    render(<Columnists />);

    expect(
      screen.getByRole('heading', { name: /Columnists/i })
    ).toBeInTheDocument();
  });
});
