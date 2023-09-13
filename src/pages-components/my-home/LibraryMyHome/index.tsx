
import Image from 'next/image';
import Link from 'next/link';
import Title from 'components/ui/Title';
import { useClientInfo } from 'hook/selectors/authHooks';
import * as S from './styles';
import readIcon from '../../../../public/img/read-icon.svg';
import bannerImg from '../../../../public/img/banner-library.png';
import employeesIcon from '../../../../public/img/employees-icon-blue.svg';
import shareIcon from '../../../../public/img/share-icon-blue.svg';

type CardProps = {
  title: string;
  description: string;
}

const CARD_LIST: CardProps[] = [
  {
    title: 'Leia',
    description: 'Lorem ipsum dolor sit amet consectetur. Maecenas nulla vitae elit enim amet.'
  },
  {
    title: 'Leia',
    description: 'Lorem ipsum dolor sit amet consectetur. Maecenas nulla vitae elit enim amet.'
  },
  {
    title: 'Leia',
    description: 'Lorem ipsum dolor sit amet consectetur. Maecenas nulla vitae elit enim amet.'
  },
  {
    title: 'Leia',
    description: 'Lorem ipsum dolor sit amet consectetur. Maecenas nulla vitae elit enim amet.'
  },
  {
    title: 'Leia',
    description: 'Lorem ipsum dolor sit amet consectetur. Maecenas nulla vitae elit enim amet.'
  },
  {
    title: 'Leia',
    description: 'Lorem ipsum dolor sit amet consectetur. Maecenas nulla vitae elit enim amet.'
  },
]

const LibraryMyHome = () => {
  const { data } = useClientInfo();
  const userIsAdmin = data?.is_admin;

  return (
    <S.Wrapper>
      {userIsAdmin === true &&
        <S.AdminUser>
          <Link href="/employees" style={{ textDecoration: 'none' }}>
            <S.CardAdminUser>
              <Image
                src={employeesIcon}
                alt="Colaboradores"
              />
              <p style={{ marginTop: '8px'}}>Colaboradores</p>
            </S.CardAdminUser>
          </Link>
          <S.CardAdminUser>
            <Image
              src={shareIcon}
              alt="Colaboradores"
            />
            <p>Compartilhados</p>
          </S.CardAdminUser>
        </S.AdminUser>
      }

      <Title variant='black400'>Biblioteca</Title>

      <S.LibraryList>
        {CARD_LIST.map((card) => (
          <>
            <S.CardLibrary>
              <S.TopCard>
                <S.TitleTopCard>{card.title}</S.TitleTopCard>
                <Image src={readIcon} alt="Leia" />
              </S.TopCard>
              <Image
                src={bannerImg}
                alt="Banner"
                width={240}
                height={200}
              />
              <S.DescriptionCard>
                {card.description}
              </S.DescriptionCard>
            </S.CardLibrary>
          </>
        ))}
      </S.LibraryList>

      <S.ReadButtons>
        <S.Button variant='blue400'>Ler Depois</S.Button>
        <S.Button variant='blue500'>Favoritos</S.Button>
      </S.ReadButtons>
    </S.Wrapper>
  );
}

export default LibraryMyHome;