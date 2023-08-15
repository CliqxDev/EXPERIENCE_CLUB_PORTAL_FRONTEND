import Image from 'next/image';

import CardColumnist from 'components/CardColumnist';

import perfilColunista from '../../../public/img/perfil-colunista.png';

import * as S from './styles';

const InfoColumnists = () => (
  <S.InfoColumnistsWrapper>
    <S.InfoColumnist>
      <Image
        src={perfilColunista}
        alt="Foto de perfil"
        style={{ borderRadius: '99px' }}
        width={92}
        height={92}
      />
      <S.NameColumnist>Denize Bacoccina</S.NameColumnist>
      <S.DescriptionColumnist>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </S.DescriptionColumnist>
    </S.InfoColumnist>

    <CardColumnist />    
  </S.InfoColumnistsWrapper>
);

export default InfoColumnists;