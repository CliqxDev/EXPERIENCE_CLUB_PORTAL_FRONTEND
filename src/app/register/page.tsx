'use client';

import FormLayout from 'components/ui/FormLayout';
import Register from 'pages/register/Register';

export default function RegisterPage() {
  return (
    <FormLayout onRedirectPath="/">
      <Register />
    </FormLayout>
  );
}
