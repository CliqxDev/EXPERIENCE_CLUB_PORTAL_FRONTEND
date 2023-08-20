import { Meta, Story } from '@storybook/react';

import Toaster from '.';

export default {
  title: 'Toaster ',
  component: Toaster
} as Meta;

export const Default: Story = () => <Toaster variant="success" />;
