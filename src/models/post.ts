import { findIndex } from 'lodash';

export type Category = {
  id: number;
  label: string;
  color: string;
};

export const POST_CATEGORIES: Category[] = [
  {
    id: 2620,
    label: 'Mercado',
    color: '#11236A'
  },
  {
    id: 2621,
    label: 'Gestão',
    color: '#172E8B'
  },
  {
    id: 267,
    label: 'Tecnologia',
    color: '#1D3CB3'
  },
  {
    id: 2440,
    label: 'ESG',
    color: '#254CE5'
  },
  {
    id: 2622,
    label: 'Startup',
    color: '#5476FD'
  },
  {
    id: 2623,
    label: 'Futuro',
    color: '#708CFD'
  }
];
export type Card = {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  categoryId: number;
};

export const findCategoryById = (categoryId: number) => {
  const idx = findIndex(POST_CATEGORIES, ['id', categoryId]);
  if (idx !== -1) {
    return POST_CATEGORIES[idx];
  }
  return { color: '', id: 0, label: '' };
};
