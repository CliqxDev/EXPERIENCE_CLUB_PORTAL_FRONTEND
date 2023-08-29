import { render, screen } from '@testing-library/react';

import EmployeeInfo from '.';

describe('<EmployeeInfo />', () => {
  it('should render the heading', () => {
    render(<EmployeeInfo />);

    expect(
      screen.getByRole('heading', { name: /EmployeeInfo/i })
    ).toBeInTheDocument();
  });
});
