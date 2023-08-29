import { render, screen } from '@testing-library/react';

import ShareDialog from '.';

describe('<ShareDialog />', () => {
  it('should render the heading', () => {
    render(<ShareDialog />);

    expect(
      screen.getByRole('heading', { name: /ShareDialog/i })
    ).toBeInTheDocument();
  });
});
