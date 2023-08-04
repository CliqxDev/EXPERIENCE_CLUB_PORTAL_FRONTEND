import Image from 'next/image';

import bannerExplore from '../../../public/img/explore-bg.png'
import shareIcon from '../../../public/img/share-icon-black.svg'

import * as S from './styles';

const Explore = () => (
  <S.ExploreWrapper>
    <S.ExploreTitle>
      Explore
    </S.ExploreTitle>

    <S.ListCard>
      <S.Card>
        <Image
          src={bannerExplore}
          alt="Banner"
          width={145}
          height={112}
        />
        <S.DescriptionCard>
          Lorem ipsum dolor sit amet consecter.
        </S.DescriptionCard>

        <S.FooterCard>
          <S.TextFooter>Tecnologia</S.TextFooter>
          <Image
          src={shareIcon}
          alt="Compartilhar"
        />
        </S.FooterCard>
      </S.Card>

      <S.Card>
        <Image
          src={bannerExplore}
          alt="Banner"
          width={145}
          height={112}
        />
        <S.DescriptionCard>
          Lorem ipsum dolor sit amet consecter.
        </S.DescriptionCard>
      </S.Card>

    </S.ListCard>
  </S.ExploreWrapper>
);

export default Explore;