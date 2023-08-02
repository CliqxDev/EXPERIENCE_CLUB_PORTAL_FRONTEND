import { FC, InputHTMLAttributes, ReactNode, useEffect, useState } from 'react';

import * as S from './styles';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  children: ReactNode;
  onChangeChecked: (checked: boolean) => void;
  defaultChecked?: boolean;
};

const Checkbox: FC<CheckboxProps> = ({
  children,
  onChangeChecked,
  defaultChecked
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (defaultChecked !== undefined) {
      if (defaultChecked !== checked) {
        setChecked(defaultChecked);
      }
    }
  }, [defaultChecked]);
  return (
    <S.Wrapper
      onClick={() => {
        setChecked(!checked);
        onChangeChecked(!checked);
      }}
    >
      <S.CheckboxWrapper>
        <S.Checkbox checked={checked} onChange={() => setChecked(!checked)} />
      </S.CheckboxWrapper>
      {children}
    </S.Wrapper>
  );
};
export default Checkbox;
