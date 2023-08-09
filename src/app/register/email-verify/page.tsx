'use client';

import EmailVerify from 'components/EmailVerify';
import FormLayout from 'components/FormLayout';

export default function EmailVerifyPage() {
  return (
    <FormLayout onRedirectPath="/">
      <EmailVerify />
    </FormLayout>
  );
}
