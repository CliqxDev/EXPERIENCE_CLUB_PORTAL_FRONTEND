'use client';

import FormLayout from 'components/FormLayout';
import FormPersonalData from 'components/FormPersonalData';

export default function Step1Page() {
  return (
    <FormLayout onRedirectPath="/register" variant="simple">
      <FormPersonalData />
    </FormLayout>
  );
}
