import { render, screen } from '@testing-library/react';

import InfoCardColumnist from '.';

describe('<InfoCardColumnist />', () => {
  it('should render the heading', () => {
    render(<InfoCardColumnist />);

    expect(
      screen.getByRole('heading', { name: /InfoCardColumnist/i })
    ).toBeInTheDocument();
  });
});
