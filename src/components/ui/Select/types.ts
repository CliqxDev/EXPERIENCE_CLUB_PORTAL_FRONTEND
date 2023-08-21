/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { GroupBase, OptionsOrGroups } from 'react-select';
import { Spacings } from 'utils';

export type SelectStyledProps = {
  spacing?: Spacings;
  errorMessage?: string;
  disabled?: boolean;
  required?: boolean;
  name: string;
  value: { label: string; value: string };
  id: string;
  onChange: any;
  onBlur?: any;
  placeholder?: string;
  label: string;
  mask?: any;
  autoFocus?: boolean | undefined;
  fullwidth?: boolean;
};

export type OptionType = {
  value: string;
  label: string;
};

type ReactSelectProps = {
  options?: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined;
  placeholder?: string;
};

export type SelectProps = ReactSelectProps & SelectStyledProps;
