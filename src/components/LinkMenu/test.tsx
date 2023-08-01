import { render, screen } from '@testing-library/react';

import LinkMenu from '.';

describe('<LinkMenu />', () => {
  it('should render the heading', () => {
    render(<LinkMenu />);

    expect(
      screen.getByRole('heading', { name: /LinkMenu/i })
    ).toBeInTheDocument();
  });
});
