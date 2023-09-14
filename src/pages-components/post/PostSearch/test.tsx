import { render, screen } from '@testing-library/react';

import PostSearch from '.';

describe('<PostSearch />', () => {
  it('should render the heading', () => {
    render(<PostSearch />);

    expect(
      screen.getByRole('heading', { name: /PostSearch/i })
    ).toBeInTheDocument();
  });
});
