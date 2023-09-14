import { FC, useEffect, useState } from 'react';

import * as S from './styles';
import { PasswordRule, Props } from './types';

const PasswordRules: FC<Props> = ({ password, onChangePassword }) => {
  const [passwordRule, setPasswordRule] = useState<PasswordRule>({
    length: 'default',
    letterAndNumber: 'default',
    upperCaseLetter: 'default',
    specialCharacter: 'default'
  });

  useEffect(() => {
    let newRules: PasswordRule = {
      length: 'error',
      letterAndNumber: 'error',
      upperCaseLetter: 'error',
      specialCharacter: 'error'
    };

    if (password) {
      const format = /[ `!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/;

      if (password.length >= 8) {
        newRules.length = 'done';
      }

      if (password.search(/[A-Z]/) !== -1) {
        newRules.upperCaseLetter = 'done';
      }

      if (
        password.search(/[0-9]/) !== -1 &&
        (password.search(/[a-z]/) !== -1 || password.search(/[A-Z]/) !== -1)
      ) {
        newRules.letterAndNumber = 'done';
      }

      if (format.test(password)) {
        newRules.specialCharacter = 'done';
      }
    } else {
      newRules = {
        length: 'default',
        letterAndNumber: 'default',
        upperCaseLetter: 'default',
        specialCharacter: 'default'
      };
    }
    setPasswordRule(newRules);
    onChangePassword(newRules);
  }, [password]);

  return (
    <S.PasswordRulesWrapper>
      <S.ItemRule variant={passwordRule.length}>
        • Ter 8 ou mais caracteres
      </S.ItemRule>
      <S.ItemRule variant={passwordRule.letterAndNumber}>
        • Letra e números
      </S.ItemRule>
      <S.ItemRule variant={passwordRule.upperCaseLetter}>
        • Letra maiúscula
      </S.ItemRule>
      <S.ItemRule variant={passwordRule.specialCharacter}>
        • Caracteres especiais (*,!.&%$#@)
      </S.ItemRule>
    </S.PasswordRulesWrapper>
  );
};

export default PasswordRules;
