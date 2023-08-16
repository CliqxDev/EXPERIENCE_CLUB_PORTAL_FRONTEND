/* eslint-disable @typescript-eslint/no-explicit-any */
import { Spacings } from 'utils';

export type InputMode =
  | 'text'
  | 'none'
  | 'search'
  | 'tel'
  | 'url'
  | 'email'
  | 'numeric'
  | 'decimal'
  | undefined;

export type Variant = 'transparent' | 'transparent2' | 'default';

export type InputProps = {
  spacing?: Spacings;
  errorMessage?: string;
  type?: string;
  info?: string;
  disabled?: boolean;
  required?: boolean;
  name: string;
  value: string;
  id: string;
  style?: object;
  onChange: any;
  onBlur?: any;
  placeholder?: string;
  label: string;
  mask?: any;
  inputMode?: InputMode;
  autoFocus?: boolean | undefined;
  variant?: Variant;
  fullWidth?: boolean;
};
