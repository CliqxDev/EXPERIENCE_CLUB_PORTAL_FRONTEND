import Image from 'next/image';

import Title from 'components/Title';

import attIcon from '../../../../public/img/atualize-icon.svg';
import bookIcon from '../../../../public/img/book-icon.svg';
import glassesIcon from '../../../../public/img/glasses-icon.svg';
import listeningIcon from '../../../../public/img/listening-icon.svg';
import micIcon from '../../../../public/img/mic-icon.svg';
import readIcon from '../../../../public/img/read-icon.svg';
import videosIcon from '../../../../public/img/videos-icon.svg';

import * as S from './styles';

const formatTypes = [
  {
    action: 'Leia',
    actionIcon: <Image src={readIcon} alt="Leia" />,
    format: 'Reports'
  },
  {
    action: 'Atualize',
    actionIcon: <Image src={attIcon} alt="Atualize" />,
    format: 'Reportagens'
  },
  {
    action: 'Assista',
    actionIcon: <Image src={videosIcon} alt="Vídeos" />,
    format: 'Vídeos'
  },
  {
    action: 'Acompanhe',
    actionIcon: <Image src={glassesIcon} alt="Acompanhe" />,
    format: 'Colunistas'
  },
  {
    action: 'Escute',
    actionIcon: <Image src={listeningIcon} alt="Escute" />,
    format: 'Podcasts'
  },
  {
    action: 'Análise',
    actionIcon: <Image src={bookIcon} alt="Análise" />,
    format: 'Livros'
  },
  {
    action: 'Conheça',
    actionIcon: <Image src={micIcon} alt="Conheça" />,
    format: 'Entrevistas'
  }
];

const Formats = () => (
  <S.FormatsWrapper>
    <Title variant="black400">Formatos</Title>

    <S.ListCard>
      {formatTypes.map(card => (
        <S.ContentCard key={card.action}>
          <S.TopCard>
            <S.ActionTitle>{card.action}</S.ActionTitle>
            {card.actionIcon}
          </S.TopCard>
          <S.FormatsTitle>{card.format}</S.FormatsTitle>
        </S.ContentCard>
      ))}
    </S.ListCard>
  </S.FormatsWrapper>
);

export default Formats;
