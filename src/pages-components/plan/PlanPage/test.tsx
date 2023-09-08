import { render, screen } from '@testing-library/react';

import PlanPage from '.';

describe('<PlanPage />', () => {
  it('should render the heading', () => {
    render(<PlanPage />);

    expect(
      screen.getByRole('heading', { name: /PlanPage/i })
    ).toBeInTheDocument();
  });
});
