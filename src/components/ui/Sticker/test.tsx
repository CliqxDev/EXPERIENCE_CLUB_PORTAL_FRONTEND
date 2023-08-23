import { render, screen } from '@testing-library/react';

import Sticker from '.';

describe('<Sticker />', () => {
  it('should render the heading', () => {
    render(<Sticker />);

    expect(
      screen.getByRole('heading', { name: /Sticker/i })
    ).toBeInTheDocument();
  });
});
