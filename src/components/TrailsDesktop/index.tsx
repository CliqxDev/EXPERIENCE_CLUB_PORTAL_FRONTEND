import { useEffect, useState } from 'react';
import { forEach } from 'lodash';
import { useCategory } from 'hook/selectors/postHooks';
import LinkMenu from 'components/MenuComponents/LinkMenu';
import * as S from './styles';

type Category = {
  id: number;
  name: string;
};

const backgrounds: any = {
  0: '#708CFD',
  1: '#5476FD',
  2: '#254CE5',
  3: '#1D3CB3',
  4: '#172E8B',
  5: '#11236A'
};

const TrailsDesktop = () => {
  const { data: categoryData } = useCategory();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (categoryData) {
      const newCategories: Category[] = [];
      let idx = 0;
      forEach(categoryData, item => {
        newCategories.push({ id: idx, name: item });
        idx += 1;
      });
      setCategories(newCategories);
    }
  }, [categoryData]);

  return (
    <S.WrapperTrail>
      {categories.slice(0, 6).map(({ id, name }) => (
        <LinkMenu key={id} variant="sort" color={backgrounds[id]}>
          {name}
        </LinkMenu>
      ))}
    </S.WrapperTrail>
  )
}

export default TrailsDesktop;