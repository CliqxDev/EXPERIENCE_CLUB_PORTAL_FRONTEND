import { useState } from "react";
import Image from "next/image";

import passwordIcon from '../../../public/eye-off.svg'

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
        <Image
          src={passwordIcon}
          style={{ marginRight: '1rem', cursor: 'pointer' }}
          width={20}
          height={20}
          alt="Mostrar Senha"
          onClick={() => setPassword(!password)}
        />
      </ContainerInput>

      {/* SENHA  */}
      <ContainerInput>
        <InputPassword
          type={newPassword ? 'text' : 'password'}
          placeholder="Senha"
        />
        <Image
          src={passwordIcon}
          style={{ marginRight: '1rem', cursor: 'pointer' }}
          width={20}
          height={20}
          alt="Mostrar Senha"
          onClick={() => setNewPassword(!newPassword)}
        />
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
        <Image
          src={passwordIcon}
          style={{ marginRight: '1rem', cursor: 'pointer' }}
          width={20}
          height={20}
          alt="Mostrar Senha"
          onClick={() => setConfirmPassword(!confirmPassword)}
        />
      </ContainerInput>

      <SaveButton>Salvar</SaveButton>
    </ContentSecurity>
  );
}