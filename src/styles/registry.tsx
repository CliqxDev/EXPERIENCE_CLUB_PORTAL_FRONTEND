/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import React, { useEffect, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { clientInfo } from 'flux/modules/client/actions';
import { useSigIn } from 'hook/selectors/sigInHooks';
import { useAppDispatch } from 'hook/store';
import GlobalStyles from 'styles/global';
import { isAuthenticated } from 'utils/services/auth';

export default function StyledComponentsRegistry({
  children
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
  const { data } = useSigIn();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthenticated()) {
      dispatch(clientInfo.request());
    }
  }, [dispatch, clientInfo, data, isAuthenticated]);

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <GlobalStyles />
      {children}
    </StyleSheetManager>
  );
}
