import { Meta, Story } from '@storybook/react';

import Menu from '.';

export default {
  title: 'Menu ',
  component: Menu
} as Meta;

export const Default: Story = () => <Menu onClose={() => {}} />;
