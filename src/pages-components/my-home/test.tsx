import { render, screen } from '@testing-library/react';

import MyHome from '.';

describe('<MyHome />', () => {
  it('should render the heading', () => {
    render(<MyHome />);

    expect(
      screen.getByRole('heading', { name: /MyHome/i })
    ).toBeInTheDocument();
  });
});
