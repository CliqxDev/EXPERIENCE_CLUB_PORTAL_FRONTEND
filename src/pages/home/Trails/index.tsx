/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';

import CardTrails from 'pages/home/CardTrails';
import Title from 'components/Title';

import * as S from './styles';

const Trails = () => {
  const [optionLabel, setOptionLabel] = useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptionLabel(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setOptionLabel('mercado');
    }, 100);
  }, []);

  return (
    <S.Wrapper labelSelected={optionLabel}>
      <Title variant="black50">Trilhas</Title>

      <S.ContentRadio style={{ marginTop: '2rem' }}>
        {/* MERCADO */}
        <input
          name="button-radio"
          id="button-radio1"
          type="radio"
          value="mercado"
          checked={optionLabel === 'mercado'}
          onChange={handleOptionChange}
        />
        <S.RadioLabel labelSelected={optionLabel} htmlFor="button-radio1">
          Mercado
        </S.RadioLabel>

        {/* GESTÃO */}
        <input
          name="button-radio"
          id="button-radio2"
          type="radio"
          value="gestao"
          checked={optionLabel === 'gestao'}
          onChange={handleOptionChange}
        />
        <S.RadioLabel
          labelSelected={optionLabel}
          htmlFor="button-radio2"
          style={{ width: '9.6rem' }}
        >
          Gestão
        </S.RadioLabel>

        {/* TECNOLOGIA */}
        <input
          name="button-radio"
          id="button-radio3"
          type="radio"
          value="tecnologia"
          checked={optionLabel === 'tecnologia'}
          onChange={handleOptionChange}
        />
        <S.RadioLabel
          labelSelected={optionLabel}
          htmlFor="button-radio3"
          style={{ width: '12rem', marginRight: '0' }}
        >
          Tecnologia
        </S.RadioLabel>
      </S.ContentRadio>

      <S.ContentRadio>
        {/* ESG */}
        <input
          name="button-radio"
          id="button-radio4"
          type="radio"
          value="esg"
          checked={optionLabel === 'esg'}
          onChange={handleOptionChange}
        />
        <S.RadioLabel
          labelSelected={optionLabel}
          htmlFor="button-radio4"
          style={{ width: '10.7rem' }}
        >
          ESG
        </S.RadioLabel>

        {/* STARTUP */}
        <input
          name="button-radio"
          id="button-radio5"
          type="radio"
          value="startup"
          checked={optionLabel === 'startup'}
          onChange={handleOptionChange}
        />
        <S.RadioLabel
          labelSelected={optionLabel}
          htmlFor="button-radio5"
          style={{ width: '10rem' }}
        >
          Startup
        </S.RadioLabel>

        {/* FUTURO */}
        <input
          name="button-radio"
          id="button-radio6"
          type="radio"
          value="futuro"
          checked={optionLabel === 'futuro'}
          onChange={handleOptionChange}
        />
        <S.RadioLabel
          labelSelected={optionLabel}
          htmlFor="button-radio6"
          style={{ width: '15.7rem', marginRight: '0' }}
        >
          Futuro
        </S.RadioLabel>
      </S.ContentRadio>
    </S.Wrapper>
  );
};

export default Trails;
