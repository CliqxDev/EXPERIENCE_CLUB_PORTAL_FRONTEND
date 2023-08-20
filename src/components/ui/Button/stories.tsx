import { Meta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Button ',
  component: Button
} as Meta;

export const Default = () => <Button onClick={() => {}}>Test</Button>;
