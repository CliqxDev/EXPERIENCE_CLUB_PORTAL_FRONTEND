'use client';

import FormLayout from 'components/ui/FormLayout';
import PlanPage from 'pages-components/plan/PlanPage';

export default function Page() {
  return (
    <FormLayout variant="simple" onRedirectPath="/">
      <PlanPage />
    </FormLayout>
  );
}
