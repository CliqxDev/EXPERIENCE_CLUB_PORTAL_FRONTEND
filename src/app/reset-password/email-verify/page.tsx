'use client';

import EmailVerify from 'components/EmailVerify';
import FormLayout from 'components/ui/FormLayout';

export default function Page() {
  return (
    <FormLayout variant="bottom" onRedirectPath="/reset-password">
      <EmailVerify>
        <h2>
          Enviamos o link para seu e-mail, <br />
          confira para recuperar sua senha.
        </h2>
      </EmailVerify>
    </FormLayout>
  );
}
