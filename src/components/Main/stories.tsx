import { Meta, Story } from '@storybook/react';

import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Next Boilerplate',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
} as Meta;

export const Default: Story = args => <Main {...args} />;
