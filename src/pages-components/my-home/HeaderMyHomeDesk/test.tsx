import { render, screen } from '@testing-library/react';

import HeaderMyHomeDesk from '.';

describe('<HeaderMyHomeDesk />', () => {
  it('should render the heading', () => {
    render(<HeaderMyHomeDesk />);

    expect(
      screen.getByRole('heading', { name: /HeaderMyHomeDesk/i })
    ).toBeInTheDocument();
  });
});
