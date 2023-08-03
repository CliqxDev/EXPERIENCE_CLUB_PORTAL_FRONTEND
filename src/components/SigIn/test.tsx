import { render, screen } from '@testing-library/react';

import SigIn from '.';

describe('<SigIn />', () => {
  it('should render the heading', () => {
    render(<SigIn />);

    expect(
      screen.getByRole('heading', { name: /SigIn/i })
    ).toBeInTheDocument();
  });
});
