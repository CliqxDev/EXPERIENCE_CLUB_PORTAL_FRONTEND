import { render, screen } from '@testing-library/react';

import LibraryMyHome from '.';

describe('<LibraryMyHome />', () => {
  it('should render the heading', () => {
    render(<LibraryMyHome />);

    expect(
      screen.getByRole('heading', { name: /LibraryMyHome/i })
    ).toBeInTheDocument();
  });
});
