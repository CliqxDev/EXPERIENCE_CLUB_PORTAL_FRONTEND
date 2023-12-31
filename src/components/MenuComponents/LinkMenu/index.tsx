import { FC, ReactNode } from 'react';

import { ButtonMenu } from 'components/MenuComponents/ButtonMenu';

import * as S from './styles';

type LinkMenuProps = {
  children: ReactNode;
  onRedirect?: () => void;
  variant?: string;
  color?: string;
};

const LinkMenu: FC<LinkMenuProps> = ({
  children,
  onRedirect,
  color,
  variant
}) => (
  <S.Wrapper variant={variant || ''} color={color || '#ffffff'}>
    <span>{children}</span>

    <ButtonMenu onClick={onRedirect}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1754_54889"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1754_54889)">
          <path
            d="M8.87309 17.1274C8.7282 16.9825 8.65576 16.8069 8.65576 16.6005C8.65576 16.3941 8.7282 16.2184 8.87309 16.0736L12.9462 12.0005L8.87309 7.92738C8.7282 7.78251 8.65576 7.60688 8.65576 7.40048C8.65576 7.19408 8.7282 7.01844 8.87309 6.87358C9.01795 6.72869 9.19359 6.65625 9.39999 6.65625C9.60639 6.65625 9.78202 6.72869 9.92689 6.87358L14.4211 11.3678C14.5147 11.4614 14.5807 11.5601 14.6192 11.664C14.6577 11.7678 14.6769 11.88 14.6769 12.0005C14.6769 12.121 14.6577 12.2332 14.6192 12.337C14.5807 12.4409 14.5147 12.5396 14.4211 12.6332L9.92689 17.1274C9.78202 17.2723 9.60639 17.3447 9.39999 17.3447C9.19359 17.3447 9.01795 17.2723 8.87309 17.1274Z"
            fill={variant === 'sort' ? '#ffffff' : '#686866'}
          />
        </g>
      </svg>
    </ButtonMenu>
  </S.Wrapper>
);

export default LinkMenu;
