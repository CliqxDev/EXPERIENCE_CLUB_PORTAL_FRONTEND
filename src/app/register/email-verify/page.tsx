'use client';

import EmailVerify from 'pages/register/EmailVerify';
import FormLayout from 'components/FormLayout';

export default function EmailVerifyPage() {
  return (
    <FormLayout onRedirectPath="/">
      <EmailVerify />
    </FormLayout>
  );
}
