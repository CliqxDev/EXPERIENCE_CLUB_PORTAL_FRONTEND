import { render, screen } from '@testing-library/react';

import HeaderMyHome from '.';

describe('<HeaderMyHome />', () => {
  it('should render the heading', () => {
    render(<HeaderMyHome />);

    expect(
      screen.getByRole('heading', { name: /HeaderMyHome/i })
    ).toBeInTheDocument();
  });
});
