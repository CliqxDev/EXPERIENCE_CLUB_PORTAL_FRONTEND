import { FC } from 'react';

import * as S from './styles';

type AssignCardProps = {
  title: string;
  subtitle: string;
  message: string;
}

const AssignNewsletter: FC<AssignCardProps> = ({
  title,
  subtitle,
  message
}) => (
  <S.AssignWrapper>
    <S.TopCard>

      <S.Title>
        {title}
      </S.Title>
      <S.SubTitle>
        {subtitle}
      </S.SubTitle>

    </S.TopCard>
    <S.FooterCard>

      <S.Message>
        {message}
      </S.Message>
      
    </S.FooterCard>
  </S.AssignWrapper>
)

export default AssignNewsletter;