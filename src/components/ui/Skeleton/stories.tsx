import { Meta, Story } from '@storybook/react';

import { SkeletonHome } from '.';

export default {
  title: 'SkeletonHome ',
  component: SkeletonHome
} as Meta;

export const Default: Story = () => <SkeletonHome />;
