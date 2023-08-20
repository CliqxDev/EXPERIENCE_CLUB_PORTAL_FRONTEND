import { Children, FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const FirstChild: FC<Props> = ({ children }) =>
  Children.toArray(children)[0] || null;
