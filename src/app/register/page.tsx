'use client';

import FormLayout from 'components/ui/FormLayout';
import Register from 'pages-components/register/Register';

export default function RegisterPage() {
  return (
    <FormLayout variant="simple" onRedirectPath="/">
      <Register />
    </FormLayout>
  );
}
