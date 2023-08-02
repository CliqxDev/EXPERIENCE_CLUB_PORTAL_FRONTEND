/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'

import * as S from './styles';

const Trails = () => (
    <S.Wrapper>
      <S.Title>Trilhas</S.Title>

      <S.ContentRadio style={{ marginTop: '2rem' }}>
        {/* MERCADO */}
        <input
          name="button-radio"
          id="button-radio1"
          type="radio"
        />
        <S.RadioLabel htmlFor="button-radio1">
          Mercado
        </S.RadioLabel>

        {/* GESTÃO */}
        <input
          name="button-radio"
          id="button-radio2"
          type="radio"
        />
        <S.RadioLabel htmlFor="button-radio2" style={{ width: '9.6rem' }}>
          Gestão
        </S.RadioLabel>

        {/* TECNOLOGIA */}
        <input
          name="button-radio"
          id="button-radio3"
          type="radio"
        />
        <S.RadioLabel htmlFor="button-radio3" style={{ width: '12rem', marginRight: '0' }}>
          Tecnologia
        </S.RadioLabel>
      </S.ContentRadio>

      <S.ContentRadio>
        {/* ESG */}
        <input
          name="button-radio"
          id="button-radio4"
          type="radio"
        />
        <S.RadioLabel htmlFor="button-radio4" style={{ width: '10.7rem' }}>
          ESG
        </S.RadioLabel>

        {/* STARTUP */}
        <input
          name="button-radio"
          id="button-radio5"
          type="radio"
        />
        <S.RadioLabel htmlFor="button-radio5" style={{ width: '10rem' }}>
          Startup
        </S.RadioLabel>

        {/* FUTURO */}
        <input
          name="button-radio"
          id="button-radio6"
          type="radio"
        />
        <S.RadioLabel htmlFor="button-radio6" style={{ width: '15.7rem', marginRight: '0' }}>
          Futuro
        </S.RadioLabel>
      </S.ContentRadio>

    </S.Wrapper>
  );

export default Trails;