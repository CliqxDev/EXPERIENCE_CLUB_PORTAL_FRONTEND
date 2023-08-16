'use client';

import FormLayout from 'components/FormLayout';
import Register from 'components/Register';

export default function RegisterPage() {
  return (
    <FormLayout variant="simple" onRedirectPath="/">
      <Register />
    </FormLayout>
  );
}
