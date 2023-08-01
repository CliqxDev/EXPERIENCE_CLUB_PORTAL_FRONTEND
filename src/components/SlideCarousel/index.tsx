import Image from 'next/image';

import articleIcon from '../../../public/img/article.svg'
import shareIcon from '../../../public/img/share.svg'

import * as S from './styles';

const SlideCarousel = () => (
  <S.Wrapper>
    <S.Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nunc feugiat aliquet sem, nec ullamcorper ipsum venenatis vel.
    </S.Title>
    <S.Description>
      Suspendisse potenti. Sed eleifend aliquam ultricies.
      Sed facilisis, justo in sodales sagittis, nunc purus dictum elit,
    </S.Description>

    <S.FooterSlide>

      <S.SubjectSection>
        <Image
          src={articleIcon}
          alt="Assunto"
        />
        <S.Span>
          Mercado
        </S.Span>
      </S.SubjectSection>

      <Image
        src={shareIcon}
        alt="Compartilhar"
        style={{ width: '15%' }}
      />
    </S.FooterSlide>
  </S.Wrapper>
);

export default SlideCarousel;