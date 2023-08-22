'use client';

import EmailVerify from 'components/EmailVerify';
import FormLayout from 'components/ui/FormLayout';

export default function Page() {
  return (
    <FormLayout onRedirectPath="/">
      <EmailVerify>
        <h2>
          Enviamos o link para seu e-mail, <br />
          confirme a criação de sua conta.
        </h2>
      </EmailVerify>
    </FormLayout>
  );
}
