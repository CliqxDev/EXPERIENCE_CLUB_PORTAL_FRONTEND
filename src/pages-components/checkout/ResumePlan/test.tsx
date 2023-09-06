import { render, screen } from '@testing-library/react';

import ResumePlan from '.';

describe('<ResumePlan />', () => {
  it('should render the heading', () => {
    render(<ResumePlan />);

    expect(
      screen.getByRole('heading', { name: /ResumePlan/i })
    ).toBeInTheDocument();
  });
});
