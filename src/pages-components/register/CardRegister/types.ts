import { ReactNode } from 'react';
import { Plan } from 'flux/modules/plan/types';

export type Variants = 'default' | 'dark' | 'gray' | 'lightDark' | 'white';

export type Sizes = 'sm' | 'md' | 'lg';

export type StyleProps = {
  variant?: Variants;
  size?: Sizes;
};

export type Props = StyleProps & {
  children?: ReactNode;
  forUserSpan?: string;
  style?: object;
  data?: Plan | null;
};
