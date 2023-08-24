import { Meta, Story } from '@storybook/react';

import Sticker from '.';

export default {
  title: 'Sticker ',
  component: Sticker
} as Meta;

export const Default: Story = () => <Sticker bottom="10">teste</Sticker>;
