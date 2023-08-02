import { useState } from "react";
import Image from "next/image";

import passwordOffIcon from '../../../public/eye-off.svg'
import passwordOnIcon from '../../../public/eye-on.svg'

import { AlertPassword, ContainerInput, ContentSecurity, InputPassword, SaveButton, Title } from "./styles";

export function SecurityForm() {
  const [password, setPassword] = useState(false)
  const [newPassword, setNewPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState(false)

  return (
    <ContentSecurity>
      <Title>Trocar senha</Title>

      {/* SENHA ATUAL  */}
      <ContainerInput>
        <InputPassword
          type={password ? 'text' : 'password'}
          placeholder="Senha atual"
        />
        {!password ?
          <Image
            src={passwordOffIcon}
            style={{ marginRight: '1rem', cursor: 'pointer' }}
            width={20}
            height={20}
            alt="Mostrar Senha"
            onClick={() => setPassword(!password)}
          />
          :
          <Image
            src={passwordOnIcon}
            style={{ marginRight: '1rem', cursor: 'pointer' }}
            width={20}
            height={20}
            alt="Mostrar Senha"
            onClick={() => setPassword(!password)}
          />
        }
      </ContainerInput>

      {/* SENHA  */}
      <ContainerInput>
        <InputPassword
          type={newPassword ? 'text' : 'password'}
          placeholder="Senha"
        />
        {!newPassword ?
          <Image
            src={passwordOffIcon}
            style={{ marginRight: '1rem', cursor: 'pointer' }}
            width={20}
            height={20}
            alt="Mostrar Senha"
            onClick={() => setNewPassword(!newPassword)}
          />
          :
          <Image
            src={passwordOnIcon}
            style={{ marginRight: '1rem', cursor: 'pointer' }}
            width={20}
            height={20}
            alt="Mostrar Senha"
            onClick={() => setNewPassword(!newPassword)}
          />
        }
      </ContainerInput>

      <AlertPassword>• Ter 8 ou mais caracteres</AlertPassword>
      <AlertPassword>• Letras e números</AlertPassword>
      <AlertPassword>• Letra maiúscula</AlertPassword>
      <AlertPassword>• Caracteres especiais (*,!.&%$#@)</AlertPassword>

      {/* CONFIRMAÇÃO DE SENHA  */}
      <ContainerInput>
        <InputPassword
          type={confirmPassword ? 'text' : 'password'}
          placeholder="Confirmação de senha"
        />
        {!confirmPassword ?
          <Image
          src={passwordOffIcon}
          style={{ marginRight: '1rem', cursor: 'pointer' }}
          width={20}
          height={20}
          alt="Mostrar Senha"
          onClick={() => setConfirmPassword(!confirmPassword)}
        />
          :
          <Image
          src={passwordOnIcon}
          style={{ marginRight: '1rem', cursor: 'pointer' }}
          width={20}
          height={20}
          alt="Mostrar Senha"
          onClick={() => setConfirmPassword(!confirmPassword)}
        />
        }
        
      </ContainerInput>

      <SaveButton>Salvar</SaveButton>
    </ContentSecurity>
  );
}