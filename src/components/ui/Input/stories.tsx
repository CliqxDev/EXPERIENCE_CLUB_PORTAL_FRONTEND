import { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { InputProps } from './types';
import Input from '.';

export default {
  title: 'Input ',
  component: Input
} as Meta;

export const Default: Story<InputProps> = args => {
  const [value, setValue] = useState<string>('');
  return (
    <div style={{ width: '30%', marginTop: 20 }}>
      <Input
        {...args}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        label="CPF"
        id="cpf"
        name="cpf"
        mask={{ mask: '999.999.999-99', maskPlaceholder: '' }}
        placeholder="Digite seu CPF aqui"
      />
    </div>
  );
};
