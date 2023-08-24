import { Meta, Story } from '@storybook/react';

import Dialog from '.';

export default {
  title: 'Dialog ',
  component: Dialog
} as Meta;

export const Default: Story = () => (
  <Dialog show onClose={() => {}}>
    ssd
  </Dialog>
);
