/* eslint-disable react/no-children-prop */
import { render, screen } from '@testing-library/react';

import EmployeeConfirm from '.';

describe('<EmployeeConfirm />', () => {
  it('should render the heading', () => {
    render(<EmployeeConfirm children={<></>} />);

    expect(
      screen.getByRole('heading', { name: /EmployeeConfirm/i })
    ).toBeInTheDocument();
  });
});
