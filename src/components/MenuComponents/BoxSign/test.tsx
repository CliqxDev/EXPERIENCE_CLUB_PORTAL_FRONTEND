import { render, screen } from '@testing-library/react';

import BoxSign from '.';

describe('<BoxSign />', () => {
  it('should render the heading', () => {
    render(<BoxSign />);

    expect(
      screen.getByRole('heading', { name: /BoxSign/i })
    ).toBeInTheDocument();
  });
});
