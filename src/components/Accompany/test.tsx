import { render, screen } from '@testing-library/react';

import Accompany from '.';

describe('<Accompany />', () => {
  it('should render the heading', () => {
    render(<Accompany />);

    expect(
      screen.getByRole('heading', { name: /Accompany/i })
    ).toBeInTheDocument();
  });
});
