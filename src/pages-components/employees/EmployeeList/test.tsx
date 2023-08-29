import { render, screen } from '@testing-library/react';

import EmployeeList from '.';

describe('<EmployeeList />', () => {
  it('should render the heading', () => {
    render(<EmployeeList />);

    expect(
      screen.getByRole('heading', { name: /EmployeeList/i })
    ).toBeInTheDocument();
  });
});
