import { Meta, Story } from '@storybook/react';

import ShareDialog from '.';

export default {
  title: 'ShareDialog ',
  component: ShareDialog
} as Meta;

export const Default: Story = () => <ShareDialog id="" onClose={() => {}} />;
