import { render, screen } from '@testing-library/react';

import EmailVerify from '.';

describe('<EmailVerify />', () => {
  it('should render the heading', () => {
    render(
      <EmailVerify>
        <h2>
          Enviamos o link para seu e-mail, <br />
          confirme a criação de sua conta.
        </h2>
      </EmailVerify>
    );

    expect(
      screen.getByRole('heading', { name: /EmailVerify/i })
    ).toBeInTheDocument();
  });
});
