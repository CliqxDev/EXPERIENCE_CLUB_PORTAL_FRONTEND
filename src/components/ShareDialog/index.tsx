/* eslint-disable @typescript-eslint/no-unused-expressions */
import { FC } from 'react';
import { uniqueId } from 'lodash';
import CopyToClipboard from 'react-copy-to-clipboard';

import Link from 'next/link';
import Dialog from 'components/Dialog';
import * as S from './styles';

type Props = {
  onClose: () => void;
  id: number | string;
};

type ButtonShare = {
  label: string;
  link: string;
};

const SOCIAL_MEDIA_ICONS: any = {
  Facebook: '/img/facebook.svg',
  Linkedin: '/img/linkedin.svg',
  Instagram: '/img/instagram.svg',
  Telegram: '/img/telegram.svg',
  WhatsApp: '/img/whatsapp.svg',
  Twitter: '/img/twitter.svg'
};

const BUTTONS_SHARE: ButtonShare[] = [
  {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/'
  },
  {
    label: 'Telegram',
    link: 'https://web.telegram.org/a/'
  },
  {
    label: 'Facebook',
    link: 'https://www.facebook.com/'
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/'
  },
  {
    label: 'WhatsApp',
    link: 'https://web.whatsapp.com/'
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/'
  }
];

const ShareDialog: FC<Props> = ({ id, onClose }) => {
  const handleText = () => {
    if (typeof window !== 'undefined') {
      return `${window.location.host}/post/${id}`;
    }
    return '';
  };

  return (
    <Dialog show={!!id} onClose={onClose}>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.Content>
            <S.Title>Compartilhar</S.Title>
            <S.Subtitle>
              Compartilhe essa publicação nas redes ou envie para seus contatos.
            </S.Subtitle>
            <CopyToClipboard text={handleText()}>
              <S.Button>
                <img src="/img/copy-icon.svg" alt="ícone copia" />
              </S.Button>
            </CopyToClipboard>
            <S.Subtitle style={{ textAlign: 'center', marginTop: 8 }}>
              Copiar
            </S.Subtitle>
          </S.Content>

          <S.SocialMediaWrapper>
            {BUTTONS_SHARE.map(item => (
              <Link
                style={{ textDecoration: 'none' }}
                href={item.link}
                rel="noopener noreferrer"
                target="_blank"
                key={uniqueId()}
              >
                <S.ButtonSocialMediaWrapper>
                  <S.ButtonSocialMedia>
                    <S.ImageWrapper>
                      <img
                        src={SOCIAL_MEDIA_ICONS[item.label]}
                        alt="ícone da rede social"
                      />
                    </S.ImageWrapper>

                    {item.label}
                  </S.ButtonSocialMedia>
                </S.ButtonSocialMediaWrapper>
              </Link>
            ))}
            <S.ButtonSocialMedia
              style={{ backgroundColor: '#ffffff', cursor: 'default' }}
            />
            <S.ButtonSocialMedia
              style={{ backgroundColor: '#ffffff', cursor: 'default' }}
            />
          </S.SocialMediaWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </Dialog>
  );
};

export default ShareDialog;
