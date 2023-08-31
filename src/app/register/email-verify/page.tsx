'use client';

import EmailVerify from 'components/EmailVerify';
import FormLayout from 'components/ui/FormLayout';

export default function EmailVerifyPage() {
  return (
    <>
      <FormLayout onRedirectPath="/">
        <EmailVerify>
          <h2>
            Confirme a criação da sua conta <br /> clicando no link enviado.
          </h2>
        </EmailVerify>
      </FormLayout>
    </>
  );
}
