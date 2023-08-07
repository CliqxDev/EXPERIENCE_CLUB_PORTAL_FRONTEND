import { render, screen } from '@testing-library/react';

import Title from '.';

describe('<Title />', () => {
  it('should render the heading', () => {
    render(<Title />);

    expect(
      screen.getByRole('heading', { name: /Title/i })
    ).toBeInTheDocument();
  });
});
