'use client';

import styled from 'styled-components';
import GlobalStyles from 'styles/global';

const Wrapper = styled.main`
  display: flex;
  color: red;
`;

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>teste</Wrapper>
    </>
  );
}
