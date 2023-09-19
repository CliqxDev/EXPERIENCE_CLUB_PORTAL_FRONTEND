import styled from 'styled-components';
import { breakpoints } from 'styles';

export const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #e8e8e8;
`;

export const WrapperTrail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  a {
    text-decoration: none;
  }

  ${breakpoints.up('md')} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Trail = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoints.up('md')} {
    width: 1140px;
    flex-direction: row;

    a {
      width: 100%;
    }
  }
`;

export const TitleTrailWrapper = styled.div`
  margin-left: 1.6rem;

  ${breakpoints.up('md')} {
    display: flex;
    justify-content: center;
  }
  margin-bottom: 2.4rem;
`;

export const TitleTrail = styled.div`
  color: #4a4a49;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;

  ${breakpoints.up('md')} {
    width: 1140px;
  }
`;
