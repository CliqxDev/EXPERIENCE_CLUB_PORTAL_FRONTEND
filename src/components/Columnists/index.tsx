/* eslint-disable react/no-array-index-key */
import Image from 'next/image';

import arrowRight from '../../../public/img/arrow-right-blue.svg';
import perfilColunista from '../../../public/img/perfil-colunista.png';

import * as S from './styles';

const columnistsCard: Array<object> = [
  {
    img: <Image src="" alt="" />,
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum do.',
    nameColumnist: 'Denize Bacoccina',
    showMoreColumnist: <Image src="" alt="" />,
  },
  {
    img: <Image src="" alt="" />,
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum do.',
    nameColumnist: 'Denize Bacoccina',
    showMoreColumnist: <Image src="" alt="" />,
  },
  {
    img: <Image src="" alt="" />,
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum do.',
    nameColumnist: 'Denize Bacoccina',
    showMoreColumnist: <Image src="" alt="" />,
  },
  {
    img: <Image src="" alt="" />,
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum do.',
    nameColumnist: 'Denize Bacoccina',
    showMoreColumnist: <Image src="" alt="" />,
  },
  {
    img: <Image src="" alt="" />,
    description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum do.',
    nameColumnist: 'Denize Bacoccina',
    showMoreColumnist: <Image src="" alt="" />,
  },
]

const Columnists = () => (
  <S.ColumnistsWrapper>
    <S.TopContent>
      <S.ColumnistsTitle>
        Colunistas
      </S.ColumnistsTitle>
      <S.ShowMore>
        Veja Mais
      </S.ShowMore>
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
            <S.Description>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum do.
            </S.Description>
          </S.InfoColumnists>

          <S.FooterCard>
            <S.NameColumnist>
              Denize Bacoccina
            </S.NameColumnist>

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