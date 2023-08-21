import { render, screen } from '@testing-library/react';

import { CardRegisterRoot } from './CardRegisterRoot';

describe('<CardRegisterRoot />', () => {
  it('should render the heading', () => {
    render(<CardRegisterRoot />);

    expect(
      screen.getByRole('heading', { name: /CardRegisterRoot/i })
    ).toBeInTheDocument();
  });
});
