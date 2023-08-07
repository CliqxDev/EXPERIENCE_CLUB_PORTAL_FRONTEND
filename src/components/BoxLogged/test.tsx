import { render, screen } from '@testing-library/react';

import BoxLogged from '.';

describe('<BoxLogged />', () => {
  it('should render the heading', () => {
    render(<BoxLogged />);

    expect(
      screen.getByRole('heading', { name: /BoxLogged/i })
    ).toBeInTheDocument();
  });
});
