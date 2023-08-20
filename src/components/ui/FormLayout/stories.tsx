import { Meta } from '@storybook/react';

import FormLayout from '.';

export default {
  title: 'FormLayout ',
  component: FormLayout
} as Meta;

export const Default = () => (
  <FormLayout onRedirectPath="/" >teste</FormLayout>
);
