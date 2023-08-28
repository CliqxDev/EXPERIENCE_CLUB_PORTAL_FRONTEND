import { render, screen } from '@testing-library/react';

import EmployeesPage from '.';

describe('<EmployeesPage />', () => {
  it('should render the heading', () => {
    render(<EmployeesPage />);

    expect(
      screen.getByRole('heading', { name: /EmployeesPage/i })
    ).toBeInTheDocument();
  });
});
