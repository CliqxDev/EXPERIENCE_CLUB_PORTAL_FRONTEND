'use client';

import FormLayout from 'components/ui/FormLayout';
import FormPersonalData from 'pages-components/register/FormPersonalData';

export default function EmailPage() {

  return (
    <FormLayout onRedirectPath="/register-plan" variant="simple">
      <FormPersonalData />
    </FormLayout>
  );
}
