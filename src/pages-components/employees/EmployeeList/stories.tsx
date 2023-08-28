import { Meta, Story } from '@storybook/react';

import EmployeeList from '.';

export default {
  title: 'EmployeeList ',
  component: EmployeeList
} as Meta;

export const Default: Story = () => <EmployeeList />;
