import { render, screen } from '@testing-library/react';

import SearchMenu from '.';

describe('<SearchMenu />', () => {
  it('should render the heading', () => {
    render(<SearchMenu />);

    expect(
      screen.getByRole('heading', { name: /SearchMenu/i })
    ).toBeInTheDocument();
  });
});
