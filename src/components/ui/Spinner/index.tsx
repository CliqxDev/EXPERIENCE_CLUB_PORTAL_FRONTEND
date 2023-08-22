import React, { ReactNode, FC } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FirstChild } from './FirstChild';
import * as S from './styles';

type Props = {
  children: ReactNode;
  active: boolean;
};

export const Spinner: FC<Props> = ({ active, children }) => {
  let loadNode = active && (
    <CSSTransition
      appear
      classNames="loading-overlay-transition"
      timeout={{ enter: 500, exit: 500 }}
    >
      <S.Overlay>
        <S.Content>
          <S.StyledSpinner>
            <S.SpinnerSvg viewBox="25 25 50 50">
              <S.SpinnerCircle
                cx="50"
                cy="50"
                r="20"
                fill="none"
                strokeWidth="2"
                strokeMiterlimit="10"
                color="#ffffff"
              />
            </S.SpinnerSvg>
          </S.StyledSpinner>
        </S.Content>
      </S.Overlay>
    </CSSTransition>
  );

  loadNode = (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <TransitionGroup appear component={FirstChild}>
      {loadNode}
    </TransitionGroup>
  );

  return (
    <S.Container
      overflow={active ? 'visibility' : 'hidden'}
      className="loading-overlay"
    >
      {children}
      {loadNode}
    </S.Container>
  );
};
