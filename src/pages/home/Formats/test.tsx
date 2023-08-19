import { render, screen } from '@testing-library/react';

import Formats from '.';

describe('<Formats />', () => {
  it('should render the heading', () => {
    render(<Formats />);

    expect(
      screen.getByRole('heading', { name: /Formats/i })
    ).toBeInTheDocument();
  });
});
