import { render, screen } from '@testing-library/react';

import FormPersonalData from '.';

describe('<FormPersonalData />', () => {
  it('should render the heading', () => {
    render(<FormPersonalData />);

    expect(
      screen.getByRole('heading', { name: /FormPersonalData/i })
    ).toBeInTheDocument();
  });
});
