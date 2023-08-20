/* eslint-disable react/no-array-index-key */
import Image from 'next/image';

import Title from 'components/ui/Title';

import arrowRight from '../../../../public/img/arrow-right-blue.svg';
import perfilColunista from '../../../../public/img/perfil-colunista.png';

import * as S from './styles';

const columnistsCard = [
  {
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum do.',
    nameColumnist: 'Denize Bacoccina1'
  },
  {
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum do.',
    nameColumnist: 'Denize Bacoccina2'
  },
  {
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum do.',
    nameColumnist: 'Denize Bacoccina3'
  },
  {
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum do.',
    nameColumnist: 'Denize Bacoccina4'
  },
  {
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum do.',
    nameColumnist: 'Denize Bacoccina5'
  }
];

const Columnists = () => (
  <S.ColumnistsWrapper>
    <S.TopContent>
      <Title variant="black400">Colunistas</Title>
      <S.ShowMore>Veja Mais</S.ShowMore>
    </S.TopContent>

    <S.ListColumnists>
      {columnistsCard.map((card, idx) => (
        <S.CardColumnists key={idx}>
          {/* INFO */}
          <S.InfoColumnists>
            <Image
              src={perfilColunista}
              alt="Foto Colunista"
              width={92}
              height={92}
              style={{ borderRadius: '99px', marginLeft: '1rem' }}
            />
            <S.Description>{card.description}</S.Description>
          </S.InfoColumnists>

          <S.FooterCard>
            <S.NameColumnist>{card.nameColumnist}</S.NameColumnist>

            <Image
              src={arrowRight}
              alt="Ver Colunista"
              width={20}
              height={14}
            />
          </S.FooterCard>
        </S.CardColumnists>
      ))}
    </S.ListColumnists>
  </S.ColumnistsWrapper>
);

export default Columnists;
