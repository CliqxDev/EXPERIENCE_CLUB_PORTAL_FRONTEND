import { render, screen } from '@testing-library/react';

import Trails from '.';

describe('<Trails />', () => {
  it('should render the heading', () => {
    render(<Trails />);

    expect(
      screen.getByRole('heading', { name: /Trails/i })
    ).toBeInTheDocument();
  });
});
