import { ReactNode } from 'react';

export type Variants = 'default' | 'dark' | 'gray' | 'lightDark';

export type Sizes = 'sm' | 'md' | 'lg';

export type StyleProps = {
  variant?: Variants;
  size?: Sizes;
};

export type Props = StyleProps & {
  children: ReactNode;
};
