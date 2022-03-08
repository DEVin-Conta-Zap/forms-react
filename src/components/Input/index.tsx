import { InputHTMLAttributes } from 'react';

import * as S from './styles'

export type InputProps = {
  label: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({label, errorMessage, disabled, ...otherProps } : InputProps) => {
  return (
    <S.InputWrapper error={!!errorMessage} disabled={disabled} >
      <S.DescriptionInput>{label}</S.DescriptionInput>
      <S.InputText {...otherProps} />
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    </S.InputWrapper>
  )
}

export default Input