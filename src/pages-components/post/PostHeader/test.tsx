import { render, screen } from '@testing-library/react';

import PostHeader from '.';

describe('<PostHeader />', () => {
  it('should render the heading', () => {
    render(<PostHeader />);

    expect(
      screen.getByRole('heading', { name: /PostHeader/i })
    ).toBeInTheDocument();
  });
});
