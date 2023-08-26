import Link from 'next/link';
import { useState } from 'react';
import Menu from 'components/MenuComponents/Menu';
import SearchMenu from 'components/SearchMenu';
import * as S from './styles';

const PostHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <S.Header>
      {showMenu && <Menu onClose={() => setShowMenu(false)} />}
      {showSearch && <SearchMenu onClose={() => setShowSearch(false)} />}

      <S.HeaderAction>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <img
            src="/img/icon-back.svg"
            alt="ícone de seta apontando para esquerda"
          />
        </Link>
      </S.HeaderAction>
      <img
        src="/img/icon-logo-exp.svg"
        alt="ícone do logo reduzido da exp-club"
      />

      <S.HeaderAction>
        <S.Action onClick={() => setShowSearch(true)}>
          <img src="/img/icon-search.svg" alt="ícone de uma lupa" />
        </S.Action>

        <S.Action onClick={() => setShowMenu(true)}>
          <img
            src="/img/icon-sandwich.svg"
            alt="ícone do menu, estilo sanduíche"
          />
        </S.Action>
      </S.HeaderAction>
    </S.Header>
  );
};

export default PostHeader;
