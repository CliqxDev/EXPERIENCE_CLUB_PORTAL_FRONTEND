import { Meta, Story } from '@storybook/react';

import PasswordRules from '.';

export default {
  title: 'PasswordRules ',
  component: PasswordRules
} as Meta;

export const Default: Story = () => <PasswordRules password='123' onChangePassword={() => {}} />;
