'use client';

import FormLayout from 'components/FormLayout';
import SigIn from 'components/SigIn';

export default function Home() {
  return (
    <FormLayout onRedirectPath="/">
      <SigIn />
    </FormLayout>
  );
}
