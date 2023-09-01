import { Meta, Story } from '@storybook/react';

import CardLimitedRead from '.';

export default {
  title: 'CardLimitedRead ',
  component: CardLimitedRead
} as Meta;

export const Default: Story = () => <CardLimitedRead title='asd' titleCard='asd' variant='sigin' />;
