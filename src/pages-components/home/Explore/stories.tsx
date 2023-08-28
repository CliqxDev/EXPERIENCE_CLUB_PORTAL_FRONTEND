import { Meta, Story } from '@storybook/react';

import Explore from '.';

export default {
  title: 'Explore ',
  component: Explore
} as Meta;

export const Default: Story = () => <Explore variant="default" title="" />;
