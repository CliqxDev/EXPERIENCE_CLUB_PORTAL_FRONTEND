import { render, screen } from '@testing-library/react';

import TrailsMyHome from '.';

describe('<TrailsMyHome />', () => {
  it('should render the heading', () => {
    render(<TrailsMyHome />);

    expect(
      screen.getByRole('heading', { name: /TrailsMyHome/i })
    ).toBeInTheDocument();
  });
});
