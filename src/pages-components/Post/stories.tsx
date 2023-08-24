import { Meta, Story } from '@storybook/react';

import Post from '.';

export default {
  title: 'Post ',
  component: Post
} as Meta;

export const Default: Story = () => <Post />;
