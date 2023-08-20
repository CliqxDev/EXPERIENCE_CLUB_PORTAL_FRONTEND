import { FC } from 'react';

import * as S from './styles';
import { SelectProps, OptionType } from './types';

const Select: FC<SelectProps> = ({
  errorMessage,
  disabled = false,
  label,
  fullWidth,
  onChange,
  required,
  value,
  id,
  ...props
}) => (
  <S.WrappedMain id={id}>
    <S.ReactSelect
      value={value}
      fullWidth={fullWidth}
      classNamePrefix="react-select"
      placeholder=""
      onChange={(option: OptionType) => onChange(option)}
      id={id}
      disabled={disabled}
      {...props}
    />
    {!!label && (
      <S.Label htmlFor={id}>
        <>
          {label} {required && <span>*</span>}
        </>
      </S.Label>
    )}
  </S.WrappedMain>
);

export default Select;
