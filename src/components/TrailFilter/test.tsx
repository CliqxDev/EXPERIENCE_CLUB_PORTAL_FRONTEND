import { render, screen } from '@testing-library/react';

import TrailFilter from '.';

describe('<TrailFilter />', () => {
  it('should render the heading', () => {
    render(<TrailFilter />);

    expect(
      screen.getByRole('heading', { name: /TrailFilter/i })
    ).toBeInTheDocument();
  });
});
