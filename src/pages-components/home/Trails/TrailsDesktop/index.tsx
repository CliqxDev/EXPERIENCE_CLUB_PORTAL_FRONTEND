import { FC, useEffect, useState } from 'react';
import { forEach } from 'lodash';
import { useCategory } from 'hook/selectors/postHooks';
import * as S from './styles';

type Category = {
  id: number;
  name: string;
};

type TrailButtonProps = {
  variant?: string;
  color?: string;
};

const backgrounds: any = {
  0: '#708CFD',
  1: '#5476FD',
  2: '#254CE5',
  3: '#1D3CB3',
  4: '#172E8B',
  5: '#11236A'
};

const TrailsDesktop: FC<TrailButtonProps> = () => {
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
    <S.WrapperTrailDesktop>
      <S.WrapperTrail>
        {categories.slice(0, 6).map(({ id, name }) => (
          <S.TrailButton key={id} variant="sort" color={backgrounds[id]}>
            <span>{name}</span>
          </S.TrailButton>
        ))}
      </S.WrapperTrail>
    </S.WrapperTrailDesktop>
  )
}

export default TrailsDesktop;