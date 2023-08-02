import { Meta, Story } from '@storybook/react';

import Checkbox from '.';

export default {
  title: 'Checkbox ',
  component: Checkbox
} as Meta;

export const Default: Story = () => <Checkbox onChangeChecked={()=>{}}>Lembrar-me</Checkbox>;
