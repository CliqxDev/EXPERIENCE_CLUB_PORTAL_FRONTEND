import { Meta } from '@storybook/react';

import SearchMenu from '.';

export default {
  title: 'SearchMenu ',
  component: SearchMenu
} as Meta;

export const Default = () => <SearchMenu onClose={() => {}} />;
