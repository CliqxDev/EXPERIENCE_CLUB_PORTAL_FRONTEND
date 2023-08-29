import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ButtonMenu } from 'components/MenuComponents/ButtonMenu';
import Menu from 'components/MenuComponents/Menu';
import * as S from './styles';
import headerImg from '../../../../public/img/exp-logo.png';
import backIcon from '../../../../public/img/arrow-left.svg';

const HeaderEmployees = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <S.Wrapper>
      {showMenu && <Menu onClose={() => setShowMenu(false)} />}

      <Link href="/">
        <Image
          alt="Voltar"
          src={backIcon}
          style={{ marginLeft: '1.4rem' }}
        />
      </Link>

      <Image
        alt="Logo Experience Club"
        src={headerImg}
        style={{ marginLeft: '1.4rem' }}
      />

      <ButtonMenu onClick={() => setShowMenu(true)}>
        <svg
          style={{ marginRight: '1.2rem' }}
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z"
            fill="#4A4A49"
          />
        </svg>
      </ButtonMenu>
    </S.Wrapper>
  );
}

export default HeaderEmployees;